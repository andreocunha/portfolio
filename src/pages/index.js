import Link from 'next/link'
import styles from './styles.module.css'

function Home(){
    return(
        <div className={styles.mainContainer}>

            <div className={styles.cardPerfil}>
                <h1 style={{ color: '#ffffff'}}>André Oliveira Cunha</h1>
                <img src="assets/andre_img.jpeg" className={styles.imgPerfil}/>

                <Link href="/projetos">
                    <a className={styles.buttonProjects}>Projetos</a>
                </Link>    

                <p style={{ color: '#ffffff', paddingLeft: 50, paddingRight: 50, fontSize: 18}}>
                    Estudate de Engenharia de Computação na UFES. Faz parte do grupo PET Engenharia de Computação, do
                    AVES (Aero Vitória Espirito Santo) e do Introcomp (Introdução a Computação).
                </p>

            </div>
            

            <style jsx global>
                {`
                body {
                    margin: 0;
                    padding: 0;
                }
                `}
            </style>
        </div>
    )
}

export default Home;