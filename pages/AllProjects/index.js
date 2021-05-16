import styles from '../../styles/pages/AllProjects.module.css'
import { useState } from 'react'
import api from '../../services/api';
import Card from '../../components/Card';
import Head from 'next/head';


export default function AllProjects(props) {
    const [results, setResults] = useState('')

    const listRepo = (props.dados).map((repo) =>
        <Card 
            key={repo.id} 
            name={repo.name} 
            description={repo.description} 
            full_name={repo.full_name}
            html_url={repo.html_url}
        />
    );
    

    function filterItems(query) {
        return listRepo.filter(function(repo) {
            return (repo.props.name).toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
        
    }

    return(
        <div className={styles.container}>
            <Head>
                <title>Todos Projetos</title>
                <meta name="google-site-verification" content="U6DsQMemxSJvuZTy72uJMzLlgFJuRpxq97C-DSQl624" />
            </Head>
            <input 
                placeholder="Pesquisar" 
                onChange={async (e) => {
                    const { value } = e.currentTarget
                    setResults(filterItems(value))
                }}
                className={styles.input}
            />
            <div className={styles.containerProjects}>
                {results !== '' ? results : listRepo}
            </div>   

            <style jsx global>
                {`
                body {
                    margin: 0;
                    padding: 0;
                    background: var(--background);
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-attachment: fixed;
                }
                `}
            </style> 
        </div>
        
    )
}

export async function getStaticProps(){
    let dados = {}

    await api.get('/users/andreocunha/repos?per_page=100').then(response => {
        // console.log(response.data)
        dados = response.data
    });

    return{
        props: {
            dados
        },
        revalidate: 30
    }
}