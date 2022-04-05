const db = require("../config/db")


const getStaffAccount = (email) => {
    const query = "SELECT * FROM Staff WHERE email = ?"
    
    return db.execute(query, email)
}