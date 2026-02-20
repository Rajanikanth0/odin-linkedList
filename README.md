# Linked List (Dynamic Data Allocation)
A performance efficient data-structure for push (insertion) and pop (deletion)

## methods
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

## Algorithm

### append(value)
> add 2 tracking pointers
> - head (start): first node of the list
> - tail (end): last node of the list

```javascript
create a Node (key-value pair)

if list is empty:
  add newNode to head
else:
  add newNode as tail's nextNode

finally: add newNode to tail
```

### prepend(value)
> add 1 tracking pointer
> - head (start): first node of the list
> - tail (end): last node of the list (optional)

```javascript
create a Node (key-value pair)

if list is empty:
  add newNode to head
  add newNode to tail (optional)
else:
  add head as node's nextNode
  add newNode to head
```