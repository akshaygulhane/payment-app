const express = require('express');
const app = express();

const CHARGEBEE_API_KEY = process.env.CHARGEBEE_API_KEY || "";
const PORT = process.env.PORT || 3000;

var chargebee = require('chargebee');

chargebee.configure({
    site: "https://opcito-dev-test.chargebee.com",
    api_key: CHARGEBEE_API_KEY
});

app.listen(PORT, () => {
    console.log(`Server started succesfully on PORT: ${PORT}`);
})