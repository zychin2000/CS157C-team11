const db = require("../config/db")


const addAppointment = (store_name, id, description, email, expiration_date = null, quantity = 1, units = 'unit') => {
    const query = "INSERT INTO INVENTORY (store_name, location, sku, expiration_date, item_name, quantity, units) VALUES (?, ?, ?, ?, ?, ?, ?)"
    return db.execute(query, [store_name, location, sku, expiration_date, item_name, quantity, units], { prepare: true })
}
