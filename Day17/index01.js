"use strict";
const user1, { name: , "sam":  };
const admin1, { name: , "amsa": , grantAcess:  };
() => {
    console.log("aceess granted");
},
;
function authernticate(account) {
    if ("grantAcess" in account) {
        account.grantAcess();
    }
}
authernticate(admin1);
authernticate(user);
