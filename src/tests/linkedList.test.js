import LinkedList from "../modules/linkedList";

let list;
beforeEach(() => {
  list = new LinkedList();
})

test("test list traversal", () => {
  expect(list.getList()).toEqual([]);
});

test("test one append method", () => {
  list.append(5);

  expect(list.getList()).toEqual([5]);
});

test("test three append methods", () => {
  list.append(1);
  list.append(2);
  list.append(3);
  
  expect(list.getList()).toEqual([1, 2, 3]);
});