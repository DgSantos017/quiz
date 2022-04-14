import QuestionModel from '../../model/question'
import Enunciado from '../Enunciado'
import Resposta from '../Resposta'
import { Container } from './style'

interface QuestaoProps {
    valor: QuestionModel
}

const Questao = (props: QuestaoProps) => {

    const questao = props.valor

    const rendeirizarRespostas = () => {

        return questao.respostas.map((r, i) => {

            return <Resposta 
                key={i}
                valor={r}
                indice={i}
                letra='A'
                corFundoLetra = '#F2C866'
            />
            
        })
    }

    return (

        <Container>
            <Enunciado texto={questao.enunciado} />
            {rendeirizarRespostas()}
        </Container>
    )
}

export default Questao