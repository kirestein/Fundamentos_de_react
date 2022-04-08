export const IndFilho = props => {
  return(
    <div>
      <div>Filho 2</div>
      <button 
      onClick={
        _ => props.onClick('Erik', 37, true)
      }>
        Fornecer Informações
      </button>
    </div>
  )
}