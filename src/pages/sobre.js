import Link from 'next/link'

function Sobre(){
    return(
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>André Oliveira Cunha</h1>

            <p>Estudate de Engenharia de Computação na UFES</p>
            <Link href="/">
                <a>Home</a>
            </Link>
            
        </div>
    )
}

export default Sobre;