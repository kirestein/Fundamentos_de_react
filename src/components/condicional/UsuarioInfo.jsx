import { If, Else } from "./If"

export const UsuarioInfo = props => {
  const usuario = props.usuario
  return (
    <div>
      {/* <If test={usuario && usuario.nome} >
        Seja bem vindo <strong> { usuario.nome } </strong>
      </If>
      <If test={!usuario || !usuario.nome} >
        Seja bem vindo <strong> usuário anonimo </strong>
      </If> */}
      <If test={usuario && usuario.nome} >
        Seja bem vindo <strong> { usuario.nome } </strong>! <br />
        <Else>
          Seja bem vindo <strong> usuário anonimo </strong>!
        </Else>
      </If>
    </div>
  )
}