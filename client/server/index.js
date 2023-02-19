const express = require("express");
const app = express();
const twilio = require("twilio");
const twil_id = "ACd7c445c074b04cc905fa653be2148003";
const twil_token = "682f89d407ff145b69e84588de143d9b";
const twil_number = "+16094540472";
const client = twilio(twil_id, twil_token);

app.get("/api", (req, res) => {
  client.messages
    .create({
      from: twil_number,
      to: "+919666986510",
      body: "It's time to take a break",
    })
    .then((message) => {
      console.log(`The message ID is: ${message.sid}`);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3030, () => {
  console.log("server is running on Port:3030");
});
