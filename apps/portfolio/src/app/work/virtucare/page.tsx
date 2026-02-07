import styles from './page.module.scss';
import { BackButton } from '../../../components/BackButton/BackButton';

export const metadata = {
    title: 'VirtuCare | Alina Ostapenko',
    description: 'VirtuCare - A telehealth and healthcare web application',
};

export default function VirtuCarePage() {
    const tags = ['B2B', 'Telehealth', 'Healthcare', 'Web Application'];

    return (
        <main className={styles['project-page']}>
            <div className="container">
                <BackButton />

                <header className={styles['project-header']}>
                    <h1 className={styles['project-title']}>VirtuCare</h1>
                    <div className={styles['tags-list']}>
                        {tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </header>

                <section className={styles['hero-section']}>
                    <div className={styles['hero-placeholder']}>
                        <img
                            src="https://placehold.co/1200x600/D1E6E8/1a1a1a?text=VirtuCare+Hero+Image"
                            alt="VirtuCare project hero"
                        />
                    </div>
                </section>

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
