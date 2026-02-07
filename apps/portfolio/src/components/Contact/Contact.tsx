'use client';

import { useState, useRef, FormEvent, useEffect } from 'react';
import styles from './Contact.module.scss';
import { Button } from '@ostapenko-design/ui';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
    const [status, setStatus] = useState<SubmitStatus>('idle');
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch('https://formbold.com/s/6QZdl', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setStatus('success');
                formRef.current?.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }

        // Show snackbar
        setSnackbarVisible(true);
    };

    // Auto-hide snackbar after 5 seconds
    useEffect(() => {
        if (snackbarVisible) {
            const timer = setTimeout(() => {
                setSnackbarVisible(false);
                // Reset status after snackbar hides
                setTimeout(() => setStatus('idle'), 300);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [snackbarVisible]);

    const closeSnackbar = () => {
        setSnackbarVisible(false);
        setTimeout(() => setStatus('idle'), 300);
    };

    return (
        <section id="contact" className={`container ${styles.section}`}>
            <div className={styles['contact-header']}>
                <h2 className={styles['section-title']}>Let's work together</h2>
                <p className={styles.subtitle}>Have an idea? Let's discuss it.</p>
            </div>

            <div className={styles['contact-wrapper']}>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
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
                        <Button type="submit" variant="primary" disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Sending...' : 'Contact'}
                        </Button>
                    </div>
                </form>
            </div>

            {/* Snackbar notification */}
            <div className={`${styles.snackbar} ${snackbarVisible ? styles.visible : ''} ${status === 'success' ? styles.success : ''} ${status === 'error' ? styles.error : ''}`}>
                <div className={styles['snackbar-content']}>
                    <span className={styles['snackbar-icon']}>
                        {status === 'success' ? '✓' : '✕'}
                    </span>
                    <span className={styles['snackbar-message']}>
                        {status === 'success'
                            ? 'Message sent successfully! I\'ll get back to you soon.'
                            : 'Failed to send message. Please try again.'}
                    </span>
                    <button
                        type="button"
                        className={styles['snackbar-close']}
                        onClick={closeSnackbar}
                        aria-label="Close notification"
                    >
                        ×
                    </button>
                </div>
            </div>
        </section>
    );
}
