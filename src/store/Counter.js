import { observable, action } from 'mobx'

class Counter {
    @observable count = 0
    @action decrease = () => {
        this.count--
    }
    @action increase = () => {
        this.count++
    }
}

const Store = new Counter();
export default Store;