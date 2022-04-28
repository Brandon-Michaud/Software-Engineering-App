const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// This route takes a search parameter and queries the food database and then responds with the JSON object of results
router.get('/:searchInput', (req, res) => {
    const params = {
        api_key: 'QRfBMF4C6vGHhpSERkdxZWSqgQXlpkG1SeM86v48',
        query: req.params.searchInput,
        dataType: ["Survey (FNDDS)"],
        pageSize: 10,
    }

    const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pageSize)}`;
    
    function getData() {
        return fetch(api_url).then(response => response.json())
    }
    
    data = getData();
    data.then(function(result) {
        res.send(result);
    });
});

module.exports = router;