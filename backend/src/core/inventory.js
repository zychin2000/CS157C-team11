const { v4: uuidv4 } = require('uuid');

const db = require("../config/db")

const getAllItemsInStore = (store_name) => {
    const query = "SELECT * FROM Inventory WHERE store_name = ?"
    
    return db.execute(query, store_name)
}

const getAllItemsInLocation = (store_name, location) => {
    const query = "SELECT * FROM Inventory WHERE store_name = ? AND location = ?"
    return db.execute(query, [store_name, location])
}

const addItemInLocation = (store_name, location, sku = uuidv4(), item_name = "asd", expiration_date = null, quantity = 1, units = 'unit') => {
    const query = "INSERT INTO INVENTORY (store_name, location, sku, expiration_date, item_name, quantity, units) VALUES (?, ?, ?, ?, ?, ?, ?)"
    return db.execute(query, [store_name, location, sku, expiration_date, item_name, quantity, units], {prepare: true})
}

const updateItemQuantity = (store_name, location, sku) => {

}


// getAllItemsInLocation('sjsu_pantry', 'fridges').then(res => console.log(res.first()))
addItemInLocation('sjsu_pantry', 'fridges')

