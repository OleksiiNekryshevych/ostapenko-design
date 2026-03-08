import styles from './Motto.module.scss';
import { Section } from '../Section/Section';

export function Motto() {
    return (
        <div className={styles['motto-wrapper']}>
            <Section variant="dark">
                <div className={`container`}>
                    <div className={styles.motto}>
                        <h2 className={styles['motto-text']}>
                            Simplifying complex
                            <br />
                            problems through design
                        </h2>
                    </div>
                </div>
            </Section>
        </div>
    );
}
