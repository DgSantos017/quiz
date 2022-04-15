import RespostaModel from '../../model/resposta'
import { Container, ConteudoResposta, Frente, Verso, Letra, Valor } from './style'

interface RespostaProps {
    valor: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: number) => void
}

const Resposta = (props: RespostaProps) => {

    const resposta = props.valor

    return (

        <Container onClick={() => props.respostaFornecida(props.indice)}>
            <ConteudoResposta>
                <Frente>
                    <Letra style={{backgroundColor: props.corFundoLetra}}>
                        {props.letra}
                    </Letra>
                    <Valor>
                        {resposta.valor}
                    </Valor>
                </Frente>
                <Verso>

                </Verso>
            </ConteudoResposta>
        </Container>
    )
}

export default Resposta