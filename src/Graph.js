import React from 'react';
import Area from './types/Area.js';
import Bars from './types/Bars.js';
import Line from './types/Line.js';
import Dots from './types/Dots.js';
import Threshold from './Threshold.js';
import { scaleLinear } from 'd3-scale';
import './Graph.css';

const graphDefault = {
  series: [],
  width: 160,
  height: 90,
  valueDomain: [0, null],
  paddingX: 5,
  paddingY: 5
};

const seriesDefault = {
  plot: 'line'
};

const types = {
  bars: Bars,
  area: Area,
  line: Line,
  dots: Dots
};

export default class Graph extends React.Component {
  render() {
    // Add defaults to the graph
    const p = Object.assign({}, graphDefault, this.props);

    // If no series, no need for calculating the rest
    if (!p.series.length) {
      return <svg />;
    }

    // reset colorizer
    colorizer(0);

    // Add seriesDefaults to all series
    p.series = p.series.map(s =>
      Object.assign({ color: colorizer() }, seriesDefault, s)
    );

    // yScale cares about the valueDomain and height
    p.yScale = scaleLinear()
      .domain(getValueDomain(p.series, p.valueDomain, graphDefault.valueDomain))
      .range([p.height - p.paddingY * 2, 0]);

    p.xScale = scaleLinear()
      .domain(getTimespanDomain(p.series))
      .range([0, p.width - p.paddingX * 2]);

    return (
      <svg width={p.width} height={p.height} className="graph">
        <g style={{ transform: `translate(${p.paddingX}px,${p.paddingY}px)` }}>
          {p.series.map(s => {
            if (s.points) {
              return types[s.plot || 'line'](
                Object.assign({}, s, {
                  width: p.width,
                  height: p.height,
                  yScale: p.yScale,
                  xScale: p.xScale
                })
              );
            }
          })}

          {p.threshold && <Threshold {...p} />}
        </g>
      </svg>
    );
  }
}

function getValueDomain(series, propDomain, defaultDomain) {
  const valueDomain = [];
  valueDomain[0] =
    typeof propDomain[0] === 'number' ? propDomain[0] : defaultDomain[0];
  valueDomain[1] =
    typeof propDomain[1] === 'number' ? propDomain[1] : defaultDomain[1];

  // if still undefined or null
  if (typeof valueDomain[0] !== 'number') {
    // find min of all the minis of all the series
    const minis = series.map(s => Math.min(...s.points.map(p => p.y)));
    valueDomain[0] = Math.min(...minis);
  }
  if (typeof valueDomain[1] !== 'number') {
    // find max of all the maxes of all the series
    const maxes = series.map(s => Math.max(...s.points.map(p => p.y)));
    valueDomain[1] = Math.max(...maxes);
  }
  return valueDomain;
}

function getTimespanDomain(series) {
  const timespan = [];
  timespan[0] = Math.min(...series.map(s => s.points[0].x));
  timespan[1] = Math.max(...series.map(s => s.points[s.points.length - 1].x));

  return timespan;
}

const colorizer = (function() {
  let colorNumber = 0;
  const colorArray = [
    '#48CFAD',
    '#FC6E51',
    '#A0D468',
    '#ED5565',
    '#4FC1E9',
    '#5D9CEC',
    '#AC92EC',
    '#FFCEF6',
    '#EC87C0'
  ];
  return function(num) {
    if (typeof num === 'number') {
      colorNumber = num;
      return;
    }
    if (colorNumber === colorArray.length) {
      colorNumber = 0;
    }
    const color = colorArray[colorNumber];
    colorNumber++;
    return color;
  };
})();
