import React, {useState} from 'react'
import { useObserver } from 'mobx-react-lite'
import Cell from './Cell';
import { CellStore } from '../store/cells'

const Area = () => {
    const {cells} = CellStore;

    const Cells = useObserver(() => {
        return cells.map(props => {
            const {cellKey, toggleHover, toggleSelect, ...params} = props;
            return (
                <Cell
                    {...{...params}}
                    key={cellKey}
                    interactive={true}
                    pointertap={() => toggleSelect()}
                    mouseover={() => toggleHover()}
                    mouseout={() => toggleHover()}
                />
            )
        })
    })
    return (
        <>
            {Cells}
        </>
    )
}

export default Area