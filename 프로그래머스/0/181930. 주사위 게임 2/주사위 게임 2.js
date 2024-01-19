function solution(a, b, c) {
  if (a === b && b === c) {
    return (a + b + c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c) 
  } else if (a === b || b === c || a === c) {
    return (a + b + c) * (a**2 + b**2 + c**2)
  } else {
    return a + b + c 
  }
}
let result1 = solution(2, 6, 1);


console.log(result1);
