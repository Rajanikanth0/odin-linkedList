class LinkedList {
  constructor() {
    this._head = null;
  }

  insertAt(index, ...values) {
    let [start, end] = createCustomList(values);

    if (index === 0) {
      end.nextNode = this._head;
      this._head = start;
      return;
    }

    let count = 0;
    let current = this._head;

    while (current && count < index - 1) {
      count++;
      current = current.nextNode;
    }

    if (!current) {
      throw new RangeError("Index out of range!");
    }
    
    end.nextNode = current.nextNode;
    current.nextNode = start;

    function createCustomList(values) {
      let start = null;
      let end = start;

      for (const value of values) {
        let newNode = new Node(value);

        if (start === null) {
          start = newNode;
          end = start;
          continue;
        }

        end.nextNode = newNode;
        end = end.nextNode;
      }

      return [start, end];
    }
  }

  toString() {
    if (this._head === null) return "";

    let current = this._head;
    let text = "";

    while (current) {
      text += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    text += "null";

    return text;
  }

  findIndex(value) {
    let current = this._head;
    let index = 0;

    while (current) {
      if (value === current.value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }

    return -1;
  }

  contains(value) {
    let current = this._head;

    while (current) {
      if (value === current.value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  pop() {
    if (this._head === null) return;

    const headValue = this._head.value;
    this._head = this._head.nextNode;

    return headValue;
  }

  at(index) {
    let current = this._head;
    let count = 0;

    while (current && count < index) {
      count++;
      current = current.nextNode;
    }

    return (current) ? current.value : undefined;
  }

  tail() {
    if (this._head === null) return;

    let current = this._head;

    while (current.nextNode) {
      current = current.nextNode;
    }

    return current.value;
  }

  head() {
    return (this._head !== null)
      ? this._head.value
      : undefined;
  }

  size() {
    let count = 0;
    let current = this._head;

    while (current) {
      count++;
      current = current.nextNode;
    }

    return count;
  }
  
  prepend(value) {
    const newNode = new Node(value);
    
    if (this._head === null) {
      this._head = newNode;
      return;
    }

    newNode.nextNode = this._head;
    this._head = newNode;
  }

  append(value) {
    const newNode = new Node(value);

    if (this._head === null) {
      this._head = newNode;
      return;
    }

    let current = this._head;

    while (current.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  getList() {
    const arr = [];
    let current = this._head;

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

export { LinkedList, Node };