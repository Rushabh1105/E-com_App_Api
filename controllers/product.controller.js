const productServiece = require('../servieces/product.servieces');

const getAllProducts = async(req,res) => {
    const response = await productServiece.getAllProducts(req.query);

    return res.json({
        message : 'Successfully fetched all the products',
        success : true,
        code : 200,
        data : response
    });
}

const createProduct = async(req,res) => {
    const response = await productServiece.createProduct(req.body);

    return res.json({
        message : 'Successfully created the products',
        success : true,
        code : 200,
        data : response
    });    
}

/*
const filterProducts = async(req,res) => {
    const response = await productServiece.productBelongsToCategory(req.query);

    return res.json({
        message : 'Successfully fetched the products belongs to given category',
        success : true,
        code : 200,
        data : response
    }); 
}

*/

module.exports = {
    getAllProducts,
    createProduct,
    //filterProducts
}