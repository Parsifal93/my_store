require('dotenv').config();

const produstsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData  = async () => {
    try{
        await Product.deleteMany({});

        await Product.insertMany(produstsData);

        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.error("Error whih data import");
        process.exit(1);
    }
};
importData();
//produstsData();
//Product();