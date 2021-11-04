import Head from 'next/head'
import styles from '../../styles/pages/Home.module.css'

export default function Home(){
    return(
        <div className={styles.container}>
            <Head>
                <title>André Oliveira Cunha</title>
                <meta name="google-site-verification" content="U6DsQMemxSJvuZTy72uJMzLlgFJuRpxq97C-DSQl624" />
            </Head>
            <div className={styles.info}>
                <div className={styles.title}>
                    André Oliveira Cunha
                </div>
                <img src="/andre_img.jpeg" width="100%" height="auto" alt="Foto André Oliveira Cunha"/>

                <p>
                    Estudante de Engenharia de Computação na Universidade Federal do Espirito Santo. Faz parte do time de instrutores mobile da Alura e do projeto de extensão Solares na UFES.
                </p>
            </div>
        </div>
    )
}