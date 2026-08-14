const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const Listing = require("./models/listing");

app.set("view engine", "ejs");

main().
    then(() => {
        console.log("Successfull connection...");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My new vila",
        description: "Buy the beach",
        price: 20000,
        location: "goa",
        country: "India"
    });

    await sampleListing.save();
    console.log("Sample was saved");
    res.send("Successfull testing")
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});