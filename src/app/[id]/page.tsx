type Props = {
    params: {
        id: string
    }
}

export function generateMetadata({params: {id}}:Props) {
    return{
        title: id
    }
}

export default function IdPage({params: {id}}: Props) {
    return <h1>Asteroid {id}</h1>
}