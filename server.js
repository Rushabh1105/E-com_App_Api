const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/server_config');
const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const cartRoutes = require('./routes/cart.routes');

//==============================================================

const Product = require('./models/index').Product;
const Categories = require('./models/index').Categories;
const Users = require('./models/index').User;
const Roles = require('./models/index').Role;
const db = require('./models/index');

//==============================================================

const app = express();
//==============================================================
//Use this below code as it is...

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

//=============================================================
categoryRoutes(app);
productRoutes(app);
authRoutes(app);
cartRoutes(app);


app.get('/home', async function(req,res){

    const getCategories = await Categories.findAll({
        include : Product
    });


    res.json(getCategories);
    
});


app.listen( config.PORT,async () => {
    console.log('server started on port ', config.PORT );

/*
    const newProduct = await Product.create({
        name : 'Ipad',
        cost : 100000,
        description : 'Apple Product',
        categoryId : 1
    });

    console.log("Product created successfully ");

    
    console.log(getProducts);



//await db.sequelize.sync({force : true});

// This is dummy code for mapping of users and roles

const user = await Users.create({
    email : 'e@f.com',
    passward : '222222'
});

const adminRole = await Roles.findOne({
    where : {
        id : 1
    }
});

user.addRole(adminRole,{through: {selfGranted : false }});

const result = await Users.findAll({
    include : Roles,
    raw : true,
    nest : true
});

console.log(result);

*/

});