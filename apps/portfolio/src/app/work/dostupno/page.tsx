import styles from './page.module.scss';
import { BackButton } from '../../../components/BackButton/BackButton';

export const metadata = {
    title: 'Dostupno | Alina Ostapenko',
    description: 'Dostupno - An accessibility-focused design project',
};

export default function DostupnoPage() {
    const tags = ['Accessibility', 'Web Application', 'Social Impact'];

    return (
        <main className={styles['project-page']}>
            <div className="container">
                <BackButton />

                <header className={styles['project-header']}>
                    <h1 className={styles['project-title']}>Dostupno</h1>
                    <div className={styles['tags-list']}>
                        {tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </header>

                <section className={styles['content-section']}>
                    <h2>Overview</h2>
                    <p className={styles.placeholder}>
                        This section will contain the project overview. Add details about
                        the project goals, challenges, and your role in the project.
                    </p>
                </section>

                <section className={styles['content-section']}>
                    <h2>Process</h2>
                    <p className={styles.placeholder}>
                        This section will contain the design process. Add research findings,
                        wireframes, iterations, and design decisions.
                    </p>
                </section>

                <section className={styles['content-section']}>
                    <h2>Solution</h2>
                    <p className={styles.placeholder}>
                        This section will contain the final solution. Add final designs,
                        prototypes, and outcomes.
                    </p>
                </section>
            </div>
        </main>
    );
}
