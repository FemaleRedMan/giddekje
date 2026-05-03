const express = require("express");
const fetch = require("node-fetch");
const xml2js = require("xml2js");
const app = express();

const API_KEY = "AAA";

app.get("/trains", (req, res) => {
    res.json({
        time: Date.now(),
        william: "pookieee :D",
        trains: [
            {
                id: "T1",
                lat: 59.91,
                lon: 10.75,
                speed: 120,
                delay: 0
            },
            {
                id: "T2",
                lat: 60.39,
                lon: 5.32,
                speed: 80,
                delay: 3
            }
        ]
    });
    
    // try {
    //     const response = await fetch("https://api.banenor.no/...endpoint...", {
    //         headers: {
    //             "Ocp-Apim-Subscription-Key": API_KEY
    //         }
    //     })
    //     const xml = await response.text();
    //     const json = await xml2js.parseStringPromise(xml);
    //     res.json(json);
    // } catch(err) {
    //     res.status(500).send("Error");
    // }
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
