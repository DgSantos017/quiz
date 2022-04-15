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

    console.log(indice)
    setQuestao(questao.responderCom(indice))
    
  }

  return (
    <Container>
      <Questao valor={questao} respostaFornecida={respostaFornecida} /> 
    </Container>
      
  )
}

export default Home
