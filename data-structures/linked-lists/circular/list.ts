import Node from './node';

class List {
    private root?: Node = null;
    private last?: Node = null;

    print(): void {
        if (this.isEmpty()) {
            console.log('[]');
            return;
        }

        console.log('[');
        let current = this.root;
        console.log(current.getValue());
        while (current.hasNext()) {
            current = current.getNext();
            console.log(current.getValue());
        }
        console.log(']');
    }

    get length(): number {
        if (this.isEmpty()) {
            return 0;
        }

        let len = 1;

        let current = this.root;
        while (current.hasNext()) {
            current = current.getNext();
            len++;
        }

        return len;
    }

    insertLast(node: Node): void {
        if (!this.root) {
            this.root = node;
            this.last = node;
            return;
        }

        this.last.setNext(node);
        this.last = node;
    }

    private nodeRemover = remove => (): Node => {
        // common remove checks
        if (this.isEmpty()) {
            return;
        }

        if (this.hasOnlyOneNode()) {
            const copyOfRoot = this.root;
            this.root = this.last = null;
            return copyOfRoot;
        }

        return remove();
    }

    removeFirst = this.nodeRemover(this.removeFirstNode.bind(this));

    removeLast = this.nodeRemover(this.removeLastNode.bind(this));

    private removeFirstNode(): Node | undefined {
        const currentRoot = this.root;
        if (this.root.hasNext()) {
            this.root = this.root.getNext();
        }

        return currentRoot;
    }

    private removeLastNode(): Node | undefined {
        const copyOfLast = this.last;

        let nodeBeforeLast = this.root;
        while (nodeBeforeLast.getNext() !== this.last) {
            nodeBeforeLast = nodeBeforeLast.getNext();
        }
        // remove the last node reference
        nodeBeforeLast.setNext(null);
        // reference the new last
        this.last = nodeBeforeLast;

        return copyOfLast;
    }

    private isEmpty(): boolean {
        return !this.root;
    }

    private hasOnlyOneNode(): boolean {
        return !this.isEmpty() && this.root === this.last;
    }
}

const list = new List();
list.insertLast(new Node(1));
list.insertLast(new Node(2));
list.insertLast(new Node(3));
list.insertLast(new Node(4));

console.log('Length:', list.length);
list.print();

list.removeFirst();
console.log('\nLength after removed first:', list.length);
list.print();

list.removeLast();
list.removeLast();
console.log('\nLength after removed last twice:', list.length);
list.print();

list.removeLast();
console.log('\nRemoved all:');
list.print();