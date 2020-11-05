// FIFO => First In First Out
class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        if(this.queue.length) {
            return this.queue.shift();
        }
    }
}

const patients = new Queue();

patients.enqueue("Rahman");
patients.enqueue("Zaman");
patients.enqueue("Kaman");
patients.enqueue("Kamran");

console.log(patients.queue);

const done = patients.dequeue();

console.log(done);
console.log(patients.queue);