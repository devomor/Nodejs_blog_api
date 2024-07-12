const mongoose = require("mongoose");

const connectDB = async() => {
	try {
		await mongoose.connect(process.env.DATABASE_URL);
		console.log('Database connection success!');

	} catch (error) {
		console.log("database connection fail");
	}
}
module.exports = connectDB;