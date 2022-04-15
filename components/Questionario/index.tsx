import QuestionModel from '../../model/question'
import Questao from '../Questao'
import { Container } from './style'
import Botao from '../Botao'

interface QuestionarioProps {
    question: QuestionModel
    ultima: boolean
    questionRespondida: (question: QuestionModel) => void
    irPraProximoPasso: () => void
}

const Questionario = (props: QuestionarioProps) => {

    const respostaFornecida = (indice: number) => {

        if(props.question.naoRespondida){
            props.questionRespondida(props.question.responderCom(indice))
        }
    }

    return (
        <Container>
            {
                props.question ? 
                    <Questao 
                        valor={props.question}
                        tempoPraResposta={8}
                        respostaFornecida={respostaFornecida}
                        tempoEsgotado={props.irPraProximoPasso}
                    /> : false
            }
            

            <Botao 
                onClick={props.irPraProximoPasso} 
                texto={props.ultima ? 'Finalizar' : 'Próxima'} 
            />
        </Container>
    )
    
}

export default Questionario