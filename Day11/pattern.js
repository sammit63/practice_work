"use strict";
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = i; j < 5; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);
}
