// 2. Linked List
// Problem: Implement a simple singly linked list with basic operations like adding a node to
// the end and displaying the list
// Singly Linked List Implementation

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// LinkedList Class


class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node to the end of the list
    add(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode; // If the list is empty, set the new node as the head
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next; // Traverse to the end of the list
            }
            current.next = newNode; // Add the new node at the end
        }
    }

    // Method to display the list
    display() {
        let current = this.head;
        const values = [];

        while (current !== null) {
            values.push(current.value); // Collect values from each node
            current = current.next; // Move to the next node
        }

        console.log(values.join(' -> ')); // Display the list
    }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display(); // Output: 1 -> 2 -> 3

