type user={
    name:string
}
type admin={
    name:string
    grantAcess:()=>void;

}
const user1:user{
    name:"sam"

}
const admin1:admin{
    name:"amsa",
    grantAcess:()=>{
        console.log("aceess granted");
        
    },
}
function authernticate(account:user|admin):void{
    if("grantAcess" in account){
        account.grantAcess()
    }
}
authernticate(admin1)
authernticate(user)

//generic interface 



//utility 

//Record<k,v>