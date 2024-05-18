
const express = require('express')

const items = require('../db/foodItems');
const category = require('../db/categories');

const route = express.Router();

route.get('/getItems', async (req, res) =>{
    items.find()
        .then(data =>{
            console.log('items',data)
            category.find()
                    .then(cat =>{
                        res.status(200).json({
                            items: data,
                            category: cat
                        })
                    })
                    .catch(error =>{
                        res.status(500).send(error)
                    })
        })
        .catch(error =>{
            res.status(500).json(error)
        })
})
module.exports = route;