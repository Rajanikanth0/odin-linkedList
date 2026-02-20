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

### append(value)
Adds a new node containing value to the end of the list

> Tracking pointers:
> - **head**: first node of the list
> - **tail**: last node of the list

```javascript
create a Node (value + next pointer)

if list is empty:
  head = newNode
  tail = newNode
else:
  tail.next = newNode
  tail = newNode
```

### prepend(value)
adds a new node containing value to the start of the list

> Tracking pointers:
> - **head**: first node of the list
> - **tail**: last node of the list (optional)

```javascript
create a Node (value + next pointer)

if list is empty:
  head = newNode
  tail = newNode (optional)
else:
  newNode.next = head;
  head = newNode;
```

### size()
returns the total number of nodes in the list

> Tracking pointers:
> - **length** as 0: total number of nodes

```javascript
After each insertion: increase length by 1
After each deletion: decrease length by 1
```

### head() and tail()
returns current respective nodes. undefined if list is empty.

> Tracking pointers:
> - **head** as undefined: first node of the list
> - **tail** as undefined: last node of the list

```javascript
Update the pointers on each insertion or deletion

head to be the first node
tail to be the last node 
```