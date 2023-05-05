const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      match: [
         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
         "Please provide a valid email"
      ]
   },
   firstName: {
      type: String,
      required: [true, "Please provide a first name"]
   },
   lastName: {
      type: String,
      required: [true, "Please provide a last name"]
   },
   biography: {
      type: String,
      required: [true, "Please provide a biography"]
   },
});

module.exports = mongoose.model('Author', authorSchema);