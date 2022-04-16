import styles from '../styles/Index.module.css'
import Botao from '../components/Botao'
import Estatistica from '../components/Estatistica'
import { GiSoccerKick, GiSoccerField, GiSoccerBall  } from 'react-icons/gi'

const Home = () => {

    const bola = <GiSoccerBall />
    const campo = <GiSoccerField />
    const chute = <GiSoccerKick />

    return (
        <section className={styles.container}>

            <h1> Quiz sobre Futebol </h1>

            <div className={styles.bolas}>
                <Estatistica texto='Faça' valor={chute}/>
                <Estatistica texto='um' valor={campo}  corFundo='#9CD2A4'/>
                <Estatistica texto='Golaço !!!' valor={bola} corFundo='#66bb6a'  />
            </div>

            <Botao href='/game' texto=' Iniciar '/>

        </section>
    )
}
export default Home