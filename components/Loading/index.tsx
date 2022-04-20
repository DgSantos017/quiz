import styles from './Loading.module.css'
import Image from 'next/image'

const Loading = () => {

    return (
        <div className={styles.container}>
            <Image
                src='./loading.gif'
                alt='Loading ..'
                width={300}
                height={300}
            />
        </div>
    )
}

export default Loading