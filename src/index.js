const axios = require("axios");
const postData = require("./uberPostData");
const config = require("./config");

let con = axios(
    {
        method: "post",
        url: postData.url,
        data: postData.data,
        headers: config.headers
    },
    postData.data
).then(res => res);
//     .catch(ev => {
//         console.log(ev);
//         console.log("error!!!!!");
//     });

module.exports = con;
