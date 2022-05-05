const db = require("../config/db")

const getAccountById = async (uid) => {
    const query = "SELECT * FROM admin WHERE uid = ? ALLOW FILTERING"
    const res = await db.execute(query, [uid], {prepare: true})
    return res.first()
}

const getAdminCredentialsByEmail = async (email) => {
    const query = "SELECT * FROM admin WHERE email = ? ALLOW FILTERING"
    const res = await db.execute(query, [email], {prepare: true})
    return res.first()
}

const deleteUserTest = async (email) => {
    const query = "DELETE FROM food_pantry.usercredentials WHERE email = ? IF EXISTS"
    const query2 = "DELETE FROM food_pantry.staff where email = ? IF EXISTS"

    const res = await db.execute(query, [email], {prepare: true})
    const res2 = await db.execute(query2, [email], {prepare: true})
    return res.first(), res2.first()
}

const deleteUser = async (email) => {
    await deleteUserFromUserCred(email)
    await deleteUserFromStaff(email)
    await deleteUserFromDonor(email)
}

const deleteUserFromUserCred = async (email) => {
    const query = "DELETE FROM food_pantry.usercredentials WHERE email = ? IF EXISTS"
    const res = await db.execute(query, [email], {prepare: true})
    return res.first()
}

const deleteUserFromStaff = async (email) => {
    const query = "DELETE FROM food_pantry.staff WHERE email = ? IF EXISTS"
    const res = await db.execute(query, [email], {prepare: true})
    return res.first()
}

const deleteUserFromDonor = async (email) => {
    const query = "DELETE FROM food_pantry.donor WHERE email = ? IF EXISTS"
    const res = await db.execute(query, [email], {prepare: true})
    return res.first()
}

const getAllUsers = async () =>{
    const query = "SELECT * FROM usercredentials ALLOW FILTERING"
    const res = await db.execute(query)
}





module.exports = {getAdminCredentialsByEmail, deleteUser, getAllUsers, deleteUserFromUserCred};
//getAdminCredentialsByEmail('sophiecoo1021@cs157corp.com').then(res => console.log(res))


