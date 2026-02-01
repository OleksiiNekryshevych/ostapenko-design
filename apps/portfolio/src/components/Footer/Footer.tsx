import styles from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    const year = new Date().getFullYear();
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    const socialLinks = [
        { label: 'LinkedIn', href: 'https://linkedin.com', icon: `${basePath}/linkedin.svg` },
        { label: 'WhatsApp', href: 'https://whatsapp.com', icon: `${basePath}/whatsapp.svg` },
        { label: 'Telegram', href: 'https://t.me', icon: `${basePath}/telegram.svg` },
    ];

    return (
        <footer className={styles['site-footer']}>
            <div className={`container ${styles['footer-inner']}`}>
                <div className={styles['footer-left']}>
                    <Link href="/" className={styles.logo}>AO</Link>
                    <p className={styles.copyright}>
                        © {year} Alina Ostapenko. All rights reserved.
                    </p>
                </div>

                <div className={styles['footer-right']}>
                    <p className={styles.branding}>Alina Ostapenko Design</p>
                    <div className={styles['social-links']}>
                        {socialLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className={styles['social-link']}
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.label}
                                    width={20}
                                    height={20}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
