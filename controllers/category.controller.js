
const { response } = require('express');
const categoryServiece = require('../servieces/category.Serviece')

const getAllCategories = async (req,res) =>{
    const response = await categoryServiece.getAllCategories();
    return res.json({
        message : 'Successfully fetched the category',
        success : true,
        code : 200,
        data : response
    });
}


const createCategory = async (req,res) =>{
    const response = await categoryServiece.createCategory(req.body);

    return res.json({
        message : 'Successfully Created the category',
        success : true,
        code : 201,
        data : response
    });
}

const deleteCategory = async( req,res ) =>{
    await categoryServiece.deleteCategory(req.params.id);

    return res.json({
        message : 'Successfully Deleted the category',
        success : true,
        code : 200,
    });

}

const getCategory = async (req,res) => {
    const response = await categoryServiece.getCategory(req.params.id);

    return res.json({
        message : 'Successfully Fetched the required category',
        success : true,
        code : 200,
        data : response
    });
}

const getCategoryByName = async (req,res) => {
    const response = await categoryServiece.getCategoryByName(req.query.name);

    return res.json({
        message : 'Successfully Fetched the required category by name',
        success : true,
        code : 200,
        data : response
    });
}


const updateCategory = async(req,res)=>{
    const response = await categoryServiece.updateCategory(req.params.id, req.body);

    return res.json({
        message : 'Successfully updated the required category',
        success : true,
        code : 200,
        data : response
    });
}
module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory,
    getCategory,
    getCategoryByName,
    updateCategory
}