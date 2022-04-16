import { Container, Bolas } from '../styles/styleIndex'
import Botao from '../components/Botao'
import Estatistica from '../components/Estatistica'
import { GiSoccerKick, GiSoccerField, GiSoccerBall  } from 'react-icons/gi'

const Home = () => {

    const bola = <GiSoccerBall />
    const campo = <GiSoccerField />
    const chute = <GiSoccerKick />

    return (
        <Container>

            <h1> Quiz sobre Futebol </h1>

            <Bolas>
                <Estatistica texto='Faça' valor={chute}/>
                <Estatistica texto='um' valor={campo}  corFundo='#9CD2A4'/>
                <Estatistica texto='Golaço !!!' valor={bola} corFundo='#66bb6a'  />
            </Bolas>

            <Botao href='/game' texto=' Iniciar '/>

        </Container>
    )
}
export default Home