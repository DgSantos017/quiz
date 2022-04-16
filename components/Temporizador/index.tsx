import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from './Temporizador.module.css'

interface TemporizadorProps {
    key: any
    duration: number
    tempoEsgotado: () => void
}

const Temporizador = (props: TemporizadorProps) => {

    return (
        <div className={styles.container}>
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
        </div>
    )
}

export default Temporizador