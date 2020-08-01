/**
 * An abstract data structure can be implemented using a class
 * which hides it's internal functionality and exposes specific methods for the user to work with it.
 */
class Counter {
    private count: number;

    constructor(count: number = 0) {
        this.count = count;
    }

    increment() {
        this.count++;
    }

    getValue() {
        return this.count;
    }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue());