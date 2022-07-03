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
      exists: { errorMessage: 'Se requiere indicar la razón' }
    },
    date_expense: {
      exists: { errorMessage: 'Se requiere indicar la fecha' }
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

module.exports = { createPurchaseValidators };