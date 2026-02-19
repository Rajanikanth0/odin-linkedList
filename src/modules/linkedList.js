class LinkedList {
  constructor() {
    this.head = new Node();
  }

  append(value) {
    const node = new Node(value);

    const lastNode = LinkedList.getLastNode(this.head);
    lastNode.nextNode = node;
  }

  static getLastNode(node) {
    if (node.nextNode === null) return node;
    return LinkedList.getLastNode(node.nextNode);
  }

  static getList(node, arr = []) {
    if (node.nextNode === null) return arr;
    
    arr.push(node.nextNode.value);
    return LinkedList.getList(node.nextNode, arr);
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export default LinkedList;