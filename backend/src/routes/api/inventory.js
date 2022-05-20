const express = require('express');
const router = express.Router();
const { check, validationResult, param } = require('express-validator');
const { getAllItemsInLocation, getAllItemsInStore, getItemInLocation, updateItemQuantity, addItemInLocation, deleteItem, getStores } = require('../../core/inventory');
const auth = require('../../middleware/auth');

// @route    GET inventory/store/:storeName
// @desc     Search for a job posting based on the query
// @access   Public
router.get('/store/:storeName', param("storeName", "storeName is required").exists(), async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let inventory = (await getAllItemsInStore(req.params.storeName)).rows
        inventory = inventory.map(item => {

            let itemVelocity = 0
            if(item.insertion_date != null) {
                let numberOfDaysPassed = Math.ceil((Date.now()- item.insertion_date/1000) / (1000 * 3600 * 24))
                itemVelocity = (item.initial_quantity - item.quantity) / numberOfDaysPassed
            }


            return {...item, itemVelocity}

        })

        return res.json(inventory)
    }
    catch (error) {
        console.error(error.message);
        return res.status(400).json({ error });
    }

})

// @route    POST removeItem
// @desc     Set the new quantity of an item. If an item is added, create a new item instead of updating. The quantity must be lower than the initial_quantity.
// @access   Public
router.post('/removeItem', check("storeName", "storeName is required").exists(),
    check("location", "location is required").exists(),
    check("sku", "storeName is required").exists(),
    check("quantity", "quantity is required").isDecimal(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const storeItem = (await getItemInLocation(req.body.storeName, req.body.location, req.body.sku)).first()
            if(req.body.quantity > storeItem.quantity) throw "Quantity must be less than quantity!"
            else if(req.body.quantity == storeItem.quantity){
                deleteItem(req.body.storeName, req.body.location, req.body.sku)
            } else
            {
                updateItemQuantity(req.body.quantity, req.body.storeName, req.body.location, req.body.sku)
                return res.json("Item quantity removed")
            }
        }
        catch (error) {
            console.error(error.message);
            return res.status(400).json({ error });
        }
        

    })

// @route    POST addItem
// @desc     Add an item. If location is not specified, a default of 'storefront' will be added.
// @access   Public
router.post('/addItem', check("storeName", "storeName is required").exists(),
    check("sku", "storeName is required").exists(),
    check("quantity", "quantity is required").isDecimal(),
    check("units", "units is required").exists(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            if(req.body.location == null) req.body.location = "storefront"
            const {storeName, location, quantity, item_name, expiration_date, units, sku} = req.body

            addItemInLocation(storeName, location, sku, item_name, expiration_date, quantity, units)

            return res.json("Successfully added item!")
        }
        catch (error) {
            console.error(error.message);
            return res.status(400).json({ error });
        }
        
        
})

// @route    GET getStores
// @desc     Get all the store names in the table
// @access   Public
router.get('/getStores',
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            let data = (await getStores()).rows
        
            return res.json(data)
        }
        catch (error) {
            console.error(error.message);
            return res.status(400).json({ error });
        }
})




module.exports = router;