const express = require('express');
const router = express.Router();
const excelToJson = require('convert-excel-to-json');

router.get('/dropdownList', (req, res) => {
    var data ;
    const result = excelToJson({
        sourceFile: 'uploads/MMV master 27102017.xlsx',
    });
        var lookup = {};
        var items = result.Sheet1;
        var final = [];

        for (var item, i = 1; item = items[i++];) {
            var name = item.E;

            if (!(name in lookup)) {
                lookup[name] = 1;
                final.push(name.toUpperCase());
            }   
            console.log("printing unique ",final)
        }

     res.json(final);
});

module.exports = router;

