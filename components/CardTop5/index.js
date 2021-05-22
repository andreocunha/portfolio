import styles from '../../styles/components/CardTop5.module.css';

export default function CardTop5(props){
    return (
        <div className={styles.container}>
            <div>
                {props.image ?
                    <img src={props.imageUrl} alt={props.title}/> :
                    <iframe 
                        style={{borderRadius: 10}}
                        width="300" 
                        height="215" 
                        src={props.videoUrl} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                }
            </div>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <a href={props.href} target="_blank">Veja mais</a>
            </div>
            
        </div>
    )
}