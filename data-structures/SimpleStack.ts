import SimpleNode from "./SimpleNode";

class SimpleStack {
    private top?: SimpleNode;

    add(node: SimpleNode) {
        node.next = this.top;
        this.top = node;
    }

    print() {
        console.log('\nStack:');
        let current = this.top;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        // this is undefined
        console.log(current);
    }

    replaceNode(search: SimpleNode, newNode: SimpleNode) {
        let prev: SimpleNode | undefined;
        let current = this.top;
        while (current && current !== search) {
            prev = current;
            current = current.next;
        }

        if (!current) {
            console.log('Node to replace not found.');
            return;
        }

        if (prev) {
            prev.next = newNode;
        }
        newNode.next = current.next;

        if (current === this.top) {
            this.top = newNode;
        }
    }

    pop(): SimpleNode|undefined {
        const popped = this.top;

        if(this.top) {
            this.top = this.top.next;
        }

        return popped;
    }
}

const s = new SimpleStack();
const third = new SimpleNode(1);
s.add(third);
const second = new SimpleNode(2);
s.add(second)
const first = new SimpleNode(3);
s.add(first);
s.print();

s.replaceNode(first, new SimpleNode(222));
s.print();

console.log('Pop! =>', s.pop().value);
s.print();