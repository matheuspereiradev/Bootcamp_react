import React,{useState,useEffect} from 'react'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import './App.css'
import api from './services/api'

function App() {

  const [projetos,setProjetos] = useState([])
  //no useState fica o valor padrao e ele retorna o valor da variavel e uma duncao pra atualizar

  useEffect(()=>{
    api.get('projetos').then(dados=>{
      setProjetos(dados.data)
    })
  },[])

  async function adcProjeto(){
    //setProjetos([...projetos,`cat ${Date.now()}`])

    const res=await api.post('projetos',{
      nome:`Projeto ${Date.now()}`,
      valor:Math.floor(Math.random() * 10)*142,
    })

    setProjetos([...projetos,res.data])
  }

  return (
    <>
      <Cabecalho titulo="Hello react">
        <ul>
          {projetos.map((projeto,index) => {
            return (<li key={index}>{`${projeto.valor} - ${projeto.nome}`}</li>)
          })}
        </ul>
      </Cabecalho>

      
          <button type="button" onClick={adcProjeto}>Nova</button> 
     

        
     
      <Rodape empresa="Volpi" />
    </>
  )
}

export default App;