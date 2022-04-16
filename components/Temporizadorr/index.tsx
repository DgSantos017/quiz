import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { Container } from './style'

interface TemporizadorProps {
    duration: number
    tempoEsgotado: () => void
}

const Temporizador = (props: TemporizadorProps) => {

    return (
        <Container>
            <CountdownCircleTimer 
            
                duration={props.duration}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
                {({ remainingTime  }) => remainingTime}
                
            </CountdownCircleTimer>
        </Container>
    )
}

export default Temporizador