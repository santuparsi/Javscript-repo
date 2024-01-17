// const arrfn=(params)=>exression
const Greet = (n) => "Hello " + n;
//calling arrow function
console.log(Greet("virat"));
const Add = (a, b) => a + b;
console.log(Add(3, 4));
console.log(Add(4, 5));
const Sum = (n) => {
  let result = 0;
  for (k of n) result = result + k;
  return result;
};
console.log("Sum=" + Sum([12, 23, 34, 45, 56, 67]));
const getFlowers = () => ["Rose", "Lilly", "Jasmine", "Tulips"];
console.log(getFlowers());
const getCustomers = () => [
  { Id: 1, Name: "John", City: "Delhi" },
  { Id: 2, Name: "Tim", City: "Mumbai" },
  { Id: 3, Name: "Jim", City: "Chennai" },
  { Id: 4, Name: "Karan", City: "Pune" },
];
console.log(getCustomers());
