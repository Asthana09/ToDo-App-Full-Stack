
function TodoInput({text, setText, addTodo}){          //receiving prop from App
    return(
    <div style={{textAlign:"center"}}>

      <input 
      value={text}     //value always comes from state
      onChange={(e)=>setText(e.target.value)}  // run whenever there is a change in input or whenever the user will type here
      placeholder="Enter Your Task"
      style={{marginTop:"50px", height:"40px", width:"300px",borderColor:"white",
         borderRadius:"10px", backgroundColor:"whitesmoke"}} 
      /><br/>
      <button style={{borderRadius:"10px", height:"35px",width:"80px",borderColor:"white", marginTop:"15px" }}
      onClick={addTodo}>Add Task</button>
    </div>
    );
}
export default TodoInput;