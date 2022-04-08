export const Display = props => {
  return(
    <div className="Generator" >
      <h2>Os números sorteados são: </h2> <br />
      <h3>{ props.saida  }</h3>
    </div>
  )
}