import styles from '../styles/Index.module.css'
import { useRouter } from 'next/router'
import Estatistica from '../components/Estatistica'
import Botao from '../components/Botao'

const Resultado = () => {

    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    return(
        <section className={styles.container}>

            <h1> Resultado Final </h1>

            <div className={styles.bolas}>
                <Estatistica texto='Perguntas' valor={total} />
                <Estatistica texto='Certas' valor={certas}  corFundo='#9CD2A4' />
                <Estatistica texto='Percentual' valor={`${percentual} %`} corFundo='#66bb6a' />
            </div>

            <Botao href='/' texto=' Tentar Novamente '/>

        </section>
    )
}

export default Resultado