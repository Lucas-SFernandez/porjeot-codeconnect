import { useEffect, useState } from 'react'
import './App.css'
import BarraDePesquisa from './assets/componentes/BarraDePesquisa'
import Card from './assets/componentes/Card'
import Filtro from './assets/componentes/Filtro'
import Ordenacao from './assets/componentes/Ordenacao'
import Sidebar from './assets/componentes/Sidebar'


function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/Lucas-SFernandez/d6eb688ed35ba5168d61438996533d18/raw/b615a197842d8642a5d8fbb22f73f06dfd120780/gistfile1.txt')
    .then(resp => resp.json())
    .then(dados => setDados(dados))
  }, [])
    
  return (
    <div className='container'>
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <ul className='lista-cards'>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card id={item.id} imagemUrl={item.imagem_capa} titulo={item.titulo} resumo={item.resumo} linhasDeCodigo={item.linhas_de_codigo} compartilhamentos={item.compartilhamentos} comentarios={item.comentarios} usuario={item.usuario} />
            </li>
          )) : null}
        </ul>
      </div>
    </div>
  )
}

export default App