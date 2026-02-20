import LinkedList from "../modules/linkedList";

let list;
beforeEach(() => {
  list = new LinkedList();
})

test("test list traversal", () => {
  expect(list.getList()).toEqual([]);
});

describe("test append method", () => {
  test("append a node", () => {
    list.append(5);
  
    expect(list.getList()).toEqual([5]);
  });
  
  test("append three nodes", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    
    expect(list.getList()).toEqual([1, 2, 3]);
  });
});

describe("test prepend method", () => {
  test("prepend a node", () => {
    list.prepend(0);

    expect(list.getList()).toEqual([0]);
  });

  test("prepend three nodes", () => {
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    
    expect(list.getList()).toEqual([3, 2, 1]);
  })
});

describe("test size method", () => {
  test("empty list size", () => {
    expect(list.size()).toBe(0);
  });

  test("add a node", () => {
    list.append(1);

    expect(list.size()).toBe(1);
  });

  test("add three nodes", () => {
    list.append(1);
    list.prepend(2);
    list.prepend(3);

    expect(list.size()).toBe(3);
  });
});