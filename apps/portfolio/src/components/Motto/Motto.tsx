import styles from './Motto.module.scss';
import { Section } from '../Section/Section';

export function Motto() {
    return (
        <Section variant="dark">
            <div className={`container`}>
                <div className={styles.motto}>

                    <h2 className={styles['motto-text']}>
                        Simplifying complex
                        <br />
                        problems through design
                    </h2>

                    <div className={styles['motto-bottom']}>
                        <nav className={styles['motto-nav']}>
                            <a href="#about" className={styles['motto-nav-link']}>About</a>
                            <a href="#works" className={styles['motto-nav-link']}>Projects</a>
                        </nav>

                        <span className={styles['motto-scroll']}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>

                        <nav className={styles['motto-nav']}>
                            <a href="#reviews" className={styles['motto-nav-link']}>Reviews</a>
                            <a href="#contact" className={styles['motto-nav-link']}>Contact</a>
                        </nav>
                    </div>
                </div>
            </div>
        </Section>
    );
}
