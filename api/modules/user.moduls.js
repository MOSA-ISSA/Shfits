const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const userSchema = new mongoose.Schema({
  ID:{
    type: String,
    // required: true,
    sparse: true,
    unique: true,
    minlength: 3, // Minimum length of the username
    maxlength: 20, // Maximum length of the username
    trim: true, // Trim leading and trailing whitespaces
    match: /^[a-zA-Z0-9_-]+$/, // Regex pattern for allowed characters
  },
  slug: { type: String, slug: "ID" },
  mail:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, // Convert email to lowercase
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Basic email validation
  },
  password:{
    type:String,
    required:true,
    minLength:8,
    maxLength:20,
  },
  userName:{
    type:String,
    required:true,
    minLength:1,
    maxLength:20,
  },
  createdAt:{
    type:Date,
    immutable:true,
    default:()=> Date.now()
  },
  ShiftsCollocation:{
    // array of Shift
  },
  image: {
    type: String, 
  },
  imageBackground: {
    type: String,
  },
});

const userModule = mongoose.model('Users', userSchema);
// key / refrens / to data bace

module.exports = userModule