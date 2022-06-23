const Product = require('../models/index').Product;
const Categories = require('../models/index').Categories;
const {Op} = require('sequelize');



const createFilter = (data) => {
    let filter = {};
    if(data.minPrice && data.maxPrice)
    {
        Object.assign(filter,{[Op.lte] : data.maxPrice});
        Object.assign(filter,{[Op.gte] : data.minPrice});
        console.log(filter);
    }
    else if(data.maxPrice)
    {
        Object.assign(filter,{[Op.lte] : data.maxPrice});
    }
    else if(data.minPrice)
    {
        Object.assign(filter,{[Op.gte] : data.minPrice});
    }
    return filter;
}


const getAllProducts = async(data) =>{
    let products;

    products = await Product.findAll({include : Categories});


    if(!data.categoryId && !data.minPrice && !data.maxPrice)
    {
        products = await Product.findAll({include : Categories});
        return products;
    } 
    
    if(!data.categoryId)
    {
        let filter = createFilter(data);
        products = await Product.findAll({
            where : {
                cost : filter
            }
        });
        return products;
    }
    let filter = createFilter(data);
    products = await Product.findAll({
        where : {
            cost : filter,
            categoryId : data.categoryId
        }
    });
    return products
}


const createProduct = async (data) => {
    const response = await Product.create({
        name : data.name,
        description : data.description,
        cost : data.cost,
        categoryId : data.categoryId,
        createdAt : new Date(),
        UpdatedAt : new Date()
    });

    return response;
}

/*
const filterProducts = async (data) => {
    const response = await Product.findAll({
        where : {
            categoryId : data.categoryId 
        }
    });

    return response;
}

*/

module.exports = {
    getAllProducts,
    createProduct,
    //filterProducts
}