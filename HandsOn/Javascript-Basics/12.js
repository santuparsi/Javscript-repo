const Sum = (...n) => {
  let result = 0;
  for (k of n) result = result + k;
  return result;
};
console.log(Sum(12, 2));
console.log(Sum(12, 2, 34, 45));
