const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');
const dotenv = require("dotenv");
const authRoute = require('./routes/auth/auth_route');
const userRoute = require('./routes/user/user_route');
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
//auth route
app.use('/api/auth', authRoute);
//user route
app.use('/api/users', userRoute);
app.listen(PORT, () => {
	console.log(`server is running at ${PORT}`);
	connectDB();
});

//sgaMExTcL7PePBSm
//mongodb+srv://mohammadomar01312:sgaMExTcL7PePBSm@cluster0.3bwwfdr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0