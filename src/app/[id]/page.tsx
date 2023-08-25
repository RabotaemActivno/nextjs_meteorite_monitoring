import Link from 'next/link'
import styles from './Asteroid.module.css'
import { Metadata } from 'next'

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({params: {id}}:Props): Promise<Metadata> {
    return{
        title: id
    }
}

export default function Asteroid({params: {id}}: Props) {
    return (
    <div className={styles.wrapper}>
        <h1>Asteroid {id}</h1>
        <Link href={'/'}>назад</Link>
    </div>
        )
}