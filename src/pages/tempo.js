// import React, { useEffect } from 'react';
import api from '../services/api';

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return(
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
            <div>{props.dados.name} (dados)</div>
            <div>
                <img alt="imagem perfil" src={props.dados.avatar_url}/>
            </div>
        </div>
    )
}

export async function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    let dados = {}

    await api.get('/users/andreocunha').then(response => {
        // console.log(response.data)
        dados = response.data
    });
    

    return{
        props: {
            staticDateString,
            dados
        },
        revalidate: 1
    }
}

export default Tempo;