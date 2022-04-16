import QuestionModel from '../../model/question'
import Enunciado from '../Enunciado'
import Resposta from '../Resposta'
import Temporizador from '../Temporizador'
import styles from './Questao.module.css'

const letras = [
    {vaLor: 'A', cor: '#F2C866'},
    {valor: 'B', cor: '#F266BA'},
    {valor: 'C', cor: '#85D4F2'},
    {valor: 'D', cor: '#BCE596'},
    {valor: 'E', cor: 'purple'}
]

interface QuestaoProps {
    valor: QuestionModel
    tempoPraResposta?: number 
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

const Questao = (props: QuestaoProps) => {

    const questao = props.valor

    const rendeirizarRespostas = () => {

        return questao.respostas.map((r, i) => {

            return <Resposta 
                        key={`${questao.id}-${i}`}
                        valor={r}
                        indice={i}
                        letra={letras[i].valor}
                        corFundoLetra ={letras[i].cor}
                        respostaFornecida={props.respostaFornecida}
                    />   
        })
    }

    return <section className={styles.container}>
                <Enunciado texto={questao.enunciado} />
                <Temporizador key={questao.id} duration={props.tempoPraResposta ?? 10} tempoEsgotado={props.tempoEsgotado} />
                {rendeirizarRespostas()}
            </section>
}

export default Questao