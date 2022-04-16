import { Container, Bolas } from './style'
import { useRouter } from 'next/router'
import Estatistica from '../components/Estatistica'
import Botao from '../components/Botao'

const resultado = () => {

    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    return(
        <Container>

            <h1> Resultado Final </h1>

            <Bolas>
                <Estatistica texto='Perguntas' valor={total} />
                <Estatistica texto='Certas' valor={certas}  corFundo='#9CD2A4' />
                <Estatistica texto='Percentual' valor={`${percentual} %`} corFundo='#66bb6a' />
            </Bolas>

            <Botao href='/' texto=' Tentar Novamente '/>

        </Container>
    )
}

export default resultado