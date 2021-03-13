import DoubleNode from './DoubleNode';

class DoubleQueue {
    private first?: DoubleNode;

    queue(node: DoubleNode) {
        if (!this.first) {
            this.first = node;
            return;
        }

        let last = this.first;
        while (last.prev) {
            last = last.prev;
        }

        node.next = last;
        last.prev = node;
    }

    print() {
        console.log('Queue:');
        let current = this.first;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }

    replaceNode(search: DoubleNode, newNode: DoubleNode): boolean {
        if (!this.first) {
            return false;
        }

        let current = this.first;
        while (current !== search) {
            current = current.prev;
            if (!current) {
                return false;
            }
        }

        // link new node to searched node's links
        newNode.next = current.next;
        newNode.prev = current.prev;
        // link searched node's neighbours to the new node
        if (current.next) {
            current.next.prev = newNode;
        }
        if (current.prev) {
            current.prev.next = newNode;
        }
    }

    pop(): DoubleNode|undefined {
        if (!this.first) {
            return;
        }

        const oldFirst = this.first;
        this.first = this.first.prev;
        if (this.first) {
            // remove links from and to the old first node
            const old = this.first.next;
            delete this.first.next;
            if (old) {
                delete old.prev;
            }
        }

        return oldFirst;
    }
}

const q = new DoubleQueue();
q.queue(new DoubleNode(1));
const second = new DoubleNode(2);
q.queue(second);
q.queue(new DoubleNode(3));
q.print();

q.replaceNode(second, new DoubleNode(2121));
q.print();

console.log('Pop! =>', q.pop().value);
q.print();