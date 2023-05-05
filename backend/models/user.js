const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userSchema = new schema({
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
   password: {
      type: String,
      minlength: [6, "Please provide a password with min length 6"],
      required: [true, "Please provide a password"],
      select: true
   },
});

module.exports = mongoose.model('User', userSchema);