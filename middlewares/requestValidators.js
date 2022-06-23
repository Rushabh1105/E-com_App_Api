const validateCategoryCreationRequest = (req,res,next) => {
    if( ! req.body.name ){
        return res.json({
            success : false,
            code : 400,
            message : 'Category Name is not Present'
        });
    }
    next();
}

const validateProductCreationRequest = (req,res,next) => {
    if(!req.body.name || !req.body.cost || !req.body.categoryId){
        return res.json({
            code : 400,
            success : false,
            message : 'Missing Argument'
        });
    }
    next();
}



module.exports = {
    validateCategoryCreationRequest,
    validateProductCreationRequest
}