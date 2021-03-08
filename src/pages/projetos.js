import { useState } from 'react'
import api from '../services/api';
import Card from '../components/cards/cards';
import styles from './styles.module.css'
import Head from 'next/head';


function Projetos(props){
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
                <title>Projetos</title>
                <link rel="shortcut icon" href="assets/favicon_projects.jpg" type="image/jpg"/>
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
                    background: #396D47;
                    background-image: url("/assets/background_projects.jpg");
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
        revalidate: 10
    }
}

export default Projetos;