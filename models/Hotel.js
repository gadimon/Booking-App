import mongooose from "mongoose";

const { Schema } = mongooose;

const HotelSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    addres: {
        type: String,
        required: true,
    },
    distans: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
});

export default mongooose.model("Hotel", HotelSchema)