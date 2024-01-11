const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.json({
    message: "your message is available",
  });
});

app.listen(9000, () => {
  console.info(`
    ## blog server started successfully
    ## at 9000
    ## welcome...
  `);
});
