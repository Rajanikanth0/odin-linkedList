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