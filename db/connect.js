const mongoose = require('mongoose');
// const uri = process.env.MONGODB_URI;

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error.message);
  }
};

module.exports = connectDB;


