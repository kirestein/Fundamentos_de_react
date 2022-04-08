export const ParOuImpar = props => {
  const isPar = props.num % 2 === 0
  return (
    <div>
      <span>
        O número {props.num} é: {isPar ? 'Par' : 'Ímpar'}
      </span>
    </div>
  )
}