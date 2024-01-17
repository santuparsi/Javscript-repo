let num = [76, 54, 12, 34, 45, 56, 67, 78, 89];
let flowers = ["Rose", "Lilly", "Jasmine"];
//foreach
//return suare of array no
num.forEach((i) => console.log(i * i));
flowers.forEach((n) => console.log(n.toUpperCase()));
//find()(return first occurence in the sequence)
let n = num.find((n) => n > 50);
console.log(n);
let getCustomers = () => [
  { Id: 1, Name: "John", City: "Delhi" },
  { Id: 2, Name: "Tim", City: "Mumbai" },
  { Id: 3, Name: "Jim", City: "Chennai" },
  { Id: 4, Name: "Karan", City: "Delhi" },
];
let obj = getCustomers().find((n) => n.City == "Delhi");
console.log(obj);
//Filter
let customers = getCustomers().filter((n) => n.City == "Delhi");
console.log(customers);
