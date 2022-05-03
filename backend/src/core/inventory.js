const { v4: uuidv4 } = require('uuid');

const db = require("../config/db")

const getAllItemsInStore = (store_name) => {
    const query = "SELECT store_name, location, sku, expiration_date, item_name, initial_quantity, quantity, units, writetime(initial_quantity) as insertion_date FROM Inventory WHERE store_name = ?"
    
    return db.execute(query, [store_name], {prepare: true})
}

const getAllItemsInLocation = (store_name, location) => {
    const query = "SELECT * FROM Inventory WHERE store_name = ? AND location = ?"
    return db.execute(query, [store_name, location], {prepare: true})
}

const getItemInLocation = (store_name, location, sku) => {
    const query = "SELECT * FROM Inventory WHERE store_name = ? AND location = ? AND sku = ?"
    return db.execute(query, [store_name, location, sku], {prepare: true})
}

const addItemInLocation = (store_name, location, sku = uuidv4(), item_name = "asd", expiration_date = null, quantity = 1, units = 'unit') => {
    const query = "INSERT INTO INVENTORY (store_name, location, sku, expiration_date, item_name, initial_quantity, quantity, units) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    return db.execute(query, [store_name, location, sku, expiration_date, item_name, quantity, quantity, units], {prepare: true})
}

const updateItemQuantity = (newQuantity, store_name, location, sku) => {
    const query = "UPDATE INVENTORY SET quantity = ? WHERE store_name = ? AND location = ? AND sku = ?"
    return db.execute(query, [newQuantity, store_name, location, sku], {prepare: true})
}

const deleteItem = (store_name, location, sku) => {
    const query = "DELETE FROM INVENTORY WHERE store_name=? and location=? and sku=?"
    return db.execute(query, [store_name, location, sku], {prepare: true})
}

// getAllItemsInStore('sjsu_pantry') 
// getAllItemsInLocation('sjsu_pantry', 'fridges').then(res => console.log(res)) 
// getAllItemsInLocation('sjsu_pantry', 'fridges').then(res => console.log(res.first()))
// addItemInLocation('sjsu_pantry', 'fridges')
module.exports = {getAllItemsInStore, getAllItemsInLocation,getItemInLocation, addItemInLocation, updateItemQuantity, deleteItem}
