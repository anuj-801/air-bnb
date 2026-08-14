const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        set: (v) => v === "" ? "https://c.pxhere.com/photos/b6/f0/beach_birds_dawn_dusk_hd_wallpaper_nature_ocean_outdoors-1174709.jpg!d" : v,
    },
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing; 