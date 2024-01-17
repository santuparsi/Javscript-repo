let num = [76, 54, 12, 34, 45, 56, 67, 78, 89, 1, 0];
//add item to the array at the end
num.push(90);
console.log(num);
//add item to the begining of the array
num.unshift(10);
console.log(num);
//remove item at the end
num.pop();
console.log(num);
//remove item from the front
num.shift();
console.log(num);
//remove items in between
//num.splice(2, 2);
//num.splice(2, 2, 100, 200);
console.log(num);
n1 = num.slice(3, num.length); //return values in between index
console.log(n1);
//num.sort();
num.sort((a, b) => a - b);
console.log(num);
