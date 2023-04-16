// 2
function calculate(numOne: number, numTwo: number): number {
  return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2

// 3
function printInfo(
  valueOne: string | number,
  valueTwo: string | number
): string | number {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// 4
let arr: (number | boolean[] | (string | (string | number)[])[])[] = [
  1,
  2,
  [true, false],
  ["Youssef", ["yehya", 3, 4]],
];

// 5
function reportErrors(username: string, _age?:number): string { // without the underscore i cant compile this typescript file so thats why im kepping this underscore
  // let rank = "Professor"; => not used
  return `Username: ${username}`;
  // console.log("We Will Not Reach Here"); => will not work
}

console.log(reportErrors("Elzero", 40));

// 6
let nothing: string | undefined;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c = theName) {
  return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, nothing)); // Elzero

// 7
function showMsg(
  user?: number | string,
  age?: boolean | string | number,
  country?: boolean | string
) {
  return `${user} - ${age} - ${country}`;
}

console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));

// 8
// Write The Function Here
function printInConsole(...INPUT: (string | number | boolean)[]) {
  for (let i = 0; i < INPUT.length; i++) {
    console.log(`The Value Is ${INPUT[i]} And Type Is ${typeof INPUT[i]}`);
  }
  return "Done";
}
// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done
