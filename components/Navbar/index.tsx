
import Link from 'next/link';
import Laugh from '../Laugh';
import styles from './navbar.module.css';


function NavItem({ children, href }: { children: React.ReactNode, href: string }) {
    return <Link href={href}>{children}</Link>
}


export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}>Just Jokes <Laugh /> </h1>
            <ul className={styles.items}>
                <NavItem href='/'>Home</NavItem>
                <NavItem href='https://github.com/iMADi-ARCH/Jokes'>Github</NavItem>
                <NavItem href='/about'>About</NavItem>
            </ul>
        </nav>
    );
}