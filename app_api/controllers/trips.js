const mongoose = require('mongoose');
const Model = mongoose.model('trips');

// retrieve a list of all trips
const tripsList = async (req, res) => {
    Model
    //model
        .find({})   // blank filter to find all trips
        .exec((err, trips) => {
            if(!trips) {
                return res
                    .status(404)
                    .json({"message" : "no trips found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    // success
                    .status(200)
                    .json(trips);
            }
        });
};            

// retrieve single trip
const tripsFindByCode = async (req, res) => {
    Model
    //model
        .find({'code' : req.params.tripCode })   // blank filter to find all trips
        .exec((err, trips) => {
            if(!trips) {
                return res
                    .status(404)
                    .json({"message" : "no trips found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    // success
                    .status(200)
                    .json(trips);
            }
        });
};            

module.exports = {
    tripsList,
    tripsFindByCode
};