require("dotenv").config();

const env = process.env,
    sid = env.UBER_COOKIE_SID,
    csid = env.UBER_COOKIE_CSID;
/*
 * test if csid and csid are defined
 */

if (sid === undefined || csid === undefined) {
    console.log(
        "ERROR: UBERING",
        "csid or sid in note defined in enviroment variables or .env file"
    );
}

const cookie = `sid=${sid};csid=${csid}`,
    uberUrl = "https://m.uber.com",
    toExport = {
        sid,
        csid,
        uberUrl,
        headers: {
            authority: "m.uber.com",
            origin: uberUrl,

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
    };

module.exports = toExport;
