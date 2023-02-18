import Tasks from './components/Tasks'
import {useState,useEffect} from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask,setShowAddTask]= useState(true)
  const [tasks, setTasks]=useState([])
useEffect(()=>{
const getTasks = async()=>{
  const tasksFromServer = await fetchTasks()
  setTasks(tasksFromServer)
}
  getTasks()
},[])

const fetchTasks = async()=>{
  const res= await fetch(`https://TM-json-server.onrender.com/Tasks`)
  const data = await res.json()
  return data
}
const fetchTask = async(id)=>{
  const res= await fetch(`https://TM-json-server.onrender.com/Tasks/${id}`)
  const data = await res.json()
  return data
}


const addTask =async (task)=>{
const res = await fetch('https://TM-json-server.onrender.com/Tasks',
{
  method:'POST',
  headers:{
    'Content-type':'application/json'
  },body:JSON.stringify(task),
})
const data =  await res.json()
setTasks([...tasks,data])

  // const id= Math.floor(Math.random()*10000)+1
// const newtask = {id,...task}
// setTasks([...tasks,newtask])

}



const deleteTask =async(id)=> {
  await fetch(`https://TM-json-server.onrender.com/Tasks/${id}`,
  {method:'DELETE'
})
setTasks(tasks.filter((task) =>task.id !==id
))
}

const toggleReminder =async (id) =>{
const taskToToggle= await fetchTask(id)
const updTask = {...taskToToggle,reminder:!taskToToggle.reminder}
const res=await fetch(`https://TM-json-server.onrender.com/Tasks/${id}`,{
  method:'PUT',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(updTask)
})

const data =await res.json()

setTasks(tasks.map((task)=>task.id===id
  ? {...task,reminder:data.reminder}:task))
}

  return (
    <div className="container">
     <Header onAdd={()=>setShowAddTask(!showAddTask)}  showAdd={showAddTask }/>

     {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length> 0 ? <Tasks tasks={tasks} 
     onDelete={deleteTask}
     onToggle={toggleReminder}
      /> : 'no tasks'}

    </div>
  )
}

export default App;
