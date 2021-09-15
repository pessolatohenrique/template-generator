const redis = require("redis");
const manipulateList = require("./manipulate-list");
const forgotList = redis.createClient({
  host: "redis",
  port: 6379,
  prefix: "forgotlist-token:",
});
module.exports = manipulateList(forgotList);
