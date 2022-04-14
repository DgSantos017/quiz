import { Container, Texto } from './style'

interface EnunciadoProps {
    texto: string
}

const Enunciado = (props: EnunciadoProps) => {

    return (

        <Container>
            <Texto>
                {props.texto}
            </Texto>
        </Container>
    )
}

export default Enunciado