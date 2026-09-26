// Question 5: An e-commerce platform stores product prices as strings (e.g., "₹1250" or
// "500"). Before performing calculations, the system needs to clean and convert these values.
// Explain how JavaScript handles type conversion when you try to subtract a number from a
// numeric string (e.g., "500" - 50), and write a small snippet showing the safest way to convert
// "500" explicitly into a number using TypeScript.

let product_prices=["1245","456","74"]

// const priceString: string = "500";
// const price: number = Number(priceString);
for(let i:number=0; i<product_prices.length;i++){
    console.log(Number(product_prices[i]) - 50);
}
