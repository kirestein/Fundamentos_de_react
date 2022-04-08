import { alunos } from '../../data/alunos'

export const ListaAlunos = _ => {
  
  const lis = alunos.map((aluno) => {
    return <li style={{ listStylePosition: 'inside' }} key={ aluno.id }>  Nome: { aluno.nome }, Nota: { aluno.nota } </li>
  })
  return (
    <div>
      <ol>
        { lis }
      </ol>
    </div>
  )
}