// 2
function calculate(numOne: number, numTwo: number): number {
    return numOne + numTwo;
  }
  
  console.log(calculate(10, 20)); // 30
  // console.log(calculate("10", "20")); // We Don't Need This To Work
  console.log(calculate(+true, +true)); // 2

// 3
function printInfo(valueOne: string | number, valueTwo: string | number): string | number {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work