import styles from './Header.module.scss';
import Link from 'next/link';

export function Header() {
    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Works', href: '#works' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className={styles['site-header']}>
            <div className={`container ${styles['header-inner']}`}>
                <div className={styles.brand}>
                    <Link href="/" className={styles.logo}>
                        Oleksii Ostapenko
                    </Link>
                </div>
                <nav className={styles['main-nav']}>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
