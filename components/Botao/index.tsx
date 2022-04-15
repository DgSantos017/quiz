import { Button } from './style'
import Link from 'next/link'

interface BotaoProps {
    texto: string
    href?: string
    onClick?: (e: any) => void
}

const Botao = (props: BotaoProps) => {

    const rendeirizarBotao = () => {
        return (
            <Button onClick={props.onClick}>
                {props.texto}
            </Button>
        )
    }

    return props.href ? (
        <Link href={props.href}>
            {rendeirizarBotao()}
        </Link>
    ) : rendeirizarBotao()
}

export default Botao