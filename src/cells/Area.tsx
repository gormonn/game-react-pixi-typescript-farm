import React, {useState} from 'react'
import { useObserver, useLocalStore } from 'mobx-react-lite'
import { ACP, ACPProps } from './utils'
import Cell from './Cell'
import { AreaStore } from '../store/area'

const Area = (props: ACPProps) => {
    const [areaOfCells] = useState(ACP(props));
    const [cellIsHover, hoverCell] = useState('');
    const [cellIsSelect, selectCell] = useState('');

    const store = useLocalStore(AreaStore);
    console.log({store});
    const Cells = areaOfCells.map(({cellKey, ...params}) => {
        const isHover = (cellIsHover === cellKey) ? true : false;
        const isSelect = (cellIsSelect === cellKey) ? true : false;
        // const cellState = AreaStore.find((item) => item.id === cellKey);

        // console.log({cellKey, cellState});
        return (
            <Cell
                {...{...params}}
                key={cellKey}
                interactive={true}
                isHover={isHover}
                isSelect={isSelect}
                pointertap={() => selectCell(cellKey)}
                mouseover={() => hoverCell(cellKey)}
                mouseout={() => hoverCell('')}
            />
        )}
    )
    return useObserver(() => (
        <>
            {Cells}
        </>
    ))
}

export default Area