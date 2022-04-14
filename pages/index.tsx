import Questao from '../components/Questao'
import QuestionModel from '../model/question'
import RespostaModel from '../model/resposta'
import { Container } from './style'

const Home = () => {

  const questaoTeste = new QuestionModel(1, 'Cor ? ', [
    RespostaModel.respostaErrada('verde'),
    RespostaModel.respostaErrada('azul'),
    RespostaModel.respostaErrada('preto'),
    RespostaModel.respostaErrada('branco'),
    RespostaModel.respostaCerta('vermelho')
  ])

  return (
    <Container>
      <Questao valor={questaoTeste} /> 
    </Container>
      
  )
}

export default Home
