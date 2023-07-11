class Node {
  constructor(value, next) {
    this.value = value || null;
    this.next = next || null;
  }
}
class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }
  //add to end of the list (tail). (value)
  append(value) {
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
    }
  }

  //add to beginning of list (head). (value)
  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      this.head.next = oldHead;
    }
  }

  //returns total number of nodes in list
  size() {
    let count = 0;
    let pointer = this.head;
    while (pointer !== null) {
      count++;
      pointer = pointer.next;
    }
    return count;
  }

  //returns the first node in the list
  getHead() {
    if (!this.head) {
      return "This list is empty";
    }
    return this.head;
  }

  //the last node in the list
  getTail() {
    if (!this.tail) {
      return "This list is empty";
    }
    return this.tail;
  }

  //returns the node at the given index. (index)
  at(index) {
    if (index < 0) {
      return "This index does not exist on this list.";
    }
    let head = this.head;
    for (let i = 0; i < index; i++) {
      head = head.next;
      if (head == null) {
        return "This index does not exist on this list.";
        return;
      }
    }
    return head;
  }

  //removes the last element from the list
  pop() {
    if (!this.tail) {
      return "This list is empty.";
    } else {
      let currentNode = this.head;
      let previousNode = null;

      while (currentNode.next != null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = null;
    }
    return "The last element of this list has been removed";
  }

  //returns true in value passed in is in the list, false if not. (value)
  contains(value) {
    if (!this.head) {
      return "This list is empty.";
    } else {
      let currentNode = this.head;
      while (currentNode != null) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    }
  }
  //returns index of the node containing value, or null if not found. (value)
  find(value) {
    if (!this.head) {
      return "This list is empty.";
    } else {
      let currentNode = this.head;
      let index = 0;
      while (currentNode != null) {
        if (currentNode.value === value) {
          return index;
        }
        currentNode = currentNode.next;
        index++;
      }
      return null;
    }
  }

  // inserts a new node with provided value at given index (value, index)
  insertAt(value, index) {
    if (this.head == null) {
      this.prepend(value);
    } else if (index < this.size() - 1) {
      this.append(value);
    } else {
      let currentNode = this.head;
      let previousNode = null;
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        if (currentNode == null) {
          break;
        }
      }
      if (currentNode == null) {
        this.append(value);
      }

      let newNode = new Node(value);
      previousNode.next = newNode;
      newNode.next = currentNode;
    }
  }

  //removes node at given index. (index)
  removeAt(index) {
    if (this.head == null) {
      return "The list is already empty.";
    } else {
      let currentNode = this.head;
      let previousNode = null;
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        if (currentNode == null) {
          return "There is no item for this index";
        }
      }
      previousNode.next = currentNode.next;
    }
  }

  //represent your LinkedList objects as strings so you can print them out and preview them in the console
  //format: ( value ) -> (value) -> (value) -> null
  toString() {
    let currentNode = this.head;
    let stringedList = "";
    while (currentNode != null) {
      stringedList += `(${currentNode.value}) -> `;
      currentNode = currentNode.next;
    }
    return (stringedList += "null");
  }
}
console.log(LinkedList.tail);

testList = new LinkedList();

testList.prepend("test1");
testList.append("test2");
testList.append("test3");
console.log(testList.toString()); // (test1) -> (test2) -> (test3) -> null
console.log(testList.size()); // 3
console.log(testList.getHead()); // return head Node
console.log(testList.getTail()); // Node { value: 'test3', nextNode: null }
console.log(testList.at(2)); // Node { value: 'test3', nextNode: null }
console.log(testList.at(4)); // There is no item for this index
testList.pop();
console.log(testList.toString()); // (test1) -> (test2) -> null
console.log(testList.contains("test1")); // true
console.log(testList.find("test2")); // 1
testList.prepend("test3");
console.log(testList.toString()); // (test3) -> (test1) -> (test2) -> null
testList.insertAt("test4", 2);
console.log(testList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> null
console.log(testList.size()); // 4

testList.insertAt("test5", 8);
console.log(testList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> (test5) -> null
testList.removeAt(2);
console.log(testList.toString()); // (test3) -> (test1) -> (test2) -> (test5) -> null
