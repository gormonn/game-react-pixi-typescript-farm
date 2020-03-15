import memoize from 'memoize-one'

export interface ACPProps{
    count: [number, number],
    size: [number, number],
    start: [number, number]
}
interface ACPResult{
    width: number,
    height: number,
    x: number,
    y: number,
    cellKey: string
}

/**
 * Area Cell Positions
 */
export const ACP = memoize((props:ACPProps):ACPResult[] => {
    let {
        count: [countX, countY],
        size: [width, height],
        start: [startX, startY]
    } = props;
    const padding = 1;
    let array = [];
    for(let x = 0; x <= countX; x++){
        for(let y = 0; y <= countY; y++){
            const newPos = {
                width, height,
                x: startX + (width + padding) * x,
                y: startY + (height + padding) * y,
                cellKey: `${x}-${y}`
            }
            array.push(newPos);
        }
    }
    return array;
})