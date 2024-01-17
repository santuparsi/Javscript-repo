function Greet(name) {
  return "Hello " + name;
}
function Sqaure(n) {
  return Math.pow(n, 2);
}
function isEven(n) {
  return n % 2 == 0 ? true : false;
}
function GetFlowers() {
  return ["Rose", "Lilly", "Jasmine"]; //return array
}
function GetStudents() {
  return [
    { Id: 1, Name: "ROhan", age: 10 },
    { Id: 2, Name: "Josef", age: 11 },
    { Id: 3, Name: "Tina", age: 12 },
    { Id: 4, Name: "Monica", age: 10 },
    { Id: 5, Name: "Sachin", age: 11 },
    { Id: 6, Name: "Virat", age: 12 },
  ];
}
console.log(Greet("Virat"));
console.log(Sqaure(12));
console.log(isEven(12) ? "Even" : "Odd");
console.log(GetFlowers());
console.log(GetStudents());
