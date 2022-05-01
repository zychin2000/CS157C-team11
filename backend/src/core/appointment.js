const { v4: uuidv4 } = require('uuid');
const db = require("../config/db")

const scheduleAppointment = (store_name,id = uuidv4,approved = false,description, donor,reserved_date) => {
    const query = "INSERT INTO Donation_Reservation(store_name,id,approved,description,donor,reserved_date) VALUES (?,?,?,?,?,?)"
    return db.execute(query,[store_name,id,approved,description,donor,reserved_date])
}

const getAllAppointment = () => {
    const query = "SELECT * FROM Donation_Reservation"
    db.execute(query)
}

const getByApproved = (approved) => {
    const query = "SELECT * FROM Donation_Reservation WHERE approved = ?"
    db.execute(query,[approved])
}