import {useState} from 'react'

export default function ToDoList() {
    const [task,setTask] = useState([])
    const [newTask,setNewTask] = useState("")
    function handleInputChange(e){
setNewTask(e.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t,newTask])
            setNewTask("")
        }
    }
    function deleteTask(index){
        const updatedTasks = task.filter((_,i) =>i !== index)
        setTask(updatedTasks)
    }
    function moveTaskUp(index){
        if(index > 0){
            const updateTasks = [...task];
            [updateTasks[index],updateTasks[index - 1]] = [updateTasks[index - 1],updateTasks[index]];
            setTask(updateTasks)
        }
    }
    function moveTaskDown(index){
        if(index < task.length){
            const updateTasks = [...task];
            [updateTasks[index],updateTasks[index + 1]] = [updateTasks[index + 1],updateTasks[index]];
            setTask(updateTasks)
        }
    }
  return (
   <div className="to-do-list">
    <h1>To-do-List</h1>
    <div>
        <input type="text"  placeholder='enter a task'value={newTask} onChange={handleInputChange}/>
        <button className='add-button' onClick={addTask}>
            add
        </button>
    </div>
    <ol>
        {task.map((tas,i)=>
    <li key={i}>
        <span className='text'>{tas}</span>
        <button className='delete-button' onClick={()=>deleteTask(i)}>
            delete
        </button>
        <button className='move-button' onClick={()=>moveTaskUp(i)}>
            up
        </button>
        <button className='down-button' onClick={()=>moveTaskDown(i)}>
            down
        </button>
    </li>
    )}
    </ol>
   </div>
  )
}
