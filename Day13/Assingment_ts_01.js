"use strict";
//  A local store is digitizing its billing. They offer a flat 10% discount if the total bill
// amount is above ₹2,000, and an additional 5% discount if the customer pays using a digital
// wallet (UPI). Write a TypeScript code snippet using nested conditions or logical operators to
// calculate the final amount a customer needs to pay. Define appropriate types for all variables.
let billAmount = 2500;
let paymentMethod = "UPI";
let discount = 0;
if (billAmount > 2000) {
    discount = 10;
    if (paymentMethod === "UPI") {
        discount += 5;
    }
}
let discountAmount = (billAmount * discount) / 100;
let finalAmount = billAmount - discountAmount;
console.log("Original Bill: ₹" + billAmount);
console.log("Discount: " + discount + "%");
console.log("Final Amount to Pay: ₹" + finalAmount);
