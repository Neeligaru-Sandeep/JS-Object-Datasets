const userOrders = require("../data/user_orders.json");

function jobRoleArchitect(){
    const result = [];
    const data = userOrders.result;

    for(let i=0; i<data.length; i++){
        const jobTitle = data[i].job.title;

        if(jobTitle.includes("Architect")){
            const fullName = data[i].name.first + " "+data[i].name.middle+" "+data[i].name.last;
            result.push({
                name : fullName,
                jobTitle
            });
        };
    };

    console.log(result);
};
jobRoleArchitect();