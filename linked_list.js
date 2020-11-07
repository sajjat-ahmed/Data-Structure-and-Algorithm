class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }
    add(value) {
        const newNode = new Node(value);
        // this.head.next = newNode;
        let current = this.head;
        while(current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const mBondon = new LinkedList(head);
mBondon.add(27);
mBondon.add(88);
mBondon.add(77);
mBondon.add(55);
console.log(JSON.stringify(mBondon));