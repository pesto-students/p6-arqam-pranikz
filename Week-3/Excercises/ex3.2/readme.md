# Exercise3.2

## call, bind and apply in JS

### bind() :

> The bind() method returns a new function
> It allowing you to pass in an array and any number of arguments

```sh
var item1 = {
  brand: "Van Heusen",
  name: "Shirt",
};

var item2 = {
  brand: "Spykar",
  name: "Jeans",
};

var item3 = {
  brand: "Adidas",
  name: "Shoes",
};

function order(firstname, lastname) {
  var orderlog = [firstname, lastname, "ordered", this.brand, this.name].join(
    " "
  );

  console.log(orderlog);
}

//bind()
console.log("bind() : ");

var orderprint = order.bind(item1);
orderprint("Harshit", "Patel");
var orderprint = order.bind(item2);
orderprint("John", "Smith");
```

### Output

```sh
bind() :
Harshit Patel ordered Van Heusen Shirt
John Smith ordered Spykar Jeans
Harshit Patel ordered Adidas Shoes
```

### call() :

> The call() method calls a function with a given this value and arguments provided individually

```sh
var item1 = {
  brand: "Van Heusen",
  name: "Shirt",
};

var item2 = {
  brand: "Spykar",
  name: "Jeans",
};

var item3 = {
  brand: "Adidas",
  name: "Shoes",
};

function order(firstname, lastname) {
  var orderlog = [firstname, lastname, "ordered", this.brand, this.name].join(
    " "
  );

  console.log(orderlog);
}

//call()
console.log("call() : ");
order.call(item1, "Harshit", "Patel");
order.call(item2, "John", "Smith");
order.call(item3, "Harshit", "Patel");
```

### Output

```sh
call() :
Harshit Patel ordered Van Heusen Shirt
John Smith ordered Spykar Jeans
Harshit Patel ordered Adidas Shoes
```

### apply() :

> The call() method Invokes the function and allows you to pass in arguments as an array.

```sh
var item1 = {
  brand: "Van Heusen",
  name: "Shirt",
};

var item2 = {
  brand: "Spykar",
  name: "Jeans",
};

var item3 = {
  brand: "Adidas",
  name: "Shoes",
};

function order(firstname, lastname) {
  var orderlog = [firstname, lastname, "ordered", this.brand, this.name].join(
    " "
  );

  console.log(orderlog);
}

//apply()
console.log("apply() : ");
order.apply(item1, ["Harshit", "Patel"]);
order.apply(item2, ["John", "Smith"]);
order.apply(item3, ["Harshit", "Patel"]);
```

### Output

```sh
apply() :
Harshit Patel ordered Van Heusen Shirt
John Smith ordered Spykar Jeans
Harshit Patel ordered Adidas Shoes
```