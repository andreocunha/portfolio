import Head from "next/head";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../../styles/pages/Timeline.module.css'

import events from "./events.json";

export default function Timeline() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jornada</title>
                <meta name="google-site-verification" content="U6DsQMemxSJvuZTy72uJMzLlgFJuRpxq97C-DSQl624" />
            </Head>

            <h1>Linha do Tempo</h1>
            <VerticalTimeline className={styles.timeline}>
                {events.map(event => (
                <VerticalTimelineElement
                    key={event.id}
                    className={styles.timelineElement}
                    date={event.date}
                    iconStyle={{ background: "rgb(52, 92, 129)", color: "#fff" }}
                >
                    <h3>{event.title}</h3>
                    <img src={event.image} alt={event.title} />
                    <p>{event.description}</p>
                </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    )
}