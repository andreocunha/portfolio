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
                <img src="/andre_img.jpeg" className={styles.imgPerfil} width="300px" alt="Foto André Oliveira Cunha"/>

                <p>
                    Estudante de Engenharia de Computação na UFES. Faz parte do grupo PET Engenharia de Computação, do
                    AVES (Aero Vitória Espirito Santo), do Solares e fez parte do Introcomp (Introdução a Computação).
                </p>
            </div>
        </div>
    )
}