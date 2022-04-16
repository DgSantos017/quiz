import RespostaModel from '../../model/resposta'
import styles from './Resposta.module.css'

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

        <section className={styles.container} onClick={() => props.respostaFornecida(props.indice)}>
            <div className={`${styles.conteudoResposta} ${respostaRevelada}`}>
            
                 <div className={styles.frente}>
                    <div className={styles.letra} style={{backgroundColor: props.corFundoLetra}}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
            
                <>
                {resposta.certa ? (
                <div className={styles.verso} style={{backgroundColor: 'blue'}}>
                    <div className={styles.revelacao} >
                        <div className={styles.valor}> {resposta.valor} </div>
                        <div> Resposta certa :) </div>
                    </div>  
                </div>
                ) : (
                <div className={styles.verso}  style={{backgroundColor: 'red'}}>
                    <div className={styles.revelacao} >
                        <div className={styles.valor}> {resposta.valor} </div>
                        <div> Resposta errada :( </div>
                    </div>  
                </div>
                )}
                </>
                              
            </div>
        </section>
    )
}

export default Resposta