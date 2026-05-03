const express = require("express");
const fetch = require("node-fetch");
const xml2js = require("xml2js");
const app = express();

const API_KEY = "AAA";

app.get("/trains", async(req, res) => {
    try {
        const response = await fetch("https://api.banenor.no/...endpoint...", {
            headers: {
                "Ocp-Apim-Subscription-Key": API_KEY
            }
        })
        const xml = await response.text();
        const json = await xml2js.parseStringPromise(xml);
        res.json(json);
    } catch(err) {
        res.status(500).send("Error");
    }
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});