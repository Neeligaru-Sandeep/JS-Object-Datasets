const userOrders = require("../data/user_orders.json");

function userArea(){
    const output = [];

    for(let i=0; i<userOrders.result.length; i++){
        const data = userOrders.result;
        const jobArea = data[i].job.area;
        
        if(jobArea == "Integration"){
            const city = data[i].location.city;
            const country = data[i].location.country;
            
            output.push({
                city,
                country
            });
        };
    };

    console.log(output);
}
userArea();