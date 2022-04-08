import { useState } from "react"
import './Mega.css'

export const Mega = props => {

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce(nums => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums)
        return [...nums, novoNumero]
      }, [])
      .sort((n1, n2) => n2 - n1)

    return numeros

  }

  function gerarNumeroNaoContido(min, max, arr) {
    const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    return arr.includes(aleatorio) ?
      gerarNumeroNaoContido(min, max, arr) :
      aleatorio
  }
  const [qtde, setQtde] = useState(props.qtde || 6)
  const numerosIniciais = Array(qtde).fill(0)
  const [numeros, setNumeros] = useState(numerosIniciais)

  return (
    <div className="Mega" >
      <h2>Mega</h2>
      <h3>{numeros.join(' ')}</h3>
      <div>
        <label htmlFor="">Qtde de Números: </label>
        <input
          type="number"
          value={qtde}
          onChange={e => setQtde(e.target.value)}
        />
      </div>
      <button
        onClick={_ => setNumeros(gerarNumeros(qtde))} >
          Gerar Números
      </button>
    </div>
  )

}