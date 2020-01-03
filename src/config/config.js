require("dotenv").config();

const env = process.env,
 sid = env.NODE_UBER_COOKIE_SID,
 csid = env.NODE_UBER_COOKIE_CSID

module.export = {
    sid,
    csid
};
