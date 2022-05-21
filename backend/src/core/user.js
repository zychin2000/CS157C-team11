const db = require("../config/db")



const getStaffAccount = (uid) => {
    const query = "SELECT * FROM Staff WHERE id = ? allow filtering"
    
    return db.execute(query, [uid], {prepare: true})
}

const getUserCredentialsByEmail = async (email) => {
    const query = "SELECT * FROM usercredentials WHERE email = ? allow filtering"

    const res = await db.execute(query, [email], {prepare: true})

    return res.first()
}

const registerNewUser = async (email, password, uid) => {

    const query = "INSERT INTO usercredentials (email, password, userid) VALUES (?, ?, ?)"

    const res = await db.execute(query, [email, password, uid], {prepare: true})
    return res
}

const createDonorAccount = async (id, contact_info, email, first_name, last_name, organization, verified, encrypted_password) => {

    const query = "INSERT INTO donor (id, contact_info, email, first_name, last_name, organization, verified, encrypted_password) VALUES (?, ?, ?, ?, ?, ? ,?, ?)"

    const res = await db.execute(query, [id, contact_info, email, first_name, last_name, organization, verified, encrypted_password], {prepare: true})
    return res
}

const createStaffAccount = async (id, contact_info, email, first_name, last_name, organization, encrypted_password) => {

    const query = "INSERT INTO staff (id, contact_info, email, first_name, last_name, organization, encrypted_password) VALUES (?, ?, ?, ?, ?, ?, ?)"

    const res = await db.execute(query, [id, contact_info, email, first_name, last_name, organization, encrypted_password], {prepare: true})
    return res
}


module.exports = {getUserCredentialsByEmail, registerNewUser, createDonorAccount, createStaffAccount, getStaffAccount}
