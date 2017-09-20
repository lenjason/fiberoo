function fib() {
  let i = 0;
  let num1 = 0;
  let num2 = 1;
  let tempNum = 1;
  let sum = 0;
  let array = [];

  for (i=0; i<100; i++) {
    array.push(num1);
    sum += num1;
    tempNum = num1;
    num1 = num2;
    num2 = tempNum + num2;
  }
  return array;
}
console.log(fib());

function numToString(array) {
  let array1 = [];
  array1 = _.map(array, function(num){
    return num + '';
  });
  return array1;
}
console.log(numToString(fib()));

function numEvenNum(array) {
  let array2 = _.filter(array, function(num) {
    return num % 2 == 0;
  });
  return array2.length;
}
console.log(numEvenNum(fib()));