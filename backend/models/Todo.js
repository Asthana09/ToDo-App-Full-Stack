
import mongoose from "mongoose"; //helps node.js to talk with mongodb


//each todo will have text-string, completed- boolean 
const todoSchema = new mongoose.Schema({
    text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
},{timestamps:true});


//mongodb will store data in todo collection
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;