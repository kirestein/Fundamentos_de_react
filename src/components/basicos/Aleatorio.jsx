import { useState } from "react";
import './Basicos.css'

export const Aleatorio = () => {
  // let [min = 0, setMin] = this.state;
  // let [max = 100, setMax] = this.state;

  // const alterandoMin = (e) => {
  //   setMin = e.target.value;
  // }

  // const alterandoMax = (e) => {
  //   setMax = e.target.value;
  // }

  let [min, setMin] = useState(0) 
  let [max, setMax] = useState(100)
  let [num, setNum] = useState(0)
  const handleChangeMin = e => setMin(Math.floor(e.target.value))
  const handleChangeMax = e => setMax(Math.floor(e.target.value))
  const handleClick = _ => setNum(Math.floor((Math.random() * (max - min + 1)) + min ))
  
  return (
    <div className="Aleatorio">
      <h2>Valor Aleatório</h2>
      <h2> { num } </h2>
      <div>
        <div>min = { min } e max = { max }</div>
        <input 
        type='number'
        onChange={handleChangeMin}
        name='min'
        id="min"
        placeholder="min"
        
        /> 
        <input 
        type="number"
        onChange={handleChangeMax}
        name='max'
        id="max"
        placeholder="max"
        
        />
      </div>
      <button onClick={handleClick}>Sortear</button>
    </div>
  )
}