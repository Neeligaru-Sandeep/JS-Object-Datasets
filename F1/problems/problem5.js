const userOrders = require("../data/user_orders.json");

function flattenArrays(){
    const result = [];
    const data = userOrders.result;
    for(let i=0; i<data.length; i++){
        const email = data[i].emails;
        result.push(...email);
    };

    console.log(result);
};
flattenArrays();