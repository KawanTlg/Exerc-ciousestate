import { useState } from 'react'




function App() {
  const [numero, setNumero] = useState(100)
  const [texto, setTexto] = useState("")
  const [adicionouNome, setAdicionouNome] = useState(false)

  function handleAumentar (){
    setNumero(numero+100)
  }

  function handleAdicionarTexto () {
    if(adicionouNome === false) {
      setAdicionouNome(true)
      setTexto("")
      return
    }

    setAdicionouNome(false)
    setTexto('texto')
  }

  return (
    <main>
      <section>
        <p>O número da variável é: {numero}</p>

        <button onClick={handleAumentar}> Aumentar 100 </button>
      </section>
      <section>
        <p>{texto}</p>
        <button onClick={handleAdicionarTexto}>ADICIONAR / REMOVER TEXTO</button>
      </section>
    </main>
  )
}

export default App 