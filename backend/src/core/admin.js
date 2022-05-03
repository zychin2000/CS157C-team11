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

module.exports = {getAdminCredentialsByEmail};
getAdminCredentialsByEmail('sophiecoo1021@cs157corp.com').then(res => console.log(res))


