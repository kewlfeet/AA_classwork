// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }
    enqueue(val) {
        const newNode = new Node(val);

    }
    dequeue() {
        if (this.length===0) {
            return null;
        } else if (this.length===1) {
            this.temp = this.front;
            this.front = null;
            this.back = null;
        } else {
            this.temp = this.front;
            this.front = this.front.next;
        }
        
        this.length -= 1;
        return this.temp
    }
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;