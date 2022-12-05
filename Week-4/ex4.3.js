const fib = {
    number: 8,
    [Symbol.iterator]: function () {
      let oldVal = 0;
      let newVal = 0;
      let i = 1;
  
      return {
        next: () => {
          if (i++ < this.number) {
            [oldVal, newVal] = [newVal, oldVal + newVal || 1];
            return {
              value: oldVal,
              done: false,
            };
          } else {
            return {
              done: true,
            };
          }
        },
      };
    },
  };
  
  console.log("The Fibonacci series is: ");
  for (let n of fib) {
    console.log(n);
  }