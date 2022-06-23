const Auth = require('../servieces/auth.serviece');
const bcrypt = require('bcryptjs');

const signup = async(req,res) => {
    const response = await Auth.signup(req.body);

    return res.json({
        message : 'Successfully created an user',
        success : true,
        code : 200,
        data : response
    });
}

const signin = async(req,res) => {
    const user = await Auth.getUser(req.body.email);
    if(!user){
        console.log("User not found");
        console.log(user)
        return res.json({
            message : 'Email is invalid',
            success : false,
            code : 404
        });
    }

    if(!Auth.checkPassward(req.body.passward,user.passward)){
        console.log("Incorrect Passward");
        return res.json({
            message : 'Incorrect passward',
            success : false,
            code : 404
        });
    }

    const token = Auth.createTocken(user);

    return res.json({
        message : 'signin successfull',
        success : true,
        code : 200,
        data : token
    })
}

const updateUser = async (req,res) => {
    let user;
    console.log(typeof(req.query.addRole))
    if( req.query.addRole == 'true' ){
        user = await Auth.addRoleToUser(req.params.userId,req.body.roleId);
    } 
    else{
        user = await Auth.removeRoleFromUser(req.params.userId,req.body.roleId);
    }

    if(!user){
        return res.json({
            success : false,
            code : 500,
            message : 'Server Error'
        });
    }
    return res.json({
        success : true,
        message : 'Updated the user',
        code : 200
    });
}

const getRolesFromUser = async (req,res) => {
    const response = await Auth.getRolesFromUser(req.params.userId);

    return res.json({
        success : true,
        message : 'Got the User',
        code : 200,
        data : response
    });
}
module.exports = {
    signup,
    signin,
    updateUser,
    getRolesFromUser
}