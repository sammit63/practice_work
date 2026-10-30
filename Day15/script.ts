// QuerySelector
// QuerySelector it returns the first matching element

// const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

// QuerySelectorAll

const buttons = document.querySelectorAll(".btn");

// Returns Nodelist

buttons.forEach((button) => {
  console.log(button.innerHTML);
});
// Type assertion , we need to explictly tell the type of ifnput we are getting  
const emailInput = document.querySelector("#email") as HTMLInputElement;

emailInput.addEventListener("input", ()=>{
    console.log(emailInput.value);

})
console.log(emailInput.value);

// Event Listeners

// Syntax: element.addEventListener("event", handler)
function handleClick() {
  console.log("Button Clicked");
}
const btn_1 = document.querySelector("#sumbit") as HTMLButtonElement;

btn_1.addEventListener("click",handleClick);

// btn.removeEventListener("click", handleClick);

const form = document.querySelector("form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form has been submitted!");
});
// UI - Dynamic Update

const input = document.querySelector("#name") as HTMLInputElement;
const display = document.querySelector("#display")!;

input.addEventListener("input", () => {
    const current_value=input.value;
    display.textContent = current_value;
});