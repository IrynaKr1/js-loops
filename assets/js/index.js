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

// 2 Вивести числа від 10 до 50, які кратні 5.
// while
let secondWhile = 10;
console.group('From 10 to 50, with while loop');
while (secondWhile <= 50) {
  console.log(secondWhile);
  secondWhile += 5;
}
console.groupEnd();

// do...while

let secondDoWhile = 10;
console.group('From 10 to 50, with do...while loop');
do {
  console.log(secondDoWhile);
  secondDoWhile += 5;
} while (secondDoWhile <= 50);
console.groupEnd();

// for
console.group('From 10 to 50, with for loop');
for (let i = 10; i <= 50; i += 5) {
  console.log(i);
}
console.groupEnd();

// 3. *Знайти суму чисел в межах від 1 до 100.

//while
let i = 1;
let sumWhile = 0;
while (i <= 100) {
  sumWhile += i;
  i++;
}
console.log('Сума чисел в межах від 1 до 100 з while', sumWhile);

//do...while
let j = 1;
let sumDoWhile = 0;
do {
  sumDoWhile += j;
  j++;
} while (j <= 100);
console.log('Сума чисел в межах від 1 до 100 з do...while', sumDoWhile);

//for
let forResult = 0;
for (let i = 1; i <= 100; i++) {
  forResult += i;
}
console.log('Сума чисел в межах від 1 до 100 з for', forResult);
