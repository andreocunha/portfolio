import Head from 'next/head'
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
        </div>
    )
}