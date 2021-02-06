import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

function Home(){
    return(
        <div className={styles.mainContainer}>

            <div className={styles.cardPerfil}>
                <h1 style={{ color: '#ffffff'}}>André Oliveira Cunha</h1>
                <img src="assets/andre_img.jpeg" className={styles.imgPerfil}/>

                <Link href="/projetos">
                    <button className={styles.buttonProjects}>Projetos</button>
                </Link>    

                <p style={{ color: '#ffffff', paddingLeft: 50, paddingRight: 50, fontSize: 18}}>
                    Estudante de Engenharia de Computação na UFES. Faz parte do grupo PET Engenharia de Computação, do
                    AVES (Aero Vitória Espirito Santo) e do Introcomp (Introdução a Computação).
                </p>

            </div>

            <div className={styles.bgWrap}>
                <Image
                    alt="Mountains"
                    src="/assets/mountains.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
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