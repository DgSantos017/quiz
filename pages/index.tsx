import QuestionModel from '../model/question'
import RespostaModel from '../model/resposta'
import { Container } from './style'
import { useState } from 'react'
import Questionario from '../components/Questionario'

const questaoMock = new QuestionModel(1, 'Cor ? ', [
  RespostaModel.respostaErrada('verde'),
  RespostaModel.respostaErrada('azul'),
  RespostaModel.respostaErrada('preto'),
  RespostaModel.respostaErrada('branco'),
  RespostaModel.respostaCerta('vermelho')
])

const Home = () => {

  const [ questao, setQuestao ] = useState(questaoMock)

  const questionRespondida = (questao: QuestionModel) => {

  }

  const irPraProximoPasso = () => {
      
  }
  
  return (
    <Container>
      <Questionario 

          question={questao}
          ultima={true}
          questionRespondida={questionRespondida}
          irPraProximoPasso={irPraProximoPasso}
      
      />
  
    </Container>
      
  )
}

export default Home
