import { Container, Valor, Texto } from './style'

interface EstatisticaProps {
    valor: any
    texto: string
    corFundo?: string
    corFonte?: string
}

const Estatistica = (props: EstatisticaProps) => {

    return <Container>
                <Valor style={{
                    backgroundColor: props.corFundo ?? '#FDD60F',
                    color: props.corFonte ?? '#333'
                }}>
                    {props.valor}
                </Valor>

                <Texto>
                    {props.texto}
                </Texto>
           </Container>
}

export default Estatistica