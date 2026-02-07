import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { SocialLinks } from '../SocialLinks';

export function Header() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <header className={styles['site-header']}>
            <div className="container">
                <div className={styles['header-inner']}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <Image
                                src={`${basePath}/logo.png`}
                                alt="AO Logo"
                                width={71}
                                height={48}
                                className={styles['logo-image']}
                            />
                        </Link>
                    </div>
                    <nav className={styles['social-nav']}>
                        <SocialLinks />
                    </nav>
                </div>
            </div>
        </header>
    );
}
