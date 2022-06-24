const CategoryController = require('../controllers/category.controller');
const validator = require('../middlewares/requestValidators');



const routes = (app) =>{
    app.get('/ecom/api/v1/categories', CategoryController.getAllCategories);
    app.post('/ecom/api/v1/categories',validator.validateCategoryCreationRequest, CategoryController.createCategory);
    app.delete('/ecom/api/v1/categories/:id', CategoryController.deleteCategory);
    app.get('/ecom/api/v1/categories/:id', CategoryController.getCategory);
    app.get('/ecom/api/v1/categoriesbyName', CategoryController.getCategoryByName);
    app.put('/ecom/api/v1/categories/:id', CategoryController.updateCategory);
}


module.exports = routes;