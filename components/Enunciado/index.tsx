import styles from './Enunciado.module.css'

interface EnunciadoProps {
    texto: string
}

const Enunciado = (props: EnunciadoProps) => {

    return <div className={styles.container}>
                <div className={styles.texto}>
                    {props.texto}
                </div>
            </div>
}

export default Enunciado