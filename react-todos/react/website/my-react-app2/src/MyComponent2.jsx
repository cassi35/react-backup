import {useState} from 'react'

export default function MyComponent2() {
  const [foods,setFoods] = useState(['apple','orange','banana'])
  function handleAddFood(){
setFoods()
const newFood = document.getElementById('foodInput').value
setFoods([...foods,newFood])
  }
  function handleremoveFood(index){
setFoods(foods.filter((_,i)=>i !== index))
  }

    return (
    <>
    <div>
        <h2>list of food</h2>
        <ul>
            {foods.map((food,index) => (<li onClick={() => handleremoveFood(index)} key={index}>{food}</li>))}
        </ul>
        <input type="text" name="" id="foodInput" placeholder='enter food name'/>
        <button onClick={handleAddFood}>Add food</button>
    </div>
    </>
  )
}
