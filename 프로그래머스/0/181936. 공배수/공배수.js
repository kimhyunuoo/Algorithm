function solution(number, n, m) {
  if (number % n === 0 && number % m === 0){
    return 1;
  } else {
    return 0;
  }
}
let result1 = solution(60, 2 , 3)
console.log(result1)
