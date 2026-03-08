import styles from './Works.module.scss';
import { Card } from '@ostapenko-design/ui';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '../Section/Section';

export function Works() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    const projects = [
        {
            title: 'Bloom',
            slug: 'bloom',
            tags: ['B2C', 'Wellbeing', 'Mental Health', 'Mobile Application'],
            accentColor: '#FFB700',
            image: `${basePath}/bloom-2.jpg`
        },
        {
            title: 'VirtuCare',
            slug: 'virtucare',
            tags: ['B2B', 'Telehealth', 'Healthcare', 'Web Application'],
            accentColor: undefined, // No accent color needed - image fills entire space
            image: `${basePath}/virtu-care-2.jpg`
        },
        {
            title: 'Dostupno.UA/<br/>OpenRoad',
            slug: 'dostupno',
            tags: ['Inclusive', 'Charity', 'Web Application', 'UX Review'],
            accentColor: '#F0F9EC',
            image: `${basePath}/dostupno-2.jpg`
        },
    ];

    return (
        <Section id="works" variant="dark">
            <div className={`container ${styles.section}`}>
                <h2 className="section-title">Projects</h2>
                <div className={styles['works-grid']}>
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            href={`/work/${project.slug}`}
                            className={styles['project-link']}
                        >
                            <Card className={styles['project-card']}>
                                <div className={styles['card-image']}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={630}
                                        height={612}
                                        className={styles['project-image']}
                                        style={project.accentColor ? { backgroundColor: project.accentColor } : undefined}
                                    />
                                </div>
                                <div className={styles['card-content']}>
                                    <h3 className={styles['card-title']} dangerouslySetInnerHTML={{ __html: project.title }} />
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
        </Section>
    );
}
