import Head from 'next/head'
import CardTop5 from '../../components/CardTop5'
import styles from '../../styles/pages/TopProjects.module.css'

export default function TopProjects() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Top 5</title>
                <meta name="google-site-verification" content="U6DsQMemxSJvuZTy72uJMzLlgFJuRpxq97C-DSQl624" />
            </Head>

            <h1>TOP 5 projects</h1>
            <h2>Página em construção</h2>
            <img src="/building-page.png" alt="Contruindo site" width="350px"/>
            {/* <CardTop5 
                title="Tranca biométrica do PET"
                description="Essa tranca utiliza um Arduino e sensores de biometria e RFID para permitir a entrada dos membros do PET na sala, evitando a necessidade de se utilizar chaves"
                href="https://www.instructables.com/Tranca-El%C3%A9trica-Com-Biometria-E-Leitor-RFID/"
                image={false}
                videoUrl="https://www.youtube.com/embed/BRX5SL0oXic"
            /> */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/BRX5SL0oXic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        </div>
    )
}