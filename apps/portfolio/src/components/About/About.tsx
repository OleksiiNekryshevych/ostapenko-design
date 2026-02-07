import styles from './About.module.scss';

export function About() {
    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <p className="lead-text">
                    I'm a UI/UX Designer with 5+ years of experience creating intuitive, user-centered digital products.
                </p>
                <p className="lead-text">
                    Throughout my career, I've collaborated closely with stakeholders, developers, and cross-functional teams to transform complex ideas into clear, functional, and visually engaging solutions.
                </p>
                <p className="lead-text">
                    I've worked on a wide range of projects — from medical and healthcare platforms to fashion-related websites and large-scale admin dashboards.
                </p>
            </div>
        </section>
    );
}
