


for (let i = 1; i <= 4; i++) {
    let row = "";
    
    for (let j = i; j<4; j++) {
        row += " ";//space ke liya 
    }
    
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";//star ke liya 
    }
    console.log(row);
}   