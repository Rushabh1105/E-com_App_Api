const CartController = require('../controllers/cart.controller');

const routes = (app) => {
    app.post('/ecom/api/v1/addproduct',CartController.addProductToCart);
    app.post('/ecom/api/v1/removeproduct',CartController.removeProductFromCart);
    app.post('/ecom/api/v1/updatecart',CartController.updateCartStatus);
    
}

module.exports = routes;