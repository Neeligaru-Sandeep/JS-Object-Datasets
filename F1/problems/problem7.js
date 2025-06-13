const userOrders = require("../data/user_orders.json");

function zipCodeDash(){
    const output = [];
    const data = userOrders.result;

    for(let i=0; i<data.length; i++){
        const zipCode = data[i].location.zip;
        const regex = /[-]/;

        if(regex.test(zipCode)){
            const fullName = data[i].name.first + " " + data[i].name.middle + " " + data[i].name.last;
            output.push({
                name : fullName,
                zip : zipCode
            });
        };
    };

    console.log(output);
};
zipCodeDash();