# Exercise3.4

```sh
function createStack() {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    }
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
stack.items = [10, 100, 1000]; // Encapsulation broken!
```

> In this example items property of stack function is exposed. Anyone can modify items array directly same as pop and push property of stack.
> It breaks the encapsulation of the stack.
> We can refactor the above stack implementation by making push() and pop() methods public, but stack.items shouldn't be accessible.

### Refactor the above stack implementation

```sh
function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    }
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
console.log(stack.items); // => undefined
```

### Output

```sh
undefined
```

> By moving items variable inside createStack() scope. there is no way to access or modify items array from the outside of createStack() scope.
> Items is now a private variable, and the stack is encapsulated only push() and pop() method are public.