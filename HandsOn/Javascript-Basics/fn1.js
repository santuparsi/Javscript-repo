function Welcome() {
  console.log("Welcome to Javascript");
}
Welcome(); //calling function
function Greet(name) {
  console.log("Hello " + name);
}
Greet("Virat");
Greet("Rohith");
function Add(a, b = 10) { //b set as default value
  let c; //local variable
  c = a + b;
}
Add(12, 34);
Add(30); //b=10
function Sum(n) {
  let s = 0;
  for (k of n) {
    s = s + k;
  }
  console.log("Sum of Array:" + s);
}
Sum([23, 34, 45, 56, 67]);
Sum([67, 78, 89]);
