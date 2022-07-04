const { checkSchema } = require('express-validator');


const propertyCreateValidatorTrips = () => {
    return checkSchema({
        fechaSolicitud: {
            in: ['body'],
            exists: { errorMessage: " El campo es obligatorio " },
            isDate: { errorMessage: " Debes introducir una fecha correcta " },
        },

        departamento: {
            in: ['body'],
            exists: { errorMessage: " El campo es obligatorio " },
        },

        codigo: {
            in: ['body'],
            exists: { errorMessage: " El campo es obligatorio " },
            isLength: {
                errorMessage: " El campo no puede tener más de 20 caracteres ",
                options: {
                    max: 20
                }
            }
        },

        motivoGasto: {
            in: ['body'],
            exists: { errorMessage: " El campo es obligatorio " },
            isLength: {
                errorMessage: " El campo no puede tener más de 400 caracteres ",
                options: {
                    max: 400
                }
            }
        },

        fechaSalida: {
            in: ['body'],
            exists: { errorMessage: " El campo es obligatorio " },
            isDate: { errorMessage: " Debes introducir una fecha correcta " },
        },

        fechaRegreso: {
            in: ['body'],
            exists: { errorMessage: " El campo es obligatorio " },
            isDate: { errorMessage: " Debes introducir una fecha correcta " },
        },

        pernocta: {
            in: ['body'],
            exists: { errorMessage: " El campo es obligatorio " },
        },

        origen: {
            in: ['body'],
            exists: { errorMessage: " El campo es obligatorio " },
        },

        destino: {
            in: ['body'],
            exists: { errorMessage: " El campo es obligatorio " },
        },

        transporte: {
            in: ['body'],
            exists: { errorMessage: " El campo es obligatorio " },
        },

        importe: {
            in: ['body'],
            exists: { errorMessage: " El campo es obligatorio " },
            isNumeric: { errorMessage: " El campo tiene que ser un número " }
        },

    });
}

module.exports = {
    propertyCreateValidatorTrips
}

