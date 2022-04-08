import { useState } from "react"
import './Input.css'

export const Input = props => {
  let [valor, setValor] = useState('Inicial')

  const handleChange = e => setValor(e.target.value)
  
  return(
    <div className="Input">
      <div> { valor } </div>
      <div>
        <input 
        onChange={handleChange}
        value={valor} 
        />
      </div>
    </div>
  )
}