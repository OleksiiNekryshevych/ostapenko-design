import styles from './Works.module.scss';
import { Card } from '@ostapenko-design/ui';

export function Works() {
    const projects = [
        { title: 'Project One', desc: 'Short description of project one.' },
        { title: 'Project Two', desc: 'Short description of project two.' },
        { title: 'Project Three', desc: 'Short description of project three.' },
    ];

    return (
        <section id="works" className={`container ${styles.section}`}>
            <h2 className={styles['section-title']}>Selected Work</h2>
            <div className={styles['works-grid']}>
                {projects.map((project, index) => (
                    <Card key={index}>
                        <h3 className={styles['card-title']}>{project.title}</h3>
                        <p className={styles['card-desc']}>{project.desc}</p>
                    </Card>
                ))}
            </div>
        </section>
    );
}
