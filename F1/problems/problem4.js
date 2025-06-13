const userOrders = require("../data/user_orders.json");

function statusActiveDisabled(){
    const output = {};
    const data = userOrders.result;

    for(let i=0; i<data.length; i++){
        const status = data[i].status;
        output[status] = ( output[status] || 0 )+ 1;
    };

    console.log(output);
};
statusActiveDisabled();