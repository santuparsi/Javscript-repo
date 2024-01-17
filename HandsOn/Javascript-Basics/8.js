let n = [12, 23, 34, 45, 56, 67]; //array
n[2] = 45;
//access
let k = n[1];
//print
for (i = 0; i < n.length; i++) {
  console.log(n[i]);
}
for (let m of n) {
  console.log(m);
}
