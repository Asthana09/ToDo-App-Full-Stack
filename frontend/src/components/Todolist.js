

function Todolist({todos, deleteTodo, toggleTodo}){   //receives data functions 
    return(
       <ul style={{ listStyle: "none", padding:"30px", textAlign: "center" }}>
      
     
           {todos.map((todo)=>(     //loop through each todo
            <li key={todo._id} style={{         //assign unique key      
           display:"flex",
           justifyContent:"space-between",
           alignItems:"center",
           margin:"10px auto",
           border:"1px solid #bcb2b2",
           padding:"10px",
            }}>
                
            <span onClick={()=>toggleTodo(todo._id)}   //clicking text toggle
                style={{
                    flex:1,
                    textAlign:"left",
                    wordWrap:"break-word",
                    width:"400px",
                    textDecoration: todo.completed ? "line-through":"none",
                    
                }}
                >
                    {todo.text}
            
            </span>
            <div>
            <button style={{borderRadius:"10px", height:"35px",width:"80px",
                    borderColor:"#aea7a700", marginLeft:"10px",
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer"}}
                
                //   index is repalced with todo._id
                  onClick={()=> toggleTodo(todo._id)}>Complete
                {/* {todo.completed ? "Undo":"Complete"} */}
               
            </button>
             
            <button style={{borderRadius:"10px", height:"35px",width:"80px",
               borderColor:"#aea7a700", marginLeft:"10px"}}
               //index is repalced with todo._id
            onClick={()=>deleteTodo(todo._id)}>Delete</button>    
            </div>
           </li> 
        ))}
        
       </ul>
    );

}

export default Todolist;