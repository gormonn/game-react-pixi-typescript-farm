import 'pixi.js-legacy';
import React from 'react';
import { Stage } from '@inlet/react-pixi';
import Area from './cells/Area'
import './App.css';

const App = () => (
  <Stage width={800} height={600} options={{ backgroundColor: 0x1d2230 }}>
    <Area
      count={[8, 8]}
      size={[64, 48]}
      start={[10, 32]}
    />
  </Stage>
);

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
