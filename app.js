const app = require("./config/server");
require("dotenv").config();
const config = require("./config");

app.listen(config.app.PORT, function () {
  console.log("Server up on port " + config.app.PORT);
});
