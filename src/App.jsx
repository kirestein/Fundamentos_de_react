import React from 'react';
import './App.css'
import { Primeiro } from './components/basicos/Primeiro';
import { ComParam } from './components/basicos/ComParam';
import { Fragments } from './components/basicos/Fragments';
import { Aleatorio } from './components/basicos/Aleatorio';
import { Card } from './components/layout/Card';
import Familia from './components/basicos/Familia';
import { FamiliaMembro } from './components/basicos/FamiliaMembro';
import { ListaAlunos } from './components/repeticao/ListaAlunos';
import { TableProducts } from './components/repeticao/TableProducts';
import { ParOuImpar } from './components/condicional/ParOuImpar';
import { UsuarioInfo } from './components/condicional/UsuarioInfo';
import { Pai } from './components/comunicacao/Direta/Pai';
import { IndPai } from './components/comunicacao/Indireta/Pai';
import { Input } from './components/formulario/Input';
import Contador from './components/contador/Contador';
import { NumGenerator } from './components/desafio2/minhaResolucao/NumGenerator';
import { Mega } from './components/desafio2/resolucaoProfessor/Mega';


export default function App() {

  const tag = <strong>Fundamentos React!!!</strong>

  return (
    <div className="App">
      <h1> {tag} </h1>
      <div className="Cards">
        <Card titulo='#14 - MegaSena(resolução professor)' color='#380864' >
          <Mega />
        </Card>
        <Card titulo='#13 - MegaSena(minha resolução)' color='#380864' >
          <NumGenerator />
        </Card>
        <Card titulo='#12 - Contador' color='#084264' >
          <Contador startNum={10} />
        </Card>
        <Card titulo='#11 - Componente Controlado' color='#640808' >
          <Input />
        </Card>
        <Card titulo='#10 - Comunicação Inireta' color='#806611' >
          <IndPai />
        </Card>
        <Card titulo='#09 - Comunicação Direta' color='#c2e913' >
          <Pai />
        </Card>
        <Card titulo='#08 - Renderização Condicional' color='#1cb6ae' >
          <ParOuImpar
            num={20}
          />
          <UsuarioInfo
            usuario={{
              nome: 'Fernando',
              idade: 35
            }}
          />
          <UsuarioInfo
            usuario={{
              nome: '',
              idade: 35
            }}
          />
        </Card>
        <Card titulo='#07 - Desafio Repetição' color='#006400' >
          <TableProducts />
        </Card>
        <Card titulo='#06 - Repetição' color='#000080' >
          <ListaAlunos ></ListaAlunos>
        </Card>
        <Card titulo='#05 - Componente Com Filhos' color='#FF8C00'>
          <Familia sobrenome='Souza'>
            <FamiliaMembro nome='Pedro' ></FamiliaMembro>
            <FamiliaMembro nome='Geovanna' ></FamiliaMembro>
            <FamiliaMembro nome='Ingrid' ></FamiliaMembro>
          </Familia>
        </Card>
        <Card titulo="#04 - Gerando números aleatórios" color='#080'>
          <Aleatorio />
        </Card>
        <Card titulo="#03 - Fragmentos" color='#836FFF'>
          <Fragments />
        </Card>
        <Card titulo="#02 - Com Parâmetros / props" color='#1E90FF'>
          <ComParam
            titulo="Este é o meu título"
            subTitulo="Este é o meu subtítulo"
          />
        </Card>
        <Card titulo="#01 - Primeiro Componente" color='#008B8B'>
          <Primeiro />
        </Card>
      </div>
    </div>
  )
}
