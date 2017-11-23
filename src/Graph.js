import React from 'react';
import Area from './types/Area.js';
import Bars from './types/Bars.js';
import Line from './types/Line.js';
import Dots from './types/Dots.js';
import Threshold from './Threshold.js';
import { scaleLinear } from 'd3-scale';

const graphDefaults = {
  series: [],
  width: 160,
  height: 90,
  paddingX: 5,
  paddingY: 5
};

const seriesDefault = {
  color: '#2ebd59',
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
    const p = Object.assign({}, graphDefaults, this.props);

    // If no series, no need for calculating the rest
    if (!p.series.length) {
      return <svg />;
    }

    // Add defaults to points
    p.series = p.series.map(s => Object.assign({}, seriesDefault, s));

    p.yScale = scaleLinear()
      .domain([0, Math.max(...p.series[0].points.map(p => p.y))])
      .range([p.height - p.paddingY * 2, 0]);

    p.xScale = scaleLinear()
      .domain([
        p.series[0].points[0].x || 0,
        p.series[0].points[p.series[0].points.length - 1].x ||
          p.series[0].points.length - 1
      ])
      .range([0, p.width - p.paddingX * 2]);

    return (
      <svg width={p.width} height={p.height}>
        <g style={{ transform: `translate(${p.paddingX}px,${p.paddingY}px)` }}>
          {p.series.map(s => {
            if (s.points) {
              return types[s.plot || 'line']({
                ...s,
                width: p.width,
                height: p.height,
                yScale: p.yScale,
                xScale: p.xScale
              });
            }
          })}

          {p.threshold && <Threshold {...p} />}
        </g>
      </svg>
    );
  }
}
