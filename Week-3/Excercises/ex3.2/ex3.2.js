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
orderprint("Pratyush", "Mahapatra");
var orderprint = order.bind(item2);
orderprint("John", "Smith");
var orderprint = order.bind(item3);
orderprint("Pratyush", "Mahapatra");
console.log("\n##########################\n");

//call()
console.log("call() : ");
order.call(item1, "Pratyush", "Mahapatra");
order.call(item2, "John", "Smith");
order.call(item3, "Pratyush", "Mahapatra");

console.log("\n##########################\n");

//apply()
console.log("apply() : ");
order.apply(item1, ["Pratyush", "Mahapatra"]);
order.apply(item2, ["John", "Smith"]);
order.apply(item3, ["Pratyush", "Mahapatra"]);
