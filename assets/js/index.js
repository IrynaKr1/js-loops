// 1 Вивести числа від 25 до 0 (порядок зменшення).

let number = 25;
// while
console.group('With while loop:');
while (number >= 0) {
  console.log(number);
  number--;
}
console.groupEnd();
// do ... while
let doWhile = 25;
console.group('With do...while loop:');
do {
  console.log(doWhile);
  doWhile--;
} while (doWhile >= 0);
console.groupEnd();

// for
console.group('With for loop: ');
for (let i = 25; i >= 0; i--) {
  console.log(i);
}
console.groupEnd();