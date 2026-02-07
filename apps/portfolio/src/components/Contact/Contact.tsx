import styles from './Contact.module.scss';
import { Button } from '@ostapenko-design/ui';

export function Contact() {
    return (
        <section id="contact" className={`container ${styles.section}`}>
            <div className={styles['contact-header']}>
                <h2 className={styles['section-title']}>Let's work together</h2>
                <p className={styles.subtitle}>Have an idea? Let's discuss it.</p>
            </div>

            <div className={styles['contact-wrapper']}>
                <form
                    action="https://formbold.com/s/6QZdl"
                    method="POST"
                    className={styles['contact-form']}
                >
                    <div className={styles.row}>
                        <div className={styles['form-group']}>
                            <label className={styles.label} htmlFor="firstName">First Name*</label>
                            <input
                                id="firstName"
                                type="text"
                                name="firstName"
                                required
                                className={styles.input}
                            />
                        </div>
                        <div className={styles['form-group']}>
                            <label className={styles.label} htmlFor="lastName">Last Name*</label>
                            <input
                                id="lastName"
                                type="text"
                                name="lastName"
                                required
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div className={styles['form-group']}>
                        <label className={styles.label} htmlFor="email">Email*</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            className={styles.input}
                        />
                    </div>

                    <div className={styles['form-group']}>
                        <label className={styles.label} htmlFor="message">Brief Project Description*</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className={styles.textarea}
                        ></textarea>
                    </div>

                    <div className={styles['form-actions']}>
                        <Button type="submit" variant="primary">
                            Contact
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
