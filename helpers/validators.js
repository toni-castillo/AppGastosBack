const { checkSchema } = require('express-validator');

const createPurchaseValidators = () => {
  return checkSchema({
    department: {
      exists: { errorMessage: 'Se requiere indicar el área' }
    },
    project_code: {
      exists: { errorMessage: 'Se requiere indicar el código del proyecto' }
    },
    reason: {
      exists: { errorMessage: 'Se requiere indicar la razón' },
      isLength: {
        errorMessage: " El campo no puede tener más de 400 caracteres ",
        options: {
          max: 400
        }
      }
    },
    date_expense: {
      exists: { errorMessage: 'Se requiere indicar la fecha' },
      isDate: { errorMessage: 'Debes introducir una fecha correcta' },
    },
    product_link: {
      exists: { errorMessage: 'Se requiere indicar el producto' }
    },
    provider: {
      exists: { errorMessage: 'Se requiere indicar el proveedor' }
    },
    units: {
      exists: { errorMessage: 'Se requiere indicar las unidades' }
    },
    amount: {
      exists: { errorMessage: 'Se requiere indicar el monto' }
    }
  });
}

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

const propertyCreateValidatorTraining = () => {
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

    fechaFormacion: {
      in: ['body'],
      exists: { errorMessage: " El campo es obligatorio " },
      isDate: { errorMessage: " Debes introducir una fecha correcta " },
    },

    formacionSolicitada: {
      in: ['body'],
      exists: { errorMessage: " El campo es obligatorio " },
    },

    proveedor: {
      in: ['body'],
      exists: { errorMessage: " El campo es obligatorio " },
    },

    horasFormacion: {
      in: ['body'],
      exists: { errorMessage: " El campo es obligatorio " },
      isNumeric: { errorMessage: " El campo tiene que ser un número " }
    },

    horarioFormacion: {
      in: ['body'],
      exists: { errorMessage: " El campo es obligatorio " },
    },

    personas: {
      in: ['body'],
      exists: { errorMessage: " El campo es obligatorio " },
      isNumeric: { errorMessage: " El campo tiene que ser un número " }
    },

    importe: {
      in: ['body'],
      exists: { errorMessage: " El campo es obligatorio " },
      isNumeric: { errorMessage: " El campo tiene que ser un número " }
    },

  });

};

module.exports = {
  createPurchaseValidators, propertyCreateValidatorTrips, propertyCreateValidatorTraining
}

