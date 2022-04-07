const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/api/:searchInput', function(req, res, next) {
    const params = {
        api_key: 'QRfBMF4C6vGHhpSERkdxZWSqgQXlpkG1SeM86v48',
        query: req.params.searchInput,
        dataType: ["Survey (FNDDS)"],
        pageSize: 10,
    }
    
    const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pageSize)}`;
    
    function getData() {
        return fetch(api_url)
        .then(response => response.json())
    }
    
    data = getData();
    res.send(data);
});

module.exports = router;