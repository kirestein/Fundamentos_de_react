import { useState } from "react"
import { IndFilho } from "./Filho"

export const IndPai = _ => {
  //nome, idade e nerd pai
  let [name, setName] = useState('')
  let [age, setAge] = useState(0)
  let [isNerd, setIsNerd] = useState(false)
  function handleClick(name, age, isNerd) {
    setName(name)
    setAge(age)
    setIsNerd(isNerd)
  }
  return(
    <div>
      <div>
        <span><strong>Nome</strong> { name }, </span>
        <span><strong>Idade</strong> { age }, </span>
        <span><strong>É nerd</strong> { isNerd ? 'Verdadeiro' : 'Falso' } </span>
      </div>
      <IndFilho onClick={handleClick} />
    </div>
  )
}