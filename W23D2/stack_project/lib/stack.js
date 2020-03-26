// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        const nextNode = new Node(val);
        if (this.size() === 0) {
            this.top = nextNode;
            this.bottom = nextNode;
        } else {
            this.temp = this.top;
            this.top = nextNode;
            this.top.next = this.temp;
        }
        this.length += 1;
        return this.length;
    }
    
    pop() {
        if (this.size() === 0) {
            return null;
        } else if (this.size() === 1) {
            this.temp = this.top;
            this.top = null;
            this.bottom = null;
            this.length -= 1;
        } else {
            this.temp = this.top;
            this.top = this.top.next;
            this.length -= 1;
        }
        return this.temp.value;

    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
