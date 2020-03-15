import React, {useState} from 'react'
import { ACP, ACPProps } from './utils'
import Cell from './Cell'

const Area = (props: ACPProps) => {
    const [areaOfCells] = useState(ACP(props));
    const [cellIsHover, hoverCell] = useState('');
    const [cellIsSelect, selectCell] = useState('');

    const Cells = areaOfCells.map(({cellKey, ...params}) => {
        const isHover = (cellIsHover === cellKey) ? true : false;
        const isSelect = (cellIsSelect === cellKey) ? true : false;
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
    return (
        <>
            {Cells}
        </>
    )
}

export default Area