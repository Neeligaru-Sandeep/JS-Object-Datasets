const userOrders = require("../data/user_orders.json");

function orders(){
    const output = [];

    for(let i=0; i<userOrders.result.length; i++){
        const data = userOrders.result;
        const status = data[i].status;

        if(status == "active"){
            const fullName = data[i].name.first + " "+data[i].name.middle + " " +data[i].name.last;
            const userName = data[i].username;
            const cc_issuer = data[i].creditCard.issuer;
            const cc_number = data[i].creditCard.number;

            output.push({
                name : fullName,
                userName : userName,
                creditCard : {
                    number : cc_number,
                    issuer : cc_issuer
                },
                status : status
            });
        };  
    }

    console.log(output);
};
orders();
