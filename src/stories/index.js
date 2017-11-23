import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import Graph from '../Graph';
import { singleTS, singleTS2, singleTS3, twentyfive, fifty } from './TestData';

storiesOf('Graph - Single Time Series', module)
  .add('Pass single time series', () => [
    <Graph series={[{ points: singleTS }]} />,
    <Graph series={[{ points: singleTS, plot: 'bars' }]} />,
    <Graph series={[{ points: singleTS, plot: 'area' }]} />,
    <Graph series={[{ points: singleTS, plot: 'dots' }]} />
  ])
  .add('Two data points', () => [
    <Graph series={[{ points: [{ x: 1, y: 1 }, { x: 2, y: 3 }] }]} />,
    <Graph
      series={[{ points: [{ x: 1, y: 1 }, { x: 2, y: 3 }], plot: 'bars' }]}
    />,
    <Graph
      series={[{ points: [{ x: 1, y: 1 }, { x: 2, y: 3 }], plot: 'area' }]}
    />,
    <Graph
      series={[{ points: [{ x: 1, y: 1 }, { x: 2, y: 3 }], plot: 'dots' }]}
    />
  ])
  .add('25 data points', () => [
    <Graph series={[{ points: twentyfive }]} />,
    <Graph series={[{ points: twentyfive, plot: 'bars' }]} />,
    <Graph series={[{ points: twentyfive, plot: 'area' }]} />,
    <Graph series={[{ points: twentyfive, plot: 'dots' }]} />
  ])
  .add('50 data points', () => [
    <Graph series={[{ points: fifty }]} />,
    <Graph series={[{ points: fifty, plot: 'bars' }]} />,
    <Graph series={[{ points: fifty, plot: 'area' }]} />,
    <Graph series={[{ points: fifty, plot: 'dots' }]} />
  ])
  .add('50 data points large', () => [
    <Graph series={[{ points: fifty }]} width="800" height="500" />,
    <Graph
      series={[{ points: fifty, plot: 'bars' }]}
      width="800"
      height="500"
    />,
    <Graph
      series={[{ points: fifty, plot: 'area' }]}
      width="800"
      height="500"
    />,
    <Graph
      series={[{ points: fifty, plot: 'dots' }]}
      width="800"
      height="500"
    />
  ])
  .add('Coral color', () => [
    <Graph series={[{ points: singleTS, color: 'coral' }]} />,
    <Graph series={[{ points: singleTS, color: 'coral', plot: 'bars' }]} />,
    <Graph series={[{ points: singleTS, color: 'coral', plot: 'area' }]} />,
    <Graph series={[{ points: singleTS, color: 'coral', plot: 'dots' }]} />
  ])
  .add('Threshold value', () => [
    <Graph series={[{ points: singleTS }]} threshold={{ value: 2000 }} />,
    <Graph
      series={[{ points: singleTS, plot: 'bars' }]}
      threshold={{ value: 2000 }}
    />,
    <Graph
      series={[{ points: singleTS, plot: 'area' }]}
      threshold={{ value: 2000 }}
    />,
    <Graph
      series={[{ points: singleTS, plot: 'dots' }]}
      threshold={{ value: 2000 }}
    />
  ])
  .add('Threshold value + above', () => [
    <Graph
      series={[{ points: singleTS }]}
      threshold={{ value: 2000, type: 'above' }}
    />,
    <Graph
      series={[{ points: singleTS, plot: 'bars' }]}
      threshold={{ value: 2000, type: 'above' }}
    />,
    <Graph
      series={[{ points: singleTS, plot: 'area' }]}
      threshold={{ value: 2000, type: 'above' }}
    />,
    <Graph
      series={[{ points: singleTS, plot: 'dots' }]}
      threshold={{ value: 2000, type: 'above' }}
    />
  ])
  .add('Threshold value + below', () => [
    <Graph
      series={[{ points: singleTS }]}
      threshold={{ value: 2000, type: 'below' }}
    />,
    <Graph
      series={[{ points: singleTS, plot: 'bars' }]}
      threshold={{ value: 2000, type: 'below' }}
    />,
    <Graph
      series={[{ points: singleTS, plot: 'area' }]}
      threshold={{ value: 2000, type: 'below' }}
    />,
    <Graph
      series={[{ points: singleTS, plot: 'dots' }]}
      threshold={{ value: 2000, type: 'below' }}
    />
  ]);

storiesOf('Graph - Multi')
  .add('Pass two time series', () => [
    <Graph series={[{ points: singleTS }, { points: singleTS2 }]} />,
    <Graph
      series={[
        { points: singleTS, plot: 'bars' },
        { points: singleTS2, plot: 'bars' }
      ]}
    />,
    <Graph
      series={[
        { points: singleTS, plot: 'area' },
        { points: singleTS2, plot: 'area' }
      ]}
    />,
    <Graph
      series={[
        { points: singleTS, plot: 'dots' },
        { points: singleTS2, plot: 'dots' }
      ]}
    />
  ])
  .add('Pass two time series mixed plots', () => [
    <Graph series={[{ points: singleTS }, { points: singleTS2 }]} />,
    <Graph
      series={[
        { points: singleTS, plot: 'line' },
        { points: singleTS2, plot: 'bars' }
      ]}
    />,
    <Graph
      series={[
        { points: singleTS, plot: 'dots' },
        { points: singleTS2, plot: 'area' }
      ]}
    />,
    <Graph
      series={[
        { points: singleTS, plot: 'bars' },
        { points: singleTS2, plot: 'line' }
      ]}
    />
  ])
  .add('Pass three time series', () => [
    <Graph
      series={[
        { points: singleTS },
        { points: singleTS2 },
        { points: singleTS3 }
      ]}
    />,
    <Graph
      series={[
        { points: singleTS, plot: 'bars' },
        { points: singleTS2, plot: 'bars' },
        { points: singleTS3, plot: 'bars' }
      ]}
    />,
    <Graph
      series={[
        { points: singleTS, plot: 'area' },
        { points: singleTS2, plot: 'area' },
        { points: singleTS3, plot: 'area' }
      ]}
    />,
    <Graph
      series={[
        { points: singleTS, plot: 'dots' },
        { points: singleTS2, plot: 'dots' },
        { points: singleTS3, plot: 'dots' }
      ]}
    />
  ]);

storiesOf('Graph - No Data')
  .add('No props', () => <Graph />)
  .add('Empty series array', () => <Graph series={[]} />)
  .add('One series, no props', () => <Graph series={[{}]} />)
  .add('One series, null props ', () => <Graph series={[{ points: null }]} />)
  .add('One series, empty points', () => <Graph series={[{ points: [] }]} />);
