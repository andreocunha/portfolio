import Link from 'next/link'
import Swal from 'sweetalert2'

function showImage(){
    Swal.fire({
        imageUrl: 'assets/ufes.jpg',
        imageAlt: 'A tall image',
        title: 'UFES'
    })
}

function Sobre(){
    return(
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>André Oliveira Cunha</h1>

            <p>Estudate de Engenharia de Computação na <strong><a onClick={()=> showImage()}>UFES</a></strong></p>
            <Link href="/">
                <a>Home</a>
            </Link>
            
        </div>
    )
}

export default Sobre;