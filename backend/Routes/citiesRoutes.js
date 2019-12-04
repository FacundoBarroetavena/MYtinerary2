const express = require('express')
const router = express.Router();
const City = require('../Schemas/City.js')

router.get('/', async (req, res) => {
    var ciudadesFromRoutes = await City.find(function (err, allCities) {
        if (err) return console.error(err);
        console.log("Todas las ciudades desde City.find");
    })
    res.json({ ciudadesFromRoutes })
});

router.get('/:id', async (req, res) => {
    var singleCityFromRoutes = await City.find({ "title": req.params.id }, function (err, singleCity) {
        if (err) return console.error(err);
    })
    res.json({ singleCityFromRoutes })
});

router.route('/addcity').post( async function (req, res) {
    try {
        const city = new City(req.body);
        await city.save();
        res.send(city);
    } catch (e) {
        res.send(e);
    }
});

module.exports = router;