const app = require("./config/server");
const port = 9001;

app.listen(port, function () {
  console.log("Server up on port " + port);
});
