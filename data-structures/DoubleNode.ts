export default class DoubleNode {
    public next?: DoubleNode;
    public prev?: DoubleNode;
    public value: number;

    constructor(value: number) {
        this.value = value;
    }
}