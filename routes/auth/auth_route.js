const { signUp,logIn } = require('../../controllers/auth/auth_controller');

const authRoute = require('express').Router();
//signup router
authRoute.post("/signup", signUp);
authRoute.post("/login", logIn);
module.exports = authRoute;