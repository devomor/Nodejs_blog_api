const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');
const morgan = require('morgan');
const dotenv = require("dotenv");
const multer = require('multer');
const authRoute = require('./routes/auth/auth_route');
const userRoute = require('./routes/user/user_route');
const postRoute = require('./routes/post/post_route');
const categoryRoute = require('./routes/category/category_route');
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(morgan('dev'));

//file uploadstorage
const uploadStorage = multer.diskStorage({
	destination:(req,file,callBack)=>{
		callBack(null, './image');
	},
	filename: (req, file, callBack) => {
		callBack(null, file.originalname);
	}
});
const upload = multer({ storage: uploadStorage });
//upload rute
app.post('/api/upload', upload.single('file'), (req, res) => {
	console.log(res.file);
	res.send("file upload successfully");
});
//auth route
app.use('/api/auth', authRoute);
//user route
app.use('/api/users', userRoute);
//post route
app.use('/api/posts', postRoute);
//category route
app.use('/api/category', categoryRoute);
app.listen(PORT, () => {
	console.log(`server is running at ${PORT}`);
	connectDB();
});

//sgaMExTcL7PePBSm
//mongodb+srv://mohammadomar01312:sgaMExTcL7PePBSm@cluster0.3bwwfdr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0