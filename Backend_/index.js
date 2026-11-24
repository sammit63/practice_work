// const readline=require("readline");
// const r1=readline.createInterface({
//     input: process.stdin,
//     output:process.stdout,
// });
// r1.question("what is your name",(name=>{
//     console.log(name);
//     r1.close();
    
// }))

import fs from "node:fs";

// const data = fs.readFileSync("notes.txt", "utf-8")
// console.log(data);


// fs.appendFileSync("notes.txt", "\n Welcome Students")
// console.log("Data appended ");



fs.stat("notes.txt", (err, stats) => {
  if (err) {
    console.log("File not Found");
    return;
  }
  console.log("File Size", stats.size);
  console.log("Is File", stats.isFile());
});


fs.mkdir("uploads", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Directory Created");
});

fs.readdir("uploads", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files);
});

fs.rename("uploads", "user-uploads", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Directory Renamed");
});
