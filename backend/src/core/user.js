const db = require("../config/db")



const getStaffAccount = (uid) => {
    const query = "SELECT * FROM Staff WHERE email = ?"
    
    return db.execute(query, email)
}

const getUserCredentialsByEmail = async (email) => {
    const query = "SELECT * FROM usercredentials WHERE email = ?"

    const res = await db.execute(query, [email], {prepare: true})

    return res.first()
}

const registerNewUser = async (email, password, uid) => {

    const query = "INSERT INTO usercredentials (email, password, userid) VALUES (?, ?, ?)"

    const res = await db.execute(query, [email, password, uid], {prepare: true})
    return res
}

const createDonorAccount = async (id, contact_info, email, first_name, last_name, organization, verified) => {

    const query = "INSERT INTO donor (id, contact_info, email, first_name, last_name, organization, verified) VALUES (?, ?, ?, ?, ?, ? ,?)"

    const res = await db.execute(query, [id, contact_info, email, first_name, last_name, organization, verified], {prepare: true})
    return res
}

const createStaffAccount = async (id, contact_info, email, first_name, last_name, organization) => {

    const query = "INSERT INTO staff (id, contact_info, email, first_name, last_name, organization) VALUES (?, ?, ?, ?, ?, ?)"

    const res = await db.execute(query, [id, contact_info, email, first_name, last_name, organization], {prepare: true})
    return res
}

module.exports = {getUserCredentialsByEmail, registerNewUser, createDonorAccount, createStaffAccount}
