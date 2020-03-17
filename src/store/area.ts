import { observable } from "mobx"

const CellState = {
    Empty: 0,
    Wheat: 1,
    Chiken: 2,
    Cow: 3
}

type AreaCell = {
    id: string,
    state: number
}
const Cell = (id: string, state: number):AreaCell => ({ id, state })

const AreaCells: AreaCell[] = [
    Cell('1-1', 0),
    Cell('1-2', 1),
    Cell('1-3', 2),
    Cell('1-4', 3),
    Cell('1-5', 1)
];

// export const AreaStore = observable(AreaCells)
export const AreaStore = observable([
    {id: '1-1', state: 0},
    {id: '1-2', state: 0}
])