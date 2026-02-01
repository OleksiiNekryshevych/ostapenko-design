import styles from './Hero.module.scss';
import { Button } from '@ostapenko-design/ui';
import Image from 'next/image';

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container`}>
                <div className={styles['hero-main']}>
                    <div className={styles['hero-content']}>
                        <h1 className={styles['display-title']}>
                            UX/UI <br />
                            Product Designer
                        </h1>

                        <div className={styles['hero-ctas']}>
                            <Button href="#works" variant="primary">Work with me</Button>
                            <Button href="/resume.pdf" variant="outline" download>Download CV</Button>
                        </div>

                        <p className={styles['hero-name']}>Alina Ostapenko</p>
                    </div>

                    <div className={styles['hero-visual']}>
                        <div className={styles['image-wrapper']}>
                            {/* Placeholder for profile image */}
                            <Image
                                src="/profile-pic.jpg"
                                alt="Alina Ostapenko"
                                fill
                                className={styles['profile-image']}
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className={styles['hero-stats']}>
                    <div className={styles.stat}>
                        <span className={styles['stat-number']}>+5</span>
                        <span className={styles['stat-label']}>Work Experience</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles['stat-number']}>7</span>
                        <span className={styles['stat-label']}>Long term projects</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles['stat-number']}>20+</span>
                        <span className={styles['stat-label']}>Short term projects</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
