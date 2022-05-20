const db = require("../config/db")


const scheduleAppointment = (store_name,id,approved,description, donor,reserved_date) => {
    const query = "INSERT INTO Donation_Reservation(store_name,id,approved,description,donor,reserved_date) VALUES (?,?,?,?,?,?)"
    return db.execute(query,[store_name,id,approved,description,donor,reserved_date],{prepare: true})
}

const getAllAppointment = () => {
    const query = "SELECT * FROM Donation_Reservation"
    return db.execute(query)
}

const approve = async (store_name,id) =>{
    let query = "SELECT approved FROM Donation_Reservation WHERE store_name = ? AND id = ?"
    const approved = await db.execute(query,[store_name,id],{prepare: true})
    query = "UPDATE Donation_Reservation SET approved = ? WHERE store_name=? AND id = ?"
    return db.execute(query,[!approved.rows[0].approved,store_name,id],{prepare: true})
}


const deleteAppointment =(store_name,id) => {
    const query = "DELETE FROM Donation_Reservation WHERE store_name=? AND id=?"
    return db.execute(query,[store_name,id],{prepare: true})
}
module.exports = {scheduleAppointment,approve,getAllAppointment,deleteAppointment}
