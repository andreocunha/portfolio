import styles from '../../styles/components/Header.module.css';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { useRouter } from "next/router";

const Header = ({children}) => {
    const [isOpen, setOpen] = useState(false);
    const router = useRouter();

    return (
        <div>
            <div className={styles.headerContainer} 
                style={router.pathname === "/Timeline" ? {position: 'absolute'} : {}}
            >
                <div className={styles.iconHamburger}>
                    <Hamburger direction="right" size={30} toggled={isOpen} toggle={setOpen} />
                </div>
                {isOpen && 
                    <div className={styles.headerMenuMobile}>
                        <Link href="/">
                            <div 
                                onClick={() => setOpen(false)} 
                                style={router.pathname === "/" ? {backgroundColor: '#2a4c6b'} : {}}
                                className={styles.linkPage}>
                                    <p>Home</p>
                            </div>
                        </Link>
                        <Link href="/Timeline">
                            <div 
                                onClick={() => setOpen(false)} 
                                style={router.pathname === "/Timeline" ? {backgroundColor: '#2a4c6b'} : {}}
                                className={styles.linkPage}>
                                    <p>Jornada</p>
                            </div>
                        </Link>
                        <Link href="/TopProjects">
                            <div 
                                onClick={() => setOpen(false)}
                                style={router.pathname === "/TopProjects" ? {backgroundColor: '#2a4c6b'} : {}} 
                                className={styles.linkPage}>
                                    <p>Top 5</p>
                            </div>
                        </Link>
                        <Link href="/AllProjects">
                            <div 
                                onClick={() => setOpen(false)} 
                                style={router.pathname === "/AllProjects" ? {backgroundColor: '#2a4c6b'} : {}}
                                className={styles.linkPage}>
                                    <p>Todos Projetos</p>
                            </div>
                        </Link>
                    </div>
                }
                {!isOpen && 
                    <div className={styles.headerMenuWeb}>
                        <Link href="/">
                            <p className={router.pathname === "/" ? styles.activeWeb : ""}>
                                Home
                            </p>
                        </Link>
                        <Link href="/Timeline">
                            <p className={router.pathname === "/Timeline" ? styles.activeWeb : ""}>
                                Jornada
                            </p>
                        </Link>
                        <Link href="/TopProjects">
                            <p className={router.pathname === "/TopProjects" ? styles.activeWeb : ""}>
                                Top 5
                            </p>
                        </Link>
                        <Link href="/AllProjects">
                            <p className={router.pathname === "/AllProjects" ? styles.activeWeb : ""}>
                                Todos Projetos
                            </p>
                        </Link>
                    </div>
                }
            </div>
            {children}
        </div>
    )
}

export default Header;
