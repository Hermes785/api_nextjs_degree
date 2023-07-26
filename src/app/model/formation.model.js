const mongoose = require('mongoose');

const formationSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        outlet: {
            type: [String],
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        picture: {
            type: String,
            //required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports =mongoose.models.Formation || mongoose.model('Formation', formationSchema);
