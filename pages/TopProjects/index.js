import Head from 'next/head'
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

            <h1>TOP 3 Projetos</h1>
            <div className={styles.timeline}>
                <VerticalTimeline layout={'1-column-left'} className={styles.timelineArea}>
                    {projects.map(event => (
                    <VerticalTimelineElement
                        key={event.id}
                        className={styles.timelineElement}
                        date={event.date}
                        iconStyle={{ background: "rgb(52, 92, 129)", color: "#fff", display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        icon={<Position id={event.id}/>}
                    >
                        <h3>{event.title}</h3>
                        <img src={event.image} alt={event.title} width="100%"/>
                        <p>{event.description}</p>
                        <div className={styles.button}>
                            <a href={event.link} target="_blank">Ver mais</a>
                        </div>
                    </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>    
            </div>
        </div>
    )
}