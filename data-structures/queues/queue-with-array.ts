class Queue {
    // pointer/index to the first-come element
    private front: number = -1;
    // pointer/index to the last-come element
    private rear: number = -1;
    private queueSizeCount: number = 0;
    private queueArray: Array<number> = [];

    add(value: number): void {
        // at the first add, initialize front with 0
        // for the rests of the adds, front is not touched because we are adding at the rear
        if (this.front === -1) {
            this.front = 0;
        }

        this.queueSizeCount++;
        this.rear++;
        this.queueArray[this.rear] = value;
    }

    remove(): number | null {
        if (this.isEmpty()) {
            return null;
        }

        const currentlyFirst = this.queueArray[this.front];

        delete this.queueArray[this.front];
        this.queueSizeCount--;
        // when removing the last element, reset the pointers/indices
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        } else {
            // the first element is now the next one 
            this.front++;
        }

        return currentlyFirst;
    }

    isEmpty(): boolean {
        return this.queueSizeCount === 0;
    }
}

const emptyQueue = (q: Queue): void => {
    // The first added item will be removed first - FIFO
    while (!q.isEmpty()) {
        console.log(q.remove());
    }
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
emptyQueue(q);

q.add(4);
q.add(5);
emptyQueue(q);