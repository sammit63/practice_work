"use strict";
// for and while loops
let nums = [1, 2, 3, 4, 5, 6,];
let count = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
        count++;
    }
}
console.log(count);
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);
for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < 4; j--) {
        row += "i";
    }
    console.log(row);
}
