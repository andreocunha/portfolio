import styles from '../../styles/components/Header.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

const Header = ({children}) => {
    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    return (
        <div className="container">
            <nav className={styles.navLinks}>
                <input id="nav-toggle" className={styles.navToggle} onChange={()=>{}} type="checkbox" checked={clicked}/>
                <ul className={styles.links}>
                    <Link href="/">
                        <li 
                            onClick={() => setClicked(!clicked)}
                            className={router.pathname === "/" ? styles.pageClicked : {}}
                            >
                            <p>Home</p>
                        </li>
                    </Link>

                    <Link href="/Timeline">
                        <li 
                            onClick={() => setClicked(!clicked)}
                            className={router.pathname === "/Timeline" ? styles.pageClicked : {}}
                            >
                            <p>Jornada</p>
                        </li>
                    </Link>

                    <Link href="/TopProjects">
                        <li 
                            onClick={() => setClicked(!clicked)}
                            className={router.pathname === "/TopProjects" ? styles.pageClicked : {}}
                            >
                            <p>Top 3</p>
                        </li>
                    </Link>

                    <Link href="/AllProjects">
                        <li 
                            onClick={() => setClicked(!clicked)}
                            className={router.pathname === "/AllProjects" ? styles.pageClicked : {}}
                            >
                            <p>Todos Projetos</p>
                        </li>
                    </Link>
                </ul>
                <label htmlFor="nav-toggle" className={styles.iconBurger} onClick={() => setClicked(!clicked)}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </label>
            </nav>
            {children}
        </div>        
    )
}

export default Header;

