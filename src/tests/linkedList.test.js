import LinkedList from "../modules/linkedList";

test("test list traversal", () => {
  const list = new LinkedList();

  expect(LinkedList.getList(list.head)).toEqual([]);
});

test("test one append method", () => {
  const list = new LinkedList();
  
  list.append(5);

  expect(LinkedList.getList(list.head)).toEqual([5]);
});

test("test three append methods", () => {
  const list = new LinkedList();

  list.append(1);
  list.append(2);
  list.append(3);
  
  expect(LinkedList.getList(list.head)).toEqual([1, 2, 3]);
});