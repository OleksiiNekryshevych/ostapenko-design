import styles from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { SocialLinks } from '../SocialLinks';

export function Footer() {
    const year = new Date().getFullYear();
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <footer className={styles['site-footer']}>
            <div className="container">
                {/* Top row: Logo and Branding */}
                <div className={styles['footer-top']}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src={`${basePath}/logo.png`}
                            alt="AO Logo"
                            width={71}
                            height={48}
                        />
                    </Link>
                    <p className={styles.branding}>Alina Ostapenko Design</p>
                </div>

                {/* Bottom row: Copyright, Contact, Social */}
                <div className={styles['footer-bottom']}>
                    <p className={styles.copyright}>
                        © {year} Alina Ostapenko.<br />
                        All rights reserved.
                    </p>

                    <div className={styles['contact-info']}>
                        <span className={styles['contact-label']}>Contact Info:</span>
                        <a href="mailto:alinaostapenko.design@gmail.com" className={styles['contact-email']}>
                            <strong>alinaostapenko.design@gmail.com</strong>
                        </a>
                    </div>

                    <SocialLinks className={styles.social} />
                </div>
            </div>
        </footer>
    );
}
