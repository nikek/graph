import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import Graph from '../Graph';
import TestData from './TestData';
const { realData, realData2, twentyfive, fifty } = TestData;

storiesOf('Graph', module)
  .add('Pass regular data', () => (
    <div>
      <Graph data={realData} />
      <Graph data={realData} plot="area" />
      <Graph data={realData} plot="line" />
      <Graph data={realData} plot="dots" />
    </div>
  ))
  .add('Two data points', () => (
    <div>
      <Graph data={[{ x: 1, y: 1 }, { x: 2, y: 3 }]} />
      <Graph data={[{ x: 1, y: 1 }, { x: 2, y: 3 }]} plot="area" />
      <Graph data={[{ x: 1, y: 1 }, { x: 2, y: 3 }]} plot="line" />
      <Graph data={[{ x: 1, y: 1 }, { x: 2, y: 3 }]} plot="dots" />
    </div>
  ))
  .add('25 data points', () => (
    <div>
      <Graph data={twentyfive} />
      <Graph data={twentyfive} plot="area" />
      <Graph data={twentyfive} plot="line" />
      <Graph data={twentyfive} plot="dots" />
    </div>
  ))
  .add('50 data points', () => (
    <div>
      <Graph data={fifty} />
      <Graph data={fifty} plot="area" />
      <Graph data={fifty} plot="line" />
      <Graph data={fifty} plot="dots" />
    </div>
  ))
  .add('50 large', () => (
    <div>
      <Graph data={fifty} width="800" height="500" />
      <Graph data={fifty} width="800" height="500" plot="area" />
      <Graph data={fifty} width="800" height="500" plot="line" />
      <Graph data={fifty} width="800" height="500" plot="dots" />
    </div>
  ))
  .add('Coral color', () => (
    <div>
      <Graph data={realData} color="coral" />
      <Graph data={realData} color="coral" plot="area" />
      <Graph data={realData} color="coral" plot="line" />
      <Graph data={realData} color="coral" plot="dots" />
    </div>
  ))
  .add('Threshold value', () => (
    <div>
      <Graph data={realData} threshold={{ value: 2000 }} />
      <Graph data={realData} threshold={{ value: 2000 }} plot="area" />
      <Graph data={realData} threshold={{ value: 2000 }} plot="line" />
      <Graph data={realData} threshold={{ value: 2000 }} plot="dots" />
    </div>
  ))
  .add('Threshold value + above', () => (
    <div>
      <Graph data={realData} threshold={{ value: 2000, type: 'above' }} />
      <Graph
        data={realData}
        threshold={{ value: 2000, type: 'above' }}
        plot="area"
      />
      <Graph
        data={realData}
        threshold={{ value: 2000, type: 'above' }}
        plot="line"
      />
      <Graph
        data={realData}
        threshold={{ value: 2000, type: 'above' }}
        plot="dots"
      />
    </div>
  ))
  .add('Threshold value + below', () => (
    <div>
      <Graph data={realData} threshold={{ value: 2000, type: 'below' }} />
      <Graph
        data={realData}
        threshold={{ value: 2000, type: 'below' }}
        plot="area"
      />
      <Graph
        data={realData}
        threshold={{ value: 2000, type: 'below' }}
        plot="line"
      />
      <Graph
        data={realData}
        threshold={{ value: 2000, type: 'below' }}
        plot="dots"
      />
    </div>
  ))
  .add('No props', () => (
    <div>
      <Graph />
      <Graph plot="area" />
      <Graph plot="line" />
      <Graph plot="dots" />
    </div>
  ))
  .add('Empty array', () => (
    <div>
      <Graph data={[]} />
      <Graph data={[]} plot="area" />
      <Graph data={[]} plot="line" />
      <Graph data={[]} plot="dots" />
    </div>
  ));
