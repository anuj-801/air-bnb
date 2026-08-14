const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));

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

app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs")
});

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My new vila",
//         description: "Buy the beach",
//         price: 20000,
//         location: "goa",
//         country: "India"
//     });

//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Successfull testing")
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});