import styles from './Hero.module.scss';
import { Button } from '@ostapenko-design/ui';
import Image from 'next/image';

export function Hero() {
    return (
        <section className={styles['hero-section']}>
            <div className="container">
                <div className={styles['hero-main']}>
                    <div className={styles['hero-visual']}>
                        <div className={styles['image-wrapper']}>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/profile-pic.jpg`}
                                alt="Alina Ostapenko"
                                width={320}
                                height={320}
                                className={styles['profile-image']}
                                priority
                            />
                        </div>
                    </div>
                    <div className={styles['hero-content']}>
                        <h1 className="display-title">
                            UX/UI <br />
                            Product Designer
                        </h1>

                        <div className={styles['hero-ctas']}>
                            <Button href="#contact" variant="primary">Let’s Create</Button>
                        </div>

                        <p className={styles['hero-name']}>Alina Ostapenko</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
