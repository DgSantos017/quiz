import Questao from '../components/Questao'
import Botao from '../components/Botao'
import QuestionModel from '../model/question'
import RespostaModel from '../model/resposta'
import { Container } from './style'
import { useState } from 'react'

const questaoMock = new QuestionModel(1, 'Cor ? ', [
  RespostaModel.respostaErrada('verde'),
  RespostaModel.respostaErrada('azul'),
  RespostaModel.respostaErrada('preto'),
  RespostaModel.respostaErrada('branco'),
  RespostaModel.respostaCerta('vermelho')
])

const Home = () => {

  const [ questao, setQuestao ] = useState(questaoMock)

  const respostaFornecida = (indice: number) => {
    setQuestao(questao.responderCom(indice)) 
  }

  const tempoEsgotado = () => {
    if(questao.naoRespondida){
      setQuestao(questao.responderCom(-1)) 
    }
  }

  return (
    <Container>
      <Questao 
        valor={questao}
        tempoPraResposta={12}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
      /> 
      <Botao texto=' Próximo ' />
    
    </Container>
      
  )
}

export default Home
