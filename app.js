const express = require('express');
const app = express();

const CHARGEBEE_API_KEY = process.env.CHARGEBEE_API_KEY || "";

var chargebee = require('chargebee');

chargebee.configure({
    site: "https://opcito-dev-test.chargebee.com",
    api_key: CHARGEBEE_API_KEY
});