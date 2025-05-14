import { useState } from 'react'




function App() {
  const [numero, setNumero] = useState(100)
  const [texto, setTexto] = useState("")
  const [botao, setBotao] = useState("ADICIONAR")
  const [adicionouNome, setAdicionouNome] = useState(false)

  function handleAumentar (){
    setNumero(numero+100)
  }

  function handleAdicionarTexto () {
    if(adicionouNome === false) {
      setAdicionouNome(true)
      setTexto("")
      setBotao("ADICIONAR")
      return
    }

    setAdicionouNome(false)
    setTexto('texto')
    setBotao("REMOVER")
  }

  return (
    <main>
      <section>
        <p>O número da variável é: {numero}</p>

        <button onClick={handleAumentar}> Aumentar 100 </button>
      </section>
      <section>
        <p>{texto}</p>
        <button onClick={handleAdicionarTexto}> {botao} TEXTO</button>
      </section>
    </main>
  )
}

export default App 