const CartServiece = require('../servieces/cart.serviece');

const addProductToCart = async (req,res) => {
    let cart = await CartServiece.getCartByUser(req.body.userId,'creation');

    if(!cart){
        cart = await CartServiece.createCart(req.body.userId);
    }

    const response = await CartServiece.addProductToCart({
        productId : req.body.productId,
        cartId : cart.id
    });

    if(!response){
        return res.json({
            code : 500,
            success : false,
            message : 'Cannot Add Product to cart'
        });
    }

    return res.json({
        code : 200,
        success : true,
        message : 'Added Product to cart',
        data : response
    })
}

const removeProductFromCart = async (req,res) => {
    let cart = await CartServiece.getCartByUser(req.body.userId,'creation');

    if(!cart){
        return res.json({
            code : 500,
            success : false,
            message : 'Empty Cart'
        });
    }

    const response = await CartServiece.removeProductFromCart({
        productId : req.body.productId,
        cartId : cart.id
    });

    if(!response){
        return res.json({
            code : 500,
            success : false,
            message : 'Cannot remove Product from cart'
        });
    }

    return res.json({
        code : 200,
        success : true,
        message : 'Removed Product from cart',
        data : response
    })
}

const updateCartStatus = async (req, res) => {
    const response = await CartServiece.updateCartStatus(req.body.cartId, req.body.status);
    return res.json({
        code: 201,
        message: 'Successfully updated cart status',
        data: response,
        success: true
    })
}

module.exports = {
    addProductToCart,
    removeProductFromCart,
    updateCartStatus
}