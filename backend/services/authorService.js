const Author = require('../models/author')

const author = async(req, res, next) => {
      const {email, firstName, lastName, biography} = req.body;
      const author = await Author.create({
         email,
         firstName,
         lastName,
         biography,
      })
      
      res.status(201).json({
         success: true,
         data: author
      })
};

const getAuthors = async(req, res, next) => {
   const authors = await Author.find({}, '-__v');
   res.status(200).json({
      success: true,
      data: authors
   })
}

module.exports = {
   author, getAuthors
};