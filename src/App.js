import React, {useState} from 'react';

function App() {
   const [input, setInput] = useState("");
   const [list, setList] = useState([]);

   
   //This function tracks everytime we type on keyboard (event)
   //It updates the our state with the value of this event

   const handleInputChange = (event) =>{ //even is every
      setInput(event.target.value)
      console.log(input)
   }

   //This function is linked to out button, When we click the button a variable is created
   //The variable has an objext that assigns a task(key name) a (property) value which is our input
   //a random number id is also assigned to each task 
   function addTask(){
      if(input){
         const taskToAdd = {
         task : input,
         id : Math.floor(Math.random() * 1000)
      }
      setList([...list, taskToAdd])
      console.log(list)
      setInput("")
      }
      else {
         alert("add task")
      }
      
   }

   const deleteTask = (id) =>{
   // console.log(list)
      const newList = list.filter((task) => task.id !== id)
      setList(newList)
   }

   // function toggleDone(){
   //    const newDone = !done
   //    setDone((newDone))
   // }
   
   const editTask = (id) =>{
      const newInput = list.map((task) => {
         if (task.id === id){
            setInput (task.task)
         }
      })
   }

   //Create toggle function that adds 
   //complete property to our tasks
   const doneTask = (id) => {
      const newList = list.map((task) =>{
         return task.id === id 
            ? {...task, complete : !task.complete} 
            : {...task}
         })
         setList(newList)
      }

   function removeFinished (){
      const finishedList = list.filter((task) =>{
         return !task.complete
      })
      setList(finishedList)
   }

   
   
   return (
   <div id = "main">
      <h1>Todo List</h1>
      <input 
         placeholder="add task" 
         value ={input} type ="text" 
         onChange={handleInputChange}
         id ="inputBox"
      />
      <button onClick = {addTask}>add</button>
      <ul>
         {list.map((task) => (
            <li key = {task.id}
              className = {task.complete ? "todo strike" : "todo"}
            > - {task.task} 
               <span id= "buttons">
                  <button onClick ={() => deleteTask(task.id)}>delete</button>
                  <button onClick={() => editTask(task.id)}>edit</button>
                  <button onClick={() => doneTask(task.id)}>done</button>
               </span>
            </li>
         
         ))}
      
      </ul>
      <button id ="finished" onClick={removeFinished}>remove finished tasks</button>
   </div>
  )
}

export default App
