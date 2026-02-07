import styles from './HeroStats.module.scss';

interface Stat {
    number: string;
    label: string;
}

export function HeroStats() {
    const stats: Stat[] = [
        { number: '+5', label: 'Work Experience' },
        { number: '7', label: 'Long term project' },
        { number: '20+', label: 'Short term projects' },
    ];

    return (
        <section className={styles['hero-stats']}>
            <div className="container">
                <div className={styles['stats-grid']}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.stat}>
                            <span className={styles['stat-number']}>{stat.number}</span>
                            <span className={styles['stat-label']}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
