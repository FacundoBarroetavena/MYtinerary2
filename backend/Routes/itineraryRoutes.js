const express = require('express')
const router = express.Router();
const Itinerary = require('../Schemas/Itinerary.js')

router.get('/', async (req, res) => {
    var itinerariesFromRoutes = await Itinerary.find(function (err, allItineraries) {
        if (err) return console.error(err);
        console.log("Todos los itinerarios desde itineraryRoutes", allItineraries);
    })
    res.json({ itinerariesFromRoutes })
});


router.get('/:city_name', async (req, res) => {
    var itinerariesForACity = await Itinerary.find({ "city": ((req.params.city_name.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(" "))) }, function (err, itineraries) {
        if (err) return console.error(err);
    })
    res.json({ itinerariesForACity })
})



module.exports = router;