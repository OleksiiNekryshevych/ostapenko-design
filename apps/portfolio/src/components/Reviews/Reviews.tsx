import styles from './Reviews.module.scss';
import { Section } from '../Section/Section';
import Image from 'next/image';

export function Reviews() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <Section id="reviews">
            <div className={`container ${styles.section}`}>
                <h2 className="section-title">What My Collaborators Say <span className={styles.badge}>(LinkedIn)</span></h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Image
                            src={`${basePath}/review1.jpg`}
                            alt="Review from collaborator"
                            width={600}
                            height={400}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.card}>
                        <Image
                            src={`${basePath}/review2.jpg`}
                            alt="Review from collaborator"
                            width={600}
                            height={400}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.card}>
                        <Image
                            src={`${basePath}/review3.png`}
                            alt="Review from collaborator"
                            width={600}
                            height={400}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.card}>
                        <Image
                            src={`${basePath}/review4.jpg`}
                            alt="Review from collaborator"
                            width={600}
                            height={400}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
