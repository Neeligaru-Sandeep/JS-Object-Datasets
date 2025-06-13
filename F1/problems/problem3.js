const userOrders = require("../data/user_orders.json");

function negitiveLongtitude(){
    const data = userOrders.result;
    const output = [];

    for(let i=0; i<data.length; i++){
        const longtitude = data[i].location.coordinates.longitude;

        if(longtitude < 0){
            const fullName = data[i].name.first + " " + data[i].name.middle + " " + data[i].name.last;
            
            output.push({
                name : fullName,
                longtitude : longtitude
            });
        };
    };

    console.log(output);
};
negitiveLongtitude();