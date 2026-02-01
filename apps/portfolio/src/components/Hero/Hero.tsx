import styles from './Hero.module.scss';
import { Button, Card } from '@ostapenko-design/ui';

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles['hero-inner']}`}>
                <div className={styles['hero-copy']}>
                    <h1 className={styles['display-title']}>Designer & Front-end Developer</h1>
                    <p className={styles.lead}>
                        I build modern, accessible interfaces and delightful user experiences.
                    </p>
                    <div className={styles['hero-ctas']}>
                        <Button href="#works">See my work</Button>
                        <Button variant="ghost" href="#contact">Contact me</Button>
                    </div>
                </div>
                <div className={styles['hero-visual']}>
                    <div className={`${styles['device-mock']} card`}>
                        {/* Note: In real app use Card component or generic div styled by module */}
                        Project preview
                    </div>
                </div>
            </div>
        </section>
    );
}
