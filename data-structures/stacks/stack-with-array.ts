/**
 * An stack keeps a pointer to the element which is considered the it's top element
 * The top element can be popped, so it will be removed (and returned)
 * and the prev/underlying element becomes the new top
 */
class Stack {
    // a pointer to the index of the top element of the stack
    private top: number = -1;
    // the number of slots of the stack
    private maxSize: number;
    private stackArray: Array<number> = [];

    constructor(maxSize: number) {
        if (maxSize <= 0) {
            throw new Error("Error: stack's size should be a positive integer");
        }
        this.maxSize = maxSize;
    }

    // adds an item on top of the stack
    add(value: number): void {
        if (this.isFull()) {
            return;
        }
        this.top++;
        this.stackArray[this.top] = value;
    }

    /**
     * Removes the top element and makes the previous element be the top of the stack.
     * Returns the removed element.
     */
    pop(): number | null {
        if (this.isEmpty()) {
            return null;
        }

        const currentTop = this.stackArray[this.top];

        delete this.stackArray[this.top];
        this.top--;

        return currentTop;
    }

    isEmpty(): boolean {
        return this.top === -1;
    }

    isFull(): boolean {
        return this.top === this.maxSize - 1;
    }
}

const emptyStack = (stack: Stack): void => {
    // removed and returned from top (added last) to bottom (added first) - LIFO
    while (!stack.isEmpty()) {
        console.log(stack.pop());
    }
}

const stack = new Stack(3);
stack.add(1);
stack.add(2);
stack.add(3);
emptyStack(stack);

stack.add(4);
stack.add(5);
emptyStack(stack);