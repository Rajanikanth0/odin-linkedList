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

describe("test contains method", () => {
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

describe("test findIndex method", () => {
  test("empty list", () => {
    expect(list.findIndex(0)).toBe(-1);
  })
  test("list does not contain the item", () => {
    list.append('a');
    expect(list.findIndex(2)).toBe(-1);
  })
  test("list contains the item", () => {
    list.append('a');
    list.append('b');

    expect(list.findIndex('b')).toBe(1);
  })
})

describe("test toString method", () => {
  test("empty list", () => {
    expect(list.toString()).toBe("");
  })
  test("list of length 1", () => {
    list.append('a');
    expect(list.toString()).toBe("( a ) -> null");
  })
  test("list of length 2", () => {
    list.append('a');
    list.append('b');
    
    expect(list.toString()).toBe("( a ) -> ( b ) -> null");
  })
})

describe.only("insertAt method", () => {
  describe("empty list", () => {
    test("insertion at index 0", () => {
      list.insertAt(0, 'a');
      expect(list.toString()).toBe("( a ) -> null");
    })
    test("insertion out of index", () => {
      expect(() => list.insertAt(1, 'a')).toThrow(RangeError);
    })
  })

  describe("insertion at the start", () => {
    test("list of length 1", () => {
      list.append('a');

      list.insertAt(0, 'b');
      expect(list.toString()).toBe("( b ) -> ( a ) -> null");
    })
    test("list of length 2", () => {
      list.append('a');
      list.append('b');

      list.insertAt(0, 'c');
      expect(list.toString()).toBe("( c ) -> ( a ) -> ( b ) -> null");
    })
    test("multiple insertion values", () => {
      list.append('a');
      list.append('b');

      list.insertAt(0, 'c', 'd');
      expect(list.toString()).toBe("( c ) -> ( d ) -> ( a ) -> ( b ) -> null");
    })
  })

  describe("insertion in the middle", () => {
    test("list of length 2", () => {
      list.append('a');
      list.append('b');

      list.insertAt(1, 'c');
      expect(list.toString()).toBe("( a ) -> ( c ) -> ( b ) -> null");
    })
    test("multiple insertion values", () => {
      list.append('a');
      list.append('b');

      list.insertAt(1, 'c', 'd');
      expect(list.toString()).toBe("( a ) -> ( c ) -> ( d ) -> ( b ) -> null");
    })
  })

  describe("insertion at the end", () => {
    test("list of length 1", () => {
      list.append('a');

      list.insertAt(1, 'b');
      expect(list.toString()).toBe("( a ) -> ( b ) -> null");
    })
    test("list of length 2", () => {
      list.append('a');
      list.append('b');

      list.insertAt(2, 'c');
      expect(list.toString()).toBe("( a ) -> ( b ) -> ( c ) -> null");
    })
    test("multiple insertion values", () => {
      list.append('a');
      list.append('b');

      list.insertAt(2, 'c', 'd');
      expect(list.toString()).toBe("( a ) -> ( b ) -> ( c ) -> ( d ) -> null");
    })
  })
})