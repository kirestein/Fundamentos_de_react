export const Filho = props => {
  return (
    <div>
      <span><strong>Nome</strong>: {props.name}, </span>
      <span><strong>Idade</strong>: {props.age}, </span>
      <span><strong>É nerd</strong>: {props.nerd ? 'Verdadeiro' : 'Falso'} </span>
    </div>
  )
}