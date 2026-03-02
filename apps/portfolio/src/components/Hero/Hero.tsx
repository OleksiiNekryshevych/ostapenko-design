import styles from './Hero.module.scss';
import Image from 'next/image';
import { Section } from '../Section/Section';

export function Hero() {
    return (
        <Section>
            <div className={`container ${styles['hero-section']}`}>
                <div className={styles['hero-main']}>
                    <div className={styles['hero-visual']}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/profile-pic.jpg`}
                            alt="Alina Ostapenko"
                            width={420}
                            height={420}
                            className={styles['profile-image']}
                            priority
                        />
                    </div>
                    <div className={styles['hero-content']}>
                        <h1 className={styles['hero-title']}>
                            Simplifying complex problems{' '}
                            <span className={styles['hero-title-accent']}>through</span>{' '}
                            design
                        </h1>
                        <div className={styles['hero-bottom']}>
                            <span className={styles['hero-role']}>Product, UI/UX Designer</span>
                            <span className={styles['hero-name']}>Alina Ostapenko</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
