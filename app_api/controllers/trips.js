const mongoose = require('mongoose');
const model = mongoose.model('trips');

// GET: retrieve a list of all trips
const tripsList = async (req, res) => {
    model
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

// retrieve single trip using trip code
const tripsFindByCode = async (req, res) => {
    model
        .find({'code' : req.params.tripCode})
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