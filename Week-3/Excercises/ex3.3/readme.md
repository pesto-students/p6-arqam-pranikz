# Exercise3.3

```sh
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); //What is logged?
```

## Output

```sh
Count is 0
```

## Explanation

> "Count is 0" is logged to console.
> Increment function has been called 3 times thus value of count is 3.
> Even if count variable has been incremented a few times, message variable always holds 'Count is 0'.
> Because, message variable exists within the scope of createIncrement function.
> Its initial value is 'Count is 0'. However, it always refeact log as 'Count is 0'.

> We can get actual count to put message variable in the body of log function shown as below

```sh
function log() {
    let message = `Count is ${count}`;
    console.log(message);
}
```