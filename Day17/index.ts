//unioun type "|"
let userId:number | string=101;
userId="dg05"

console.log(userId)
//using type 
type ID=string|number

function hello(id:ID){
    console.log(id)
}
hello("hellme")

type HTTPmethod="get"|"post"|"delete"
// let method=HTTPmethod;
method="get"
//descriminated union
type ApiResponse=|{
    status:"sucess"
    data:string
}|{
    status:"error"
    message:string
}
function HandleResponse(response:ApiResponse){

}




//type narrowing

function processInput(value:string|number):void{
    if (typeof value==="string"){
        console.log(value.toLocaleUpperCase());
    }else{
        console.log(value.toFixed(2));
        
    }
}
processInput("hello")
processInput(10.9830)