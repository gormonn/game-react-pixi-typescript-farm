import 'pixi.js-legacy';
import React from 'react';
import { TextStyle } from 'pixi.js';
import { Stage, Text } from '@inlet/react-pixi';
import { observer } from 'mobx-react'
import { Counter } from './store';
import Area from './cells/Area'
import './App.css';

const App = observer(() => {
  const {count, increase, decrease} = Counter;
  // console.log({count})
  return (
  <Stage
    width={800}
    height={600}
    options={{ backgroundColor: 0x1d2230 }}
    onClick={()=>{
      console.log('click on stage');
      increase()
    }}
  >
    <Area/>
    <Text
      text={count.toString()}
      anchor={0.5}
      x={150}
      y={150}
      style={
        new TextStyle({
          align: 'center',
          fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 50,
          fontWeight: '400',
          fill: ['#ffffff', '#00ff99'], // gradient
          stroke: '#01d27e',
          strokeThickness: 5,
          letterSpacing: 20,
          dropShadow: true,
          dropShadowColor: '#ccced2',
          dropShadowBlur: 4,
          dropShadowAngle: Math.PI / 6,
          dropShadowDistance: 6,
          wordWrap: true,
          wordWrapWidth: 440,
        })
      }
    />
  </Stage>
)})

export default App;


// const App = () => {
//   const reducer = (_, { data }) => data
//   const Bunny = () => {
//     const [motion, update] = useReducer(reducer)
//     const iter = useRef(0)

//     useTick(delta => {
//       const i = (iter.current += 0.05 * delta)

//       update({
//         type: 'update',
//         data: {
//           x: Math.sin(i) * 100,
//           y: Math.sin(i / 1.5) * 100,
//           rotation: Math.sin(i) * Math.PI,
//           anchor: Math.sin(i / 2),
//         },
//       })
//     })

//     return (
//       <Sprite
//         image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
//         {...motion}
//       />
//     )
//   }

//   return (
//     <Stage width={300} height={300} options={{ backgroundColor: 0x1d2230 }}>
//       <Container x={150} y={150}>
//         <Bunny />
//       </Container>
//     </Stage>
//   )
// }
