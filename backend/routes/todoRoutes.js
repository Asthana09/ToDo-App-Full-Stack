import express from "express";
import Todo from "../models/Todo.js";

//MINI server---- will receive req form server.js
const router = express.Router();//create a small router to handle routes separately




//***********Create API**************/
//###### Create(post) TODO   
router.post("/", async (req, res)=>{
    try {
      // take text from frontend and create a new todo object using it
    const newTodo = new Todo({             
      text: req.body.text             //comes from backend
    });

    //send data to mongodb and save the value                 //await -> wait until the data is saved
    const savedTodo = await newTodo.save();//newTodo.save() -> store this todo in database
    
    //backend -> frontend response in json format
    res.json(savedTodo);
  } catch (err) {
    res.status(500).json(err);
  }
});


//***********Get API**************/
//
router.get("/", async (req, res)=>{
  const todos = await Todo.find();  //will wait untill complete data comes form DB
  res.json(todos);
});


//***********Delete API**************/
//
router.delete("/:id",async(req, res)=>{ 
  await Todo.findByIdAndDelete(req.params.id)//req.params.id -> Get id from URL
  res.json({message: "Deleted"}); //send confirmation to frontend- deleted
});
//  router.delete("/:id", async (req, res) => {
//   if (!req.params.id || req.params.id === "undefined") {
//     return res.status(400).json({ message: "Invalid ID" });
//   }


//***********Togggle Completed**************/
// UPDATE request
router.put("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  todo.completed = !todo.completed;

  const updated = await todo.save();

  res.json(updated);
});


export default router;

