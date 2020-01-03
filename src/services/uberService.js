const axios = require("axios");
const postData = require("./uberPostData");
const config = require("../config");

// console.log(postData())
//

const  getFareEstimates = (origin, dest) => {
        const prepare = postData(origin, dest);
        return axios(
            {
                method: "post",
                url: prepare.url,
                data: prepare.data,
                headers: config.headers
            },
            prepare
        ).then(res => res);
    }
const exportedModules = {
getFareEstimates
};
module.exports = exportedModules;
