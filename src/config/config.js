require("dotenv").config();

const env = process.env;

const sid = env.NODE_UBER_COOKIE_SID;
const csid = env.NODE_UBER_COOKIE_CSID;

module.export = {
    sid,
    csid
};
