import Link from 'next/link'

function Home(){
    return(
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>André Oliveira Cunha</h1>
            <img src="assets/andre_img.jpeg" style={{ borderRadius: '50%', width: '100%', maxWidth: 400}}/>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
            <Link href="/projetos">
                <a>Projetos</a>
            </Link>
            
        </div>
    )
}

export default Home;