function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGTMString();

    return(
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
    )
}

export async function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGTMString();

    return{
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo;