import styles from './About.module.scss';
import { Section } from '../Section/Section';

export function About() {
    return (
        <Section id="about">
            <div className={`container ${styles.section}`}>
                <h2 className="section-title">About me</h2>
                <div className={styles.columns}>
                    <div className={styles['text-column']}>
                        <p className={styles['lead-text']}>
                            I'm a Product, UI/UX Designer with 5+ years of experience creating user-centered digital products.
                        </p>
                        <p className={styles['lead-text']}>
                            Throughout my career, I've collaborated closely with stakeholders, developers, and cross-functional teams to transform complex ideas into clear, functional, and visually engaging solutions.
                        </p>
                        <p className={styles['lead-text']}>
                            I've worked on a wide range of projects — from medical and healthcare platforms to large-scale admin dashboards.
                        </p>
                    </div>
                    <div className={styles['cards-column']}>
                        <div className={styles.card}>
                            <span className={styles['card-number']}>01</span>
                            <span className={styles['card-text']}>Currently based in Berlin</span>
                        </div>
                        <div className={styles.card}>
                            <span className={styles['card-number']}>02</span>
                            <span className={styles['card-text']}>Focused on Design Systems & Scalable UX</span>
                        </div>
                        <div className={styles.card}>
                            <span className={styles['card-number']}>03</span>
                            <span className={styles['card-text']}>"Observe, Design, Empower"</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
