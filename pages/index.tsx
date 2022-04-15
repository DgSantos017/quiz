import QuestionModel from '../model/question'
import RespostaModel from '../model/resposta'
import { useEffect, useState } from 'react'
import Questionario from '../components/Questionario'

const questaoMock = new QuestionModel(1, 'Cor ? ', [
  RespostaModel.respostaErrada('verde'),
  RespostaModel.respostaErrada('azul'),
  RespostaModel.respostaErrada('preto'),
  RespostaModel.respostaErrada('branco'),
  RespostaModel.respostaCerta('vermelho')
])

const BASE_URL = 'http://localhost:3000/api'

const Home = () => {

  const [ questao, setQuestao ] = useState<QuestionModel>(questaoMock)
  const [ idsQuestoes, setIdsQuestoes ] = useState<number[]>([])

  async function carregarQuestoesIds() {

    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsQuestoes = await resp.json()
    console.log(idsQuestoes)
    setIdsQuestoes(idsQuestoes)

  }

  async function carregarQuestao(idQuestao: number) {

    const resp = await fetch(`${BASE_URL}/questions/${idQuestao}`)
    const json = await resp.json()
    console.log(json)
  }

  useEffect(() => {
    carregarQuestoesIds()
  }, [])

  useEffect(() => {
    idsQuestoes.length > 0 && carregarQuestao(idsQuestoes[0])
  }, [idsQuestoes])

  const questionRespondida = (questao: QuestionModel) => {

  }

  const irPraProximoPasso = () => {
      
  }
  
  return <Questionario 
          question={questao}
          ultima={true}
          questionRespondida={questionRespondida}
          irPraProximoPasso={irPraProximoPasso}
      />
}

export default Home
