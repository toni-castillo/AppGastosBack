const { executeQuery, executeQueryOne } = require('../helpers')

const getAll = () => {
    return executeQuery('select * from appgastos.expenses where general_type = "trip"');
}

const getById = (tripId) => {
    return executeQueryOne('select * from appgastos.expenses where id = ?', [tripId]);
}

const create = ({ fechaSolicitud, departamento, codigo, motivoGasto, fechaSalida, fechaRegreso, pernocta, hotel, origen, destino, transporte, km, importe }, general_type, userId) => {
    return executeQuery('insert into appgastos.expenses (date_request, department, project_code, reason, departure_date, return_date, overnight, hotel_link, trip_origin, trip_destination, means_transport, if_car_km, amount, general_type, users_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [fechaSolicitud, departamento, codigo, motivoGasto, fechaSalida, fechaRegreso, pernocta, hotel, origen, destino, transporte, km, importe, general_type, userId]);
}

const updateById = (tripId, { fechaSolicitud, departamento, codigo, motivoGasto, fechaSalida, fechaRegreso, pernocta, hotel, origen, destino, transporte, km, importe }, general_type, userId) => {
    return executeQuery('update appgastos.expenses set date_request = ? , department = ? , project_code = ?, reason = ?, departure_date = ?, return_date = ?, overnight = ?, hotel_link = ?, trip_origin = ?, trip_destination = ?, means_transport = ?, if_car_km = ?, amount = ?, general_type = ?, users_id = ? where id = ?', [fechaSolicitud, departamento, codigo, motivoGasto, fechaSalida, fechaRegreso, pernocta, hotel, origen, destino, transporte, km, importe, general_type, userId, tripId]);
}

const deleteById = (tripId) => {
    return executeQuery('delete from appgastos.expenses where id = ?', [tripId]);
}

module.exports = { create, getAll, getById, updateById, deleteById };
