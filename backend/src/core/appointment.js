const { v4: uuidv4 } = require('uuid');
const db = require("../config/db")

const scheduleAppointment = (store_name,id = uuidv4,approved = false,description, donor,reserved_date) => {
    const query = "INSERT INTO Donation_Reservation(store_name,id,approved,description,donor,reserved_date) VALUES (?,?,?,?,?,?)"
    return db.execute(query,[store_name,id,approved,description,donor,reserved_date])
}

const getAllAppointment = () => {
    const query = "SELECT * FROM Donation_Reservation"
    return db.execute(query)
}

const approve = (id) =>{
    const query = "SELECT approved FROM Donation_Reservation WHERE id = ?"
    const approved = db.execute(query,id)
    query = "UPDATE Donation_Reservation SET approved = ? WHERE id = ?"
    return db.execute(query,[approved])
}

const getByApproved = (approved) => {
    const query = "SELECT * FROM Donation_Reservation WHERE approved = ?"
    return db.execute(query,[approved])
}

const deleteAppointment =(id) => {
    const query = "DELETE FROM Donation_Reservation WHERE id=?"
    return db.execute(query,[id])
}