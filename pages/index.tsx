import Questao from '../components/Questao'
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
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
      /> 
    </Container>
      
  )
}

export default Home
