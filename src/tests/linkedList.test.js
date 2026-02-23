import { LinkedList, Node } from "../modules/linkedList";

let list;
beforeEach(() => {
  list = new LinkedList();
});

describe("test list traversal", () => {
  test("empty list", () => {
    expect(list.getList()).toEqual([]);
  });
  test("list of length 1", () => {
    // manual list creation
    list._head = new Node('a');
    expect(list.getList()).toEqual(['a']);
  });
  test("list of length 2", () => {
    // manual list creation
    list._head = new Node('a');
    list._head.nextNode = new Node('b');

    expect(list.getList()).toEqual(['a', 'b']);
  });
});

describe("test append method", () => {
  test("append a node", () => {
    list.append('a');
    expect(list.getList()).toEqual(['a']);
  });
  test("append three nodes", () => {
    list.append('a');
    list.append('b');
    list.append('c');
    
    expect(list.getList()).toEqual(['a', 'b', 'c']);
  });
});

describe("test prepend method", () => {
  test("prepend a node", () => {
    list.prepend('a');
    expect(list.getList()).toEqual(['a']);
  });
  test("prepend three nodes", () => {
    list.prepend('a');
    list.prepend('b');
    list.prepend('c');
    
    expect(list.getList()).toEqual(['c', 'b', 'a']);
  })
});

describe("test size method", () => {
  test("empty list", () => {
    expect(list.size()).toBe(0);
  });
  test("list of length 1", () => {
    list.append('a');

    expect(list.size()).toBe(1);
  });
  test("list of length 3", () => {
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.size()).toBe(3);
  });
});

describe("test head method", () => {
  test("empty list", () => {
    expect(list.head()).toBeUndefined();
  });
  test("list of length 1", () => {
    list.append('a');
    expect(list.head()).toBe('a');
  })
  test("list of length 2", () => {
    list.prepend('a');
    list.append('b');

    expect(list.head()).toBe('a');
  });
});

describe("test tail method", () => {
  test("empty list", () => {
    expect(list.tail()).toBeUndefined();
  });
  test("list of length 1", () => {
    list.append('a');
    expect(list.tail()).toBe('a');
  })
  test("list of length 2", () => {
    list.append('a');
    list.append('b');
  
    expect(list.tail()).toBe('b');
  });
});

describe("test at method", () => {
  test("empty list", () => {
    expect(list.at(2)).toBeUndefined();
  });
  test("index greater than list length", () => {
    list.append(1);
    list.append(2);

    expect(list.at(5)).toBeUndefined();
  });
  test("value of the node at index", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(list.at(2)).toBe(3);
  });
});

describe("test pop method", () => {
  test("empty list", () => {
    expect(list.pop()).toBeUndefined();
    expect(list.getList()).toEqual([]);
  })
  test("list of length 1", () => {
    list.append('a');
    expect(list.pop()).toBe('a');
    expect(list.getList()).toEqual([]);
  })
  test("list of length 2", () => {
    list.append('a');
    list.append('b');

    expect(list.pop()).toBe('a');
    expect(list.getList()).toEqual(['b']);
  })
})

describe.only("test contains method", () => {
  test("empty list", () => {
    expect(list.contains('a')).toBe(false);
  })
  test("list does not contain the item", () => {
    list.append('a');
    expect(list.contains('b')).toBe(false);
  })
  test("list contains the item", () => {
    list.append('a');
    list.append('b');

    expect(list.contains('b')).toBe(true);
  })
})