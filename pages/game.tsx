import QuestionModel from '../model/question'
import { useEffect, useState } from 'react'
import Questionario from '../components/Questionario'
import { useRouter } from 'next/router'
import Loading from '../components/Loading'

const BASE_URL = 'https://quiz-kappa-seven.vercel.app/api'

const Game = () => {

  const [ questao, setQuestao ] = useState<QuestionModel>()
  const [ respostasCertas, setRespostasCertas ] = useState<number>(0)
  const [ idsQuestoes, setIdsQuestoes ] = useState<number[]>([])

  const router = useRouter()

  async function carregarQuestoesIds() {

    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsQuestoes = await resp.json()
    console.log(idsQuestoes)
    setIdsQuestoes(idsQuestoes)

  }

  async function carregarQuestao(idQuestao: number) {

    const resp = await fetch(`${BASE_URL}/questions/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestionModel.criarUsandoObjeto(json)
    
    setQuestao(novaQuestao)
  }

  useEffect(() => {
    carregarQuestoesIds()
  }, [])

  useEffect(() => {
    idsQuestoes.length > 0 && carregarQuestao(idsQuestoes[0])
  }, [idsQuestoes])

  const questionRespondida = (questionRespondida: QuestionModel) => {

    setQuestao(questionRespondida)
    const acertou = questionRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  const idProximaPergunta = () => {

      const proxIndicie = idsQuestoes.indexOf(questao.id) + 1
      return idsQuestoes[proxIndicie]
     
  }

  const irPraProximoPasso = () => {
      const proxId = idProximaPergunta() 
      proxId ? irPraProxQuestao(proxId) : finalizar()
  }

  const irPraProxQuestao = (proxId: number) => {
    carregarQuestao(proxId)
  }

  const finalizar = () => {
    router.push({
      pathname: '/resultado',
      query: {
        total: idsQuestoes.length,
        certas: respostasCertas
      }
    })
  }
  
  return questao ? (
    <Questionario 
      question={questao}
      ultima={idProximaPergunta() === undefined}
      questionRespondida={questionRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  ) 
: <Loading />
}

export default Game
