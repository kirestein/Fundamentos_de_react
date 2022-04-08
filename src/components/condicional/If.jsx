export const If = props => {
  const elseChild = props.children.filter(child => {
    return child.type && child.type.name === 'Else'
  })[0]

  const ifChildren = props.children.filter(child => {
    return child !== elseChild
  })
  if (props.test) {
    return ifChildren
  } else if(elseChild) {
    return elseChild
  }else return false
}

export const Else = props => props.children 

/**
 * A proposta é criar um componente com uma props text e nesta propriedade teremos uma expressão. Se a expressão for verdadeira a props será exibida caso contrário, nada será exibido.
 */