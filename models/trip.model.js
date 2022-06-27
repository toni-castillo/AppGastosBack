const { executeQuery } = require('../helpers')



const create = ({ fechaSolicitud, departamento, codigo, motivoGasto, fechaSalida, fechaRegreso, pernocta, hotel, origen, destino, transporte, km, importe }, userId) => {
    return executeQuery('insert into appgastos.expenses (date_request, department, project_code, reason, departure_date, return_date, overnight, hotel_link, trip_origin, trip_destination, means_transport, if_car_km, amount, users_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [fechaSolicitud, departamento, codigo, motivoGasto, fechaSalida, fechaRegreso, pernocta, hotel, origen, destino, transporte, km, importe, userId]);
}

module.exports = { create };
