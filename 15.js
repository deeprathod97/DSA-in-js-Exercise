// Stack Implementation

class Stack {
    constructor() {
        this.items = [];
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an element from the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Display the stack (optional)
    display() {
        console.log(this.items.join(' <- '));
    }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop());  // Output: 3
console.log(stack.peek()); // Output: 2
stack.display(); // Output: 1 <- 2

