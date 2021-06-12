import Head from 'next/head'
import CardTop5 from '../../components/CardTop5'
import styles from '../../styles/pages/TopProjects.module.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import projects from './projects.json'

export default function TopProjects() {

    const Position = (props) => {
        return (
            <div className={styles.position}>
                <h2>{props.id}</h2>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Top 3</title>
                <meta name="google-site-verification" content="U6DsQMemxSJvuZTy72uJMzLlgFJuRpxq97C-DSQl624" />
            </Head>

            <h1>TOP 3 projects</h1>
            {/* <h2>Página em construção</h2>
            <img src="/building-page.png" alt="Contruindo site" width="350px"/> */}
            {/* <CardTop5 
                title="Tranca biométrica do PET"
                description="Essa tranca utiliza um Arduino e sensores de biometria e RFID para permitir a entrada dos membros do PET na sala, evitando a necessidade de se utilizar chaves"
                href="https://www.instructables.com/Tranca-El%C3%A9trica-Com-Biometria-E-Leitor-RFID/"
                image={false}
                videoUrl="https://www.youtube.com/embed/BRX5SL0oXic"
            /> */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/BRX5SL0oXic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        
            <div className={styles.timeline}>
                <VerticalTimeline layout={'1-column-left'}>
                    {projects.map(event => (
                    <VerticalTimelineElement
                        key={event.id}
                        className={styles.timelineElement}
                        date={event.date}
                        iconStyle={{ background: "rgb(52, 92, 129)", color: "#fff", display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        icon={<Position id={event.id}/>}
                    >
                        <h3>{event.title}</h3>
                        <img src={event.image} alt={event.title}/>
                        <p>{event.description}</p>
                    </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>    
            </div>
        </div>
    )
}