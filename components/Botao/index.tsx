import styles from './Botao.module.css'
import Link from 'next/link'

interface BotaoProps {
    texto: string
    href?: string
    onClick?: (e: any) => void
}

const Botao = (props: BotaoProps) => {

    const rendeirizarBotao = () => {
        return (
            <div className={styles.container} onClick={props.onClick}>
                {props.texto}
            </div>
        )
    }

    return props.href ? (
        <Link href={props.href}>
            {rendeirizarBotao()}
        </Link>
    ) : rendeirizarBotao()
}

export default Botao