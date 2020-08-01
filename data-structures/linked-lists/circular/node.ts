export default class ListNode {
    private value: number;
    private next?: ListNode = null;

    constructor(value: number) {
        this.value = value;
    }

    hasNext(): boolean {
        return !!this.next;
    }

    setNext(node?: ListNode) {
        this.next = node;
    }

    getNext(): ListNode | null {
        return this.next;
    }

    getValue(): number {
        return this.value;
    }
}