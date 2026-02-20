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

### append(value)
> Add 2 tracking pointers
> head (start): first node of the list
> tail (end): last node of the list

```javascript
create a Node (key-value pair)

if list is empty: add the node to head
else: add the node as tail's nextNode(reference)
finally: add the node to tail
```