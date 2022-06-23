const producrController = require('../controllers/product.controller');
const requestValidator = require('../middlewares/requestValidators');
const AuthValidators = require('../middlewares/auth.Validator')
const authorizationValidator = require('../middlewares/authorizationValidator')

const routes = (app) => {
    app.get('/ecom/api/v1/products',AuthValidators.isAuthenticated, producrController.getAllProducts);
    app.post('/ecom/api/v1/products',AuthValidators.isAuthenticated ,requestValidator.validateProductCreationRequest,authorizationValidator.canAddProduct ,producrController.createProduct);
    //app.get('/ecom/api/v1/productsbycategory', producrController.filterProducts);
}

module.exports = routes;