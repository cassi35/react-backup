import {useState} from 'react'

export default function MyComponets() {
    const [name,setName] = useState('cassiano')

    const updateName = () => {
        setName('pedro')
    }
    const [nome,setNome] = useState("")
    function handleNameChange(e)
    {
      setNome(e.target.value)
    }
    const [color,setColor] = useState('#ffffff')
    function handleColorChange(e){
      setColor(e.target.value)
    }
    var carro = {ano:2024,marca:'ford',modelo:'fiat'}
    const [car,setCar] = useState(carro)
    function handleYearChange(e){
      setCar({ano:e.target.value})
    }
    function handleMakeChange(e){
      setCar({marca:e.target.value})
    }
    function handleModelChange(e){
      setCar({modelo:e.target.value})
    }
  return (
    <div>
        <p>name :{name}</p>
        <button onClick={updateName}>set name</button>
        <div>
          <input placeholder='digite nome' type="text" value={nome} onChange={handleNameChange}/>
          <p>name:{nome}</p>
        </div>
        <div>
          <h1>color picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
          <p>select color:{color}</p>
          <label htmlFor="">select a color:{color}</label>
          <input type="color" name="" id=""  value={color} onChange={handleColorChange}/>
        </div>
        <div className="carro">
          <p>seu carro preferido é {car.modelo} com a marca {car.marca} com ano {car.ano}</p>
          <input type="number" name="" id=""  value={car.ano} onChange={handleYearChange}/>
          <input type="text" name="" id="" value={car.modelo} onChange={handleModelChange}/>
          <input type="text" name="" id="" value={car.marca} onChange={handleMakeChange}/>
        </div>
        </div>
    </div>
  )
}
