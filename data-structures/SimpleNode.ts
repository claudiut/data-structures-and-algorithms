export default class SimpleNode {
    public next?: SimpleNode;
    public value: number;

    constructor(value: number) {
        this.value = value;
    }
}