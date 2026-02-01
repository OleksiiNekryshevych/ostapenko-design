import styles from './Works.module.scss';
import { Card } from '@ostapenko-design/ui';

export function Works() {
    const projects = [
        {
            title: 'Bloom',
            tags: ['B2C', 'Wellbeing', 'Mental Health', 'Mobile Application'],
            bgColor: '#FDBF11', // Yellow
            image: '/bloom-placeholder.png'
        },
        {
            title: 'VirtuCare',
            tags: ['B2B', 'Telehealth', 'Healthcare', 'Web Application'],
            bgColor: '#D1E6E8', // Light Blue
            image: '/virtucare-placeholder.png'
        },
        {
            title: 'Dostupno.UA/OpenRoad',
            tags: ['Inclusive', 'City', 'Web Application', 'Redesign'],
            bgColor: '#FDBF11', // Yellow
            image: '/dostupno-placeholder.png'
        },
        {
            title: 'Project Placeholder',
            tags: ['Finance', 'Dashboard', 'Web Application'],
            bgColor: '#D1E6E8', // Light Blue
            image: '/placeholder.png'
        },
    ];

    return (
        <section id="works" className={`container ${styles.section}`}>
            <h2 className={styles['section-title']}>Latest work</h2>
            <div className={styles['works-grid']}>
                {projects.map((project, index) => (
                    <Card key={index} className={styles['project-card']}>
                        <div className={styles['card-image']} style={{ backgroundColor: project.bgColor }}>
                            {/* Placeholder for project image */}
                            <div className={styles['image-placeholder']}>
                                <img src={`https://placehold.co/600x400/png?text=${project.title}`} alt={project.title} />
                            </div>
                        </div>
                        <div className={styles['card-content']}>
                            <h3 className={styles['card-title']}>{project.title}</h3>
                            <div className={styles['tags-list']}>
                                {project.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
