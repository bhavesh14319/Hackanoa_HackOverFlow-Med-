//Third party package
const jwt = require('jsonwebtoken');

const Is_Auth_Middleware = async (req, res, next) => {
    
    const inputToken = req.header('Authorization');
       
    if (!inputToken) {
        const error = new Error('Token is not available');
        error.statusCode = 422;
        return next( error );
    
    }
    
    const token = inputToken.split(' ')[1];
    
    jwt.verify(token, process.env.JWT_SECRET, (error, result) => {
    
        if( error ) {
            const env = process.env.NODE_ENV
            const customError = {
                //Meant for app or web developer
                text: 'You are not a vaild user.',
                timestamp: new Date(),
                
                //Methods
                method: req.method,

                //Endpoint
                endpoints: `${req.protocol}://${req.headers.host}${req.url}`,
                statusCode: 401,
                errors: [
                    {
                        text: env === 'development' ? error.message : 'Unautorized',
                        hints: ['Check you are passing valid token', 'Check you have account and do have valid token']
                    }
                ]
            }

            return next( customError );
            
        }//End of jwt.verify method

               
        req.userID        = result.userID;
        req.mobileNumber = result.mobileNumber;
        next();
               
    });//End of Jwt method
    
       
};//End of function
    
    
module.exports = Is_Auth_Middleware;