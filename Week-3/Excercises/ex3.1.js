function add(a, b) {
    a = a || 0;
    b = b || 0;
  
    return a + b;
  }
  
  //Memoize function that remembers previous inputs
  function memoize(fn) {
    const cache = new Map();
  
    return function (...args) {
      const key = args.toString();
  
      console.log(cache);
      console.log("function called with " + key);
  
      if (cache.has(key)) {
        console.log("Fetching from cache");
        return cache.get(key);
      } else {
        console.log("Calculating result");
        cache.set(key, fn(...args));
        return cache.get(key);
      }
    };
  }
  
  //Create a method called memoize such that:
  const memoizeAdd = memoize(add);
  
  //Time the add function
  function time(fn) {
    console.time();
    fn();
    console.timeEnd();
  }
  
  //then calling...
  time(() => console.log(memoizeAdd(100, 100))); //returns 200
  console.log("\n");
  time(() => console.log(memoizeAdd(100))); //returns 100
  console.log("\n");
  time(() => console.log(memoizeAdd(100, 200))); //returns 300
  console.log("\n");
  time(() => console.log(memoizeAdd(100, 100))); //returns 200 without computing