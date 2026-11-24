const readline=require("readline");
const r1=readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});
r1.question("what is your name",(name=>{
    console.log(name);
    r1.close();
    
}));

// file system fs

