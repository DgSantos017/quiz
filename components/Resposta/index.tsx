import RespostaModel from '../../model/resposta'
import { Container, ConteudoResposta, Frente, Verso, Letra, Valor, RespostaCerta, RespostaErrada } from './style'

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
            {!resposta.revelada ? (
                 <Frente>
                    <Letra style={{backgroundColor: props.corFundoLetra}}>
                        {props.letra}
                    </Letra>
                    <Valor>
                        {resposta.valor}
                    </Valor>
                </Frente>
            ) : (
                <Verso>
                    {resposta.certa ? (
                        <RespostaCerta>
                            <Valor> {resposta.valor} </Valor>
                            <div> Resposta certaaa :) </div>
                        </RespostaCerta>
                    ) : (
                        <RespostaErrada>
                            <Valor> {resposta.valor} </Valor>
                            <div> Resposta errada :( </div>
                        </RespostaErrada>
                    )}
                </Verso>
            )}
               
            </ConteudoResposta>
        </Container>
    )
}

export default Resposta