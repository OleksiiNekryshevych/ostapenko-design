import styles from './page.module.scss';
import { BackButton } from '../../../components/BackButton/BackButton';

export const metadata = {
    title: 'Bloom | Alina Ostapenko',
    description: 'Bloom - A wellbeing and mental health mobile application',
};

export default function BloomPage() {
    const tags = ['B2C', 'Wellbeing', 'Mental Health', 'Mobile Application'];

    return (
        <main className={styles['project-page']}>
            <div className="container">
                <BackButton />

                <header className={styles['project-header']}>
                    <h1 className={styles['project-title']}>Bloom</h1>
                    <div className={styles['tags-list']}>
                        {tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </header>

                <section className={styles['hero-section']}>
                    <div className={styles['hero-placeholder']}>
                        <img
                            src="https://placehold.co/1200x600/FDBF11/1a1a1a?text=Bloom+Hero+Image"
                            alt="Bloom project hero"
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
