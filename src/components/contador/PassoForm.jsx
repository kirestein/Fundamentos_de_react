export const PassoForm = props => {
  return (
    <div>
      passo = { props.passada } <br />
      <input 
      type='text'
      onChange={ props.onchange }
      placeholder='passo'
      />
    </div>
  )
}