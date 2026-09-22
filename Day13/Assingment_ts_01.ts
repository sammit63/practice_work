//  A local store is digitizing its billing. They offer a flat 10% discount if the total bill
// amount is above ₹2,000, and an additional 5% discount if the customer pays using a digital
// wallet (UPI). Write a TypeScript code snippet using nested conditions or logical operators to
// calculate the final amount a customer needs to pay. Define appropriate types for all variables.

let billAmount: number = 2500;  
let paymentMethod: string = "UPI";

let discount: number = 0;

if (billAmount > 2000) {
    discount = 10;
    if (paymentMethod === "UPI") {
        discount += 5;
    }
}

let discountAmount: number = (billAmount * discount) / 100;
let finalAmount: number = billAmount - discountAmount;

console.log("Original Bill: ₹" + billAmount);
console.log("Discount: " + discount + "%");
console.log("Final Amount to Pay: ₹" + finalAmount);