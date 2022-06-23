const authController = require('../controllers/auth.controller')

const routes = (app) => {
    app.post('/ecom/signup', authController.signup);
    app.post('/ecom/signin',authController.signin) ;
    app.patch('/ecom/api/v1/user/:userId',authController.updateUser);
    app.get('/ecom/api/v1/:userId/getrole',authController.getRolesFromUser);
}

module.exports = routes;