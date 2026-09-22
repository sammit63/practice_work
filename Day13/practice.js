"use strict";
let orderStatus = "preparing";
switch (orderStatus) {
    case "placed":
        console.log("Your order has been placed successfully.");
        break;
    case "preparing":
        console.log("Your food is being prepared.");
        break;
    case "dispatched":
        console.log("Your order has been dispatched and is on the way.");
        break;
    case "delivered":
        console.log("Your order has been delivered. Enjoy your meal!");
        break;
    default:
        console.log("Invalid Status");
}
