# Linked List (Dynamic Data Allocation)
A performance efficient data-structure for push (insertion) and pop (deletion)

## List of methods
- append(value)
- prepend(value)
- size()
- head()
- tail()
- at(index)
- pop()
- contains(value)
- findIndex(value)
- toString()

## Methods (usage, description, algorithm)

## append(value)

Adds a new node containing `value` to the end of the linked list.

**Key terms:**
- `head`: the first node of the list
- `tail`: a pointer used to traverse the list

**Algorithm:**
1. If `head` is `null`, set `head` to the new node and return.
2. Set `tail` as `head`.
3. while `tail` is not `null`, move `tail` to `tail.next`.
4. Set `tail.next` to the new node.

---
## prepend(value)

Adds a new node containing `value` to the start of the linked list.

**Key terms:**
- `head`: the first node of the list

**Algorithm**
1. If `head` is `null`, set `head` to the new node and return.
2. Set `newNode.next` to `head`
3. Update `head` to be the new node.

---
## size()

Returns the total number of nodes in the linked list.

**Key terms:**
- `head`: the first node of the list
- `current`: a pointer used to traverse the list
- `count`: tracks the number of nodes

**Algorithm**
1. Initialize `count` as `0`.
2. Set `current` to `head`.
3. Traverse the list until `current` is `null`
    - Increment `count` by `1`.
    - Move `current` to `current.next`.
4. Return `count`.

---
## head()

Returns the `value` of the first node. `undefined` if list is empty.

**Key terms:**
- `head`: the first node of the list

**Algorithm**
1. If `head` is not null, return `head.value`.
2. Otherwise, return `undefined`.

---
## tail()

Returns the `value` of the final node. `undefined` if list is empty.

**Key terms:**
- `head`: the first node of the list
- `current`: a pointer used to traverse the list

**Algorithm**
1. If `head` is `null`, return `undefined`.
2. Set `current` to `head`.
3. While `current.next` is not `null`, move `current` to `current.next`.
4. Return `current.value`.

---
## at(index)

Returns the `value` of the node at the given `index`. `undefined` if list is empty.

**Key terms:**
- `head`: the first node of the list
- `current`: a pointer used to traverse the list
- `count`: tracks the number of nodes

**Algorithm**
1. Initialize `count` as `0`.
2. Set `current` to head.
3. While, `current` is not `null` and `count` is less than index
    - Increment `count` by `1`.
    - Move `current` to `current.next`.
4. If `current` is not null, return `current.value`.
5. Otherwise, return `undefined`.