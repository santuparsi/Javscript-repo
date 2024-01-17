let m1 = 89,
  m2 = 78,
  m3 = 67,
  m4 = 67,
  m5 = 90,
  m6 = 76;
let total = m1 + m2 + m3 + m4 + m5 + m6;
let avg = total / 6;
let result = "";
if (m1 > 40 && m2 > 40 && m3 > 40 && m4 > 40 && m5 > 40 && m6 > 40) {
  if (avg >= 70) result = "Distinction";
  else if (avg >= 60) result = "FirstClass";
  else if (avg >= 50) result = "SecondClass";
  else result = "ThirdClass";
} else result = "Fail";
if (result != "Fail")
  console.log(`Total Marks:${total} Average:${avg}% Result:${result}`);
else console.log("Faild");
