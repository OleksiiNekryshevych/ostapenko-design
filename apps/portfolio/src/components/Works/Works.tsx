import styles from './Works.module.scss';
import { Card } from '@ostapenko-design/ui';
import Link from 'next/link';
import Image from 'next/image';

export function Works() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    const projects = [
        {
            title: 'Bloom',
            slug: 'bloom',
            tags: ['B2C', 'Wellbeing', 'Mental Health', 'Mobile Application'],
            accentColor: '#FFB700',
            image: `${basePath}/project-1.png`
        },
        {
            title: 'VirtuCare',
            slug: 'virtucare',
            tags: ['B2B', 'Telehealth', 'Healthcare', 'Web Application'],
            accentColor: undefined, // No accent color needed - image fills entire space
            image: `${basePath}/project-2.jpg`
        },
    ];

    return (
        <section id="works" className={styles.section}>
            <div className="container">
                <h2 className="section-title">Latest work</h2>
                <div className={styles['works-grid']}>
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            href={`/work/${project.slug}`}
                            className={styles['project-link']}
                        >
                            <Card className={styles['project-card']}>
                                <div
                                    className={styles['card-image']}
                                    style={project.accentColor ? { backgroundColor: project.accentColor } : undefined}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={450}
                                        className={styles['project-image']}
                                    />
                                </div>
                                <div className={styles['card-content']}>
                                    <h3 className="card-title">{project.title}</h3>
                                    <div className={styles['tags-list']}>
                                        {project.tags.map(tag => (
                                            <span key={tag} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
