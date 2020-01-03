const axios = require("axios");
const postData = require("./uberPostData");

var cookie = `sid=${postData.cookies.sid};csid=${postData.cookies.csid}`;

let con = axios(
    {
        method: "post",
        url: postData.url,
        data: postData.data,
        headers: {
            authority: "m.uber.com",
            origin: "https://m.uber.com",

            "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
            dnt: "1",
            "content-type": "application/json",
            accept: "*/*",
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "cors",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9,pt;q=0.8",
            "x-csrf-token": "x",
            cookie: cookie
        }
    },
    postData.data
)
    .then(res => res)
//     .catch(ev => {
//         console.log(ev);
//         console.log("error!!!!!");
//     });

module.exports = con;
