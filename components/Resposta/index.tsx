import RespostaModel from '../../model/resposta'
import { Container, ConteudoResposta, Frente, Verso, Letra, Valor,Revelacao } from './style'

interface RespostaProps {
    valor: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: number) => void
}

const Resposta = (props: RespostaProps) => {

    const resposta = props.valor
    const respostaRevelada = resposta.revelada ? 'respostaRevelada' : ''

    return (

        <Container onClick={() => props.respostaFornecida(props.indice)}>
            <ConteudoResposta className={respostaRevelada}>
            
                 <Frente>
                    <Letra style={{backgroundColor: props.corFundoLetra}}>
                        {props.letra}
                    </Letra>
                    <Valor>
                        {resposta.valor}
                    </Valor>
                </Frente>
            
                <>
                {resposta.certa ? (
                <Verso style={{backgroundColor: 'blue'}}>
                    <Revelacao >
                        <Valor> {resposta.valor} </Valor>
                        <div> Resposta certa :) </div>
                    </Revelacao>  
                </Verso>
                ) : (
                <Verso  style={{backgroundColor: 'red'}}>
                    <Revelacao>
                        <Valor> {resposta.valor} </Valor>
                        <div> Resposta errada :( </div>
                    </Revelacao>  
                </Verso>
                )}
                </>
                              
            </ConteudoResposta>
        </Container>
    )
}

export default Resposta