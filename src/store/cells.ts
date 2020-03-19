import { observable, action } from 'mobx'

class SimpleCell {
    width: number
    height: number
    x: number
    y: number
    cellKey: string
    // todo: разобраться с этой проблемой:
    constructor(props: any){
        const {cellKey, width, height, x, y} = props
        this.cellKey = cellKey
        this.width = width
        this.height = height
        this.x = x
        this.y = y
    }
}

class EmptyCell extends SimpleCell{
    @observable isHover?: boolean = false
    @observable isSelect?: boolean = false

    @action toggleHover = () => {
        this.isHover = !this.isHover
    }
    @action toggleSelect = () => {
        this.isSelect = !this.isSelect
    }
}

interface CellStoreProps{
    count?: number[],
    size?: number[],
    startPosition?: number[]
}

class CellStoreClass {
    defaultProps = {
        count: [9,9],
        size: [32,32],
        startPosition: [10,10]
    }
    @observable cells:EmptyCell[] = []

    constructor(props?: CellStoreProps){
        // this.cells = 
        this.init(props)
    }
    
    // reference: https://mobx.js.org/best/store.html#example-domain-store
    createCell(props: SimpleCell){
        const cell = new EmptyCell(props);
        this.cells.push(cell);
        return cell;
    }

    // todo: увеличивая count не затирать массив, а лишь добавлять недостающие клетки и изменять их размер
    @action init = (props?: CellStoreProps):void => {
        const { count, size, startPosition } = Object.assign({}, this.defaultProps, props);
        const [ countX, countY ] = count;
        const [ width, height ] = size;
        const [ startX, startY ] = startPosition;
        const padding = 1;
        // let array = [];
        for(let x = 0; x <= countX; x++){
            for(let y = 0; y <= countY; y++){
                const cellItem = {
                    cellKey: `${x}-${y}`,
                    width, height,
                    x: startX + (width + padding) * x,
                    y: startY + (height + padding) * y
                }
                this.createCell(cellItem);
                // const cell = new EmptyCell({
                //     cellKey: `${x}-${y}`,
                //     width, height,
                //     x: startX + (width + padding) * x,
                //     y: startY + (height + padding) * y
                // });
                // array.push(cell);
            }
        }
        // return array;
    }
}

export const CellStore = new CellStoreClass();
// export const EmptyCell = new EmptyCellClass('1-1');