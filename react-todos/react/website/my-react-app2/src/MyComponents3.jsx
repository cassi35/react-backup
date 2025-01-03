import {useState} from 'react'

export default function MyComponents3() {
    const [cars,setCars] = useState([])
    const [carYear,setCarYear] = useState(new Date().getFullYear())
    const [carMake,setCarMake] = useState("")
    const [carModel,setCarModel] = useState("")
function AddCar(){
const newCar = {year:carYear,make:carMake,model:carModel}
setCars(c => [...c,newCar])
}
function RemoveCar(index){
setCars(c => c.filter((_,i)=> i !== index))
}
function YearChange(e){
    setCarModel(e.target.value)
}
function MakeChange(e){
    setCarMake(e.target.value)
    
}
function ModelChange(e){
    setCarModel(e.target.value)
}
  return (
   <>
   <div>
    <h2>lsit of car objects</h2>
    <ul>
 {cars.map((car,index)=> <li onClick={RemoveCar(index)} key={index} >{car.make} {car.model} {car.year}</li>)}
    </ul>
    <input type="number" name="" id="" value={carYear} onChange={YearChange}/><br />
    <input type="text" name="" id="" value={carMake} onChange={MakeChange} placeholder='enter car make' /><br />
    <input type="text" name="" id="" value={carModel} onChange={ModelChange} placeholder='enter with model'/><br />
   <button onClick={AddCar}>add car</button>
   </div>
   </>
  )
}
