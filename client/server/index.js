const express = require("express");
const app = express();
const twilio = require("twilio");
const twil_id = '<YOUR_TWILIO_SSID>'
const twil_token = "<YOUR_TWILIO_AUTH_TOKEN>";
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
