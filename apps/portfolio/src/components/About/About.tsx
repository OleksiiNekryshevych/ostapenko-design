import styles from './About.module.scss';
import { Section } from '../Section/Section';

export function About() {
    return (
        <Section id="about">
            <div className={`container ${styles.section}`}>
                <p className={styles['lead-text']}>
                    I'm a UI/UX Designer with 5+ years of experience creating intuitive, user-centered digital products.
                </p>
                <p className={styles['lead-text']}>
                    Throughout my career, I've collaborated closely with stakeholders, developers, and cross-functional teams to transform complex ideas into clear, functional, and visually engaging solutions.
                </p>
                <p className={styles['lead-text']}>
                    I've worked on a wide range of projects — from medical and healthcare platforms to fashion-related websites and large-scale admin dashboards.
                </p>
            </div>
        </Section>
    );
}
