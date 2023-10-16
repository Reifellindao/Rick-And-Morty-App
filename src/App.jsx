import { useState, useEffect } from 'react'
import LiPersonagens from './componetns/LiPernsonagens';
import axios from 'axios';
import InfoPersonagem from './componetns/InfoPersonagem';
import './App.css'

const API = 'https://rickandmortyapi.com/api/character'

function App() {
  const [personagem, setPersonagem] = useState([])
  const [nome, setNome] = useState('');
  const [personagemSelect, setPerosnagemSelect] = useState(null)
  const [status, setStatus] = useState('alive')


  const buscarPersonagem = () => {
    axios.get(API).then(({ data }) => {
      setPersonagem(data.results)
    }, err => {
      console.log("personagem nao encontrado")
    })
  }

  const pesquisarName = () => {
    axios.get(`${API}/?name=${nome}&status=${status}`).then(({ data }) => {
      setPersonagem(data.results)
    }, err => {
      console.log("personagem nao encontrado")
    })
  }

  const idSelecionado = (IdPersonagem) => {
    let id = IdPersonagem
    pesquisarId(id)

  }

  const pesquisarId = (id) => {
    axios.get(`${API}/${id}`).then(({ data }) => {
      setPerosnagemSelect(data)
    }, err => {
      console.log("personagem nao encontrado")
    })
  }

  useEffect(() => {
    buscarPersonagem()
  }, [])



  return (
    <>
    <div className='logoApp'>
      <h1 className='logoText'>Rick and Morty App</h1>
    </div>
    <div className='containerHome'>
      <div className='pesquisaPersonagem'>
        <h1 className='listaPersonagemHome'>Lista de Personagem</h1>
        <div className='inputSearch'>
          <input
            type="text"
            onChange={e => (setNome(e.target.value))}
            value={nome}
          />

          <button onClick={pesquisarName} className='botaoSearch'>Pesquisar</button>

          <select className='select' value={status} onChange={(event)=>setStatus(event.target.value) }>
            <option value="alive">Alive</option>
            <option value="unknow">Unknow</option>
            <option value="dead">Dead</option>
          </select>

          
        </div>
        <div>
          <LiPersonagens
            data={personagem}
            selecionarId={idSelecionado}
          />
        </div>
      </div>
      <div className='infoPersonagem' >
        <InfoPersonagem
          data={personagemSelect}
        />
      </div>
    </div>
    </>
  )
}

export default App
