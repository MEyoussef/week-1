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
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// 4
let arr: (number | boolean[] | (string | (string | number)[])[])[] = [1, 2, [true, false], ["Youssef", ["yehya", 3, 4]]];

// 5
function reportErrors(username: string, age: number) {
  // let rank = "Professor";
  return `Username: ${username}`;
  // console.log("We Will Not Reach Here");
}

console.log(reportErrors("Elzero", 40));

// 6
let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c) {
  return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, nothing, theName)); // Elzero

// 7
function showMsg(user?: number | string, age?: boolean | string | number, country?: boolean | string) {
  return `${user}${age}${country}`;
}

console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));