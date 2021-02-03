import styles from './styles.module.css'

function Card(props) {
    const reloadSrc = e => { 
        e.target.src = "assets/project.jpg";
    }
      
    return (
        <div className={styles.card}>
            <img
                src={`https://raw.githubusercontent.com/${props.full_name}/master/exemplo.jpg`}
                alt="Imagem do repositório"
                style={{ width: '100%' }}
                onError={reloadSrc}
            />

            <div className={styles.container}>
                <h4 className={styles.name}><b>{props.name}</b></h4>
                <p className={styles.description}>{props.description}</p>
            </div>
            <div className={styles.githubButtonArea}>
                <a href={props.html_url} target="_blank" className={styles.githubButton}>GITHUB</a>
            </div>
            
        </div>
    )
}

export default Card;