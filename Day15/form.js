"use strict";
// Form Handling
const form_1 = document.querySelector("#signupForm");
// const nameInput = document.querySelector("#name") as HTMLInputElement;
// const emailInput = document.querySelector("#email") as HTMLInputElement;
// const form = document.querySelector("#signupForm") as HTMLFormElement;
// const submit = document.querySelector("#submit") as HTMLButtonElement;
// submit.disabled = true;
const formData = new FormData(form);
const username = formData.get("username");
const email = formData.get("email");
// const password = formData.get("password");
// const confirmpassword = formData.get("confirmPassword");
// //   const submit = formData.get("submit")
// if (password !== confirmpassword) {
//   console.log("password do not match");
//   submit.disabled = true;
// } else {
//   console.log("password match");
//   submit.disabled = false;
// }
//   console.log(username, email);
form_1.addEventListener("submit", (e) => {
    e.preventDefault();
    //   if (!form.checkValidity()) {
    //     console.log("Invalid form");
    //     return;
    console.log(username, email);
});
//   console.log("Form is Valid");
// });
// const username = formData.get("username");
// console.log(username);
