import { Container, Total, Certas, Percentual } from './style'
import { useRouter } from 'next/router'

const resultado = () => {

    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    return(
        <Container>
            <Total> {total} </Total>
            <Certas> {certas} </Certas>
            <Percentual> {percentual} % </Percentual>
        </Container>
    )
}
export default resultado