import SimpleNode from "./SimpleNode";

class SimpleStack {
    private top?: SimpleNode;

    add(node: SimpleNode) {
        node.next = this.top;
        this.top = node;
    }

    print() {
        console.log('Stack:');
        let current = this.top;
        do {
            console.log(current.value)
            current = current.next;
        } while (current);
    }

    replaceNode(search: SimpleNode, newNode: SimpleNode) {
        // stack empty
        if (!this.top) {
            return;
        }

        // get the node before searched one
        let beforeCurrent = this.top;
        while (beforeCurrent.next !== search) {
            beforeCurrent = beforeCurrent.next;
            // reached bottom without finding it
            if (!beforeCurrent) {
                return;
            }
        };

        beforeCurrent.next = newNode;
        newNode.next = search.next;
    }

    pop(): SimpleNode|undefined {
        if (!this.top) {
            return undefined;
        }

        const oldTop = this.top;
        this.top = this.top.next;

        return oldTop;
    }
}

const s = new SimpleStack();
s.add(new SimpleNode(1));
const second = new SimpleNode(2);
s.add(second);
s.add(new SimpleNode(3));
s.print();

s.replaceNode(second, new SimpleNode(222));
s.print();

console.log('Pop! =>', s.pop().value);
s.print();