import styles from './Loading.module.css'
import Image from 'next/image'
import img from '../../assets/loading.gif'

const Loading = () => {

    return (
        <div className={styles.container}>
            <Image
                src={img}
                alt='Loading ..'
                width={300}
                height={300}
            />
        </div>
    )
}

export default Loading