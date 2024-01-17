let flowers = ["rose", "lilly", "jasmine"];
let n = flowers.map((i) => i.length > 5);
console.log(n);
let n1 = flowers.map((k) => {
  let m = k[0].toUpperCase() + k.slice(1, k.length);
  return m;
});
console.log(n1);
