import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
    const socialLinks = [
        { label: 'LinkedIn', href: 'https://linkedin.com', icon: '/linkedin.svg' },
        { label: 'WhatsApp', href: 'https://whatsapp.com', icon: '/whatsapp.svg' },
        { label: 'Telegram', href: 'https://t.me', icon: '/telegram.svg' },
    ];

    return (
        <header className={styles['site-header']}>
            <div className={`container ${styles['header-inner']}`}>
                <div className={styles.brand}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="AO Logo"
                            width={71}
                            height={48}
                            className={styles['logo-image']}
                        />
                    </Link>
                </div>
                <nav className={styles['social-nav']}>
                    <ul>
                        {socialLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                                    <Image
                                        src={item.icon}
                                        alt={item.label}
                                        width={40}
                                        height={40}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
