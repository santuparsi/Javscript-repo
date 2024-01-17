//Function callbacks
function callback(f1, f2) {
  let message = f1();
  let message1 = f2();
  console.log(message + " " + message1);
}
function SendName() {
  return "Sachin";
}
function Message() {
  return "Hello";
}
callback(Message, SendName);
