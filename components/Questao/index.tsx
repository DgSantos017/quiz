import QuestionModel from '../../model/question'
import Enunciado from '../Enunciado'
import Resposta from '../Resposta'
import Temporizador from '../Temporizadorr'
import { Container } from './style'

const letras = [
    {vaLor: 'A', cor: '#F2C866'},
    {valor: 'B', cor: '#F266BA'},
    {valor: 'C', cor: '#85D4F2'},
    {valor: 'D', cor: '#BCE596'},
    {valor: 'E', cor: 'purple'}
]

interface QuestaoProps {
    valor: QuestionModel
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

const Questao = (props: QuestaoProps) => {

    const questao = props.valor

    const rendeirizarRespostas = () => {

        return questao.respostas.map((r, i) => {

            return <Resposta 
                key={i}
                valor={r}
                indice={i}
                letra={letras[i].valor}
                corFundoLetra ={letras[i].cor}
                respostaFornecida={props.respostaFornecida}
            />
            
        })
    }

    return (

        <Container>
            <Enunciado texto={questao.enunciado} />
            <Temporizador duration={10} tempoEsgotado={props.tempoEsgotado} />
            {rendeirizarRespostas()}
        </Container>
    )
}

export default Questao