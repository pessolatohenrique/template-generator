const redis = require("redis");
const manipulateList = require("./manipulate-list");
const allowList = redis.createClient({
  host: "redis",
  port: 6379,
  prefix: "allowlist-refresh-token:",
});
module.exports = manipulateList(allowList);
