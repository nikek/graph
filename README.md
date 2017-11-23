# Graph
Nicely graphing time series.

## How does it work?

Owned by the `Graph` component
* Scale
  * Dimensions - Either fixed specified or calculated depending on time series max/min x/y.  
    `timeSpan` (Duration[relative to now]/DateSpan[absolute between two dates]) to set the x axis  
    `valueSpan` tuple [minY, maxY] set `null` for depending on data on one
  * Sizing -  
    `width`  
    `height`
* Stacking (should be calculated outside?)  
  Affect layout of several time series
* Colorizer  
  Affect color of all time series (based on integral)
* MixBlendMode  
  Any of the css mix blend modes 

`Series`
* `label?` - the name of the time series (*default: `null`*)
* `color?` - A fill color string. (*default: `'#2ebd59'`*)
* `dataType` - `'points' | 'events'`

`PointSeries`
* `points` - `[{x: timestamp, y:value}, {x: timestamp2, y:value2}]`  
* `unit` - string that explains what unit to plot the values in. (*default: `null`*)  
  `'milliseconds' | 'seconds' | ...`  
* `plot?`(Points) - `'bars' | 'area' | 'line' | 'dots'` (*default: `'line'`*)

`EventSeries`
* `events` - `[{x: timestamp, content: {label: 'Deployment', link:'http://..'}]`

## Install
```
npm i @nikek/graph
```

## Use
Pass Graph an object of time series objects.

```js
import React from 'react'
import Graph from 'graph'

export default () => {
  const data = {
    ts1: {
      label: 'Temperature',
      data: [{y:1, x:1511361920155}, {y:4, x:1511361921155}, {y:9, x:1511361922155}, {y:7, x:1511361923155}]
    },
    ts2: {
      label: 'Time Series 2',
      data: [{y:1, x:1511361920155}, {y:4, x:1511361921155}, {y:9, x:1511361922155}, {y:7, x:1511361923155}]
    }
  }
  return (
    <div>
      <h1>Magnificent Graph</h1>
      <Graph data={data} />
    </div>
  )
}
```
**Try it!** You can replace everything in App.js of a freash create-react-app with this code. Remember to also run `npm i @nikek/graph`.

## Props

* `data` - Object of points containing a `y` property defining a number. (*Example* `[{y:1}, {y:4}, {y:9}, {y:7}]`)
* `timeseries.plot` - Visualization type, one of `'bars'`, `'area'`, `'line'` and `'dots'` (*default: `'bars'`*)
* `color` - A fill color string. (*default: `'#2ebd59'`*)
* `width` - In pixels. (*default: `160`*)
* `height` - In pixels. (*default: `90`*)

## Develop
This project is using Storybook to develop the component.
In Storybook we develop the component for the different use
cases by passing different props and see how it looks.
Together with Storyshots we can test these stories with
Jest snapshots. Very nice!

### Prettier
Use [Prettier](https://github.com/prettier/prettier), note the file `.vscode/settings.json`. If you use another editor than VS Code, check the prettier docs for you editor. 

### Start
Start Storybook on localhost:9009.
```
npm start
```
Start test runner(Jest) in watch mode.
```
npm test
```

## Build
Build the distributed component file and github pages docs, which is the storybook.
```
npm run build
```
