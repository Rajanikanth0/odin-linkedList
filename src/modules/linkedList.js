class LinkedList {
  constructor() {
    this.headPointer = undefined;
    this.tailPointer = undefined;
    this.length = 0;
  }

  at(index) {
    if (
      typeof index !== "number" ||
      !Number.isInteger(index) ||
      index < 0 ||
      this.length <= index
    ) return;

    let current = this.headPointer;

    for (let x=0; x<index; x++) {
      current = current.nextNode
    }
    return current.value;
  }

  tail() {
    return this.tailPointer;
  }

  head() {
    return this.headPointer;
  }

  size() {
    return this.length;
  }
  
  prepend(value) {
    const node = new Node(value);

    if (!this.headPointer) {
      this.headPointer = node;
      this.tailPointer = node;
    } else {
      node.nextNode = this.headPointer;
      this.headPointer = node;
    }

    this.length++;
  }

  append(value) {
    const node = new Node(value);

    if (!this.headPointer) {
      this.headPointer = node;
      this.tailPointer = node;
    } else {
      this.tailPointer.nextNode = node;
      this.tailPointer = node;
    }

    this.length++;
  }

  getList() {
    const arr = [];
    let current = this.headPointer;

    while (current) {
      arr.push(current.value);
      current = current.nextNode;
    }

    return arr;
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export default LinkedList;