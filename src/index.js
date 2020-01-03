const uber = require("./services/uberService");

const origin = [-22.8745132, -47.0494196],
    dest = [-22.9088671, -47.0553481];

uber.getFareEstimates(origin,dest).then((res)=>console.log(res.data));
