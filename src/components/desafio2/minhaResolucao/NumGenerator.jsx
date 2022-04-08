import { useState } from "react"
import { Button } from "./Button"
import { Display } from "./Display"
import './NumGenerator.css'

export const NumGenerator = _ => {
  //gerar 7 números aleatórios de 1 até 60 de acordo com o parametro que foi passado
  //os números não podem repetir
  
  let arr = []
  let num
  let [saida, setSaida] = useState('Para sortear os números aperte o botão')

  const sortear = _ => {
    setSaida(arr.map((a, b) => <span key={b}>  { a }  </span>))
  }
  for(let i = 0; i <= 7 ; i++) {
    num = Math.floor(Math.random() * (60 - 1 + 1) + 1)
    if (arr.find(e => e === num)) {
      num = Math.floor(Math.random() * (60 - 1 + 1) + 1)
    } else arr.push(num)
  }
  
  


  return(
    <div className="Generator" >
      <Display saida={saida} />
      <Button sortear={sortear} />      
    </div>
  )
}


