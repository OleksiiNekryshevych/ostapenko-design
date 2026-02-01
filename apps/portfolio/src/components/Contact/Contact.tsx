'use client';

import { useState, FormEvent } from 'react';
import styles from './Contact.module.scss';
import { Button } from '@ostapenko-design/ui';

export function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        // Mock submission
        setTimeout(() => {
            setStatus('success');
            (e.target as HTMLFormElement).reset();
        }, 1000);
    };

    return (
        <section id="contact" className={`container ${styles.section}`}>
            <div className={styles['contact-header']}>
                <h2 className={styles['section-title']}>Let's work together</h2>
                <p className={styles.subtitle}>Have an idea? Let's discuss it.</p>
            </div>

            <div className={styles['contact-wrapper']}>
                <form onSubmit={handleSubmit} className={styles['contact-form']} suppressHydrationWarning>
                    <div className={styles.row}>
                        <div className={styles['form-group']}>
                            <label className={styles.label} htmlFor="firstName">First Name*</label>
                            <input
                                id="firstName"
                                type="text"
                                name="firstName"
                                required
                                className={styles.input}
                                suppressHydrationWarning
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
                                suppressHydrationWarning
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
                            suppressHydrationWarning
                        />
                    </div>

                    <div className={styles['form-group']}>
                        <label className={styles.label} htmlFor="description">Brief Project Description*</label>
                        <textarea
                            id="description"
                            name="description"
                            required
                            className={styles.textarea}
                            suppressHydrationWarning
                        ></textarea>
                    </div>

                    <div className={styles['form-actions']}>
                        <Button type="submit" disabled={status === 'submitting'} variant="primary">
                            {status === 'submitting' ? 'Sending...' : 'Contact'}
                        </Button>
                    </div>

                    {status === 'success' && (
                        <p className={`${styles['form-message']} ${styles.success}`}>
                            Message sent successfully!
                        </p>
                    )}
                    {status === 'error' && (
                        <p className={`${styles['form-message']} ${styles.error}`}>
                            Failed to send message. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
