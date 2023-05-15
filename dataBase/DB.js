const mongoose = require('mongoose');
const connectDB = async (url) => {
    try {
      await mongoose.connect(url)
  
      console.log('MongoDB connected!!')
    } catch (err) {
      console.log('Failed to connect to MongoDB', err)
    }
  }
module.exports={connectDB};