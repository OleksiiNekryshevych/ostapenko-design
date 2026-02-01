'use client';

import { useState, FormEvent } from 'react';
import styles from './Contact.module.scss';
import { Button } from '@ostapenko-design/ui';

export function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate network request or use Formspree
        // fetch('https://formspree.io/f/YOUR_FORM_ID', { ... })

        setTimeout(() => {
            // Mock success for now
            setStatus('success');
            (e.target as HTMLFormElement).reset();
        }, 1000);
    };

    return (
        <section id="contact" className={`container ${styles.section}`}>
            <h2 className={styles['section-title']}>Get in touch</h2>
            <div className={styles['contact-grid']}>
                <form onSubmit={handleSubmit} className={styles['contact-form']}>
                    <div className={styles['form-group']}>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label className="sr-only" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            required
                            className={styles.textarea}
                        ></textarea>
                    </div>
                    <Button type="submit" disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'Sending...' : 'Send message'}
                    </Button>

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

                <div className={styles['contact-info']}>
                    <p className={styles.muted}>
                        Prefer email? <br />
                        <a href="mailto:hello@example.com">hello@example.com</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
