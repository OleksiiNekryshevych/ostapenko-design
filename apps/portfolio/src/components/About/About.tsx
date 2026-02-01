import styles from './About.module.scss';

export function About() {
    return (
        <section id="about" className={`container ${styles.section}`}>
            <h2 className={styles['section-title']}>About Me</h2>
            <p className={styles.lead}>
                I’m a product-minded designer who also codes. I focus on clean,
                accessible interfaces informed by strong visual design.
            </p>
        </section>
    );
}
