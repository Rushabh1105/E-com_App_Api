const User = require('../models/index').User;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const response = require('express');
const Roles = require('../models/index').Role;


const signup = async(data) => {
    const user = await User.create({
        email : data.email,
        passward : data.passward
    });

    const customerRole = await Roles.findOne({
        where : {
            name : 'customer'
        }
    });

    user.addRole(customerRole);

    return user;
}

const getUser = async(userEmai) => {
    const user = await User.findOne({
        where : {
            email : userEmai
        }
    });
    return user;
}

const getUserById = async(userId) => {
    const user = await User.findOne({
        where : {
            id : userId
        }
    });

    return user;
}

const checkPassward = async(userPassward,encryptedPassward) => {
    console.log(bcrypt.compareSync(userPassward, encryptedPassward));
    return bcrypt.compareSync(userPassward, encryptedPassward);
}

const createTocken = (user) => {
    return jwt.sign({id : user.id,email: user.email},'relevel');
}

const verifyToken = (token) => {
    try{
        const response = jwt.verify(token,'relevel');
        return response
    } catch(err) {
        console.log('Invalid Token')
    }
}

const addRoleToUser = async (userId,roleId) => {
    try{
        const user = await User.findOne({
            where : {
                id : userId
            }
        });
        const role = await Roles.findOne({
            where : {
                id : roleId
            }
        });
    
        user.addRole(role);
    
        return user;
    } catch(err){
        console.log("Something Went Wrong");
        console.log(err);
    }
}

const removeRoleFromUser = async(userId,roleId) => {
    try{
        const user = await User.findOne({
            where : {
                id : userId
            }
        });
        const role = await Roles.findOne({
            where : {
                id : roleId
            }
        });
    
        user.removeRole(role);
    
        return user;
    } catch(err){
        console.log("Something Went Wrong");
        console.log(err);
    }
}

const getRolesFromUser = async (userId) => {
    try{
        const user = await User.findOne({
            where : {
                id : userId
            }
        });
        const response = await user.getRoles();
        return response;
    } catch(err){
        console.log(err)
    }
}
module.exports = {
    signup,
    getUser,
    checkPassward,
    createTocken,
    verifyToken,
    getUserById,
    addRoleToUser,
    removeRoleFromUser,
    getRolesFromUser 
}