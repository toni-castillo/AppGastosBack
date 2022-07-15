const { executeQuery, executeQueryOne } = require('../helpers/executeQueries')

const getAll = () => {
    return executeQuery('select * from appgastos.expenses where general_type = "Formacion"');
}

const getById = (trainingId) => {
    return executeQueryOne('select * from appgastos.expenses where id = ?', [trainingId]);
}

const create = ({ fechaSolicitud, departamento, codigo, motivoGasto, fechaFormacion, formacionSolicitada, proveedor, horasFormacion, horarioFormacion, personas, importe }, name, surname, userId) => {
    return executeQuery('insert into appgastos.expenses (name, surname, date_request, department, project_code, reason, date_expense, requested_training, provider, training_hours, training_schedule, number_people, amount, general_type, is_accepted, users_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, surname, fechaSolicitud, departamento, codigo, motivoGasto, fechaFormacion, formacionSolicitada, proveedor, horasFormacion, horarioFormacion, personas, importe, "Formacion", "Pendiente", userId]);
}

const updateById = (trainingId, { fechaSolicitud, departamento, codigo, motivoGasto, fechaFormacion, formacionSolicitada, proveedor, horasFormacion, horarioFormacion, personas, is_accepted, importe }) => {
    return executeQuery('update appgastos.expenses set date_request = ? , department = ? , project_code = ?, reason = ?, date_expense = ?, requested_training = ?, provider =?, training_hours = ?, training_schedule = ?, number_people = ?, is_accepted =?, amount = ? where id = ?', [fechaSolicitud, departamento, codigo, motivoGasto, fechaFormacion, formacionSolicitada, proveedor, horasFormacion, horarioFormacion, personas, "Pendiente", importe, trainingId]);
}

const deleteById = (trainingId) => {
    return executeQuery('delete from appgastos.expenses where id = ?', [trainingId]);
}

module.exports = { create, getAll, getById, updateById, deleteById };
