const AuthServiece = require('../servieces/auth.serviece');

const isAuthenticated = async (req,res,next) => {
    let token = req.headers["x-access-token"];

    if(!token){
        return res.json({
            code : 401,
            seccess : false,
            message : 'Invalide token details'
        });
    }

    const response = AuthServiece.verifyToken(token);

    if(!response){
        return res.json({
            code : 401,
            seccess : false,
            message : 'Invalide Login details'
        });
    }

    try{
        console.log(response);
        const user = await AuthServiece.getUserById(response.id);
        req.user = user.id;
        console.log(user)
        next();
    }  catch(ree){
        return res.json({
            code : 401,
            seccess : false,
            message : 'user not found'
        });
    }
}

module.exports = {
    isAuthenticated
}