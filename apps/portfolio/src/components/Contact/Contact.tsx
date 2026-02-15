'use client';

import { useState, useRef, FormEvent, useEffect } from 'react';
import styles from './Contact.module.scss';
import { Button } from '@ostapenko-design/ui';
import { Section } from '../Section/Section';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FieldErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
}

function validateFields(form: HTMLFormElement): FieldErrors {
    const errors: FieldErrors = {};
    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value.trim();
    const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    if (!firstName) errors.firstName = 'First name is required';
    if (!lastName) errors.lastName = 'Last name is required';
    if (!email) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = 'Please enter a valid email';
    }
    if (!message) errors.message = 'Project description is required';

    return errors;
}

export function Contact() {
    const [status, setStatus] = useState<SubmitStatus>('idle');
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
    const [touched, setTouched] = useState<Set<string>>(new Set());
    const formRef = useRef<HTMLFormElement>(null);

    const handleBlur = (fieldName: string) => {
        setTouched(prev => new Set(prev).add(fieldName));

        if (formRef.current) {
            const errors = validateFields(formRef.current);
            // Only show error for this specific field
            setFieldErrors(prev => ({
                ...prev,
                [fieldName]: errors[fieldName as keyof FieldErrors],
            }));
        }
    };

    const handleChange = (fieldName: string) => {
        // Clear the error for this field on change if it was touched
        if (touched.has(fieldName) && formRef.current) {
            const errors = validateFields(formRef.current);
            setFieldErrors(prev => ({
                ...prev,
                [fieldName]: errors[fieldName as keyof FieldErrors],
            }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors = validateFields(e.currentTarget);

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            setTouched(new Set(Object.keys(errors)));
            return;
        }

        setFieldErrors({});
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
                setTouched(new Set());
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

    const inputClass = (field: keyof FieldErrors) =>
        `${styles.input} ${fieldErrors[field] ? styles['input-error'] : ''}`;

    const labelClass = (field: keyof FieldErrors) =>
        `${styles.label} ${fieldErrors[field] ? styles['label-error'] : ''}`;

    return (
        <Section id="contact">
            <div className={`container ${styles.section}`}>
                <div className={styles['contact-header']}>
                    <h2 className="section-title">Let's work together</h2>
                    <p className="subtitle-text">Send me your details and a brief overview of what you're facing I'll be in touch soon.</p>
                </div>

                <div className={styles['contact-wrapper']}>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        noValidate
                        className={styles['contact-form']}
                    >
                        <div className={styles.row}>
                            <div className={styles['form-group']}>
                                <label className={labelClass('firstName')} htmlFor="firstName">First Name*</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    className={inputClass('firstName')}
                                    onBlur={() => handleBlur('firstName')}
                                    onChange={() => handleChange('firstName')}
                                />
                                {fieldErrors.firstName && (
                                    <span className={styles['field-error']}>{fieldErrors.firstName}</span>
                                )}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles['form-group']}>
                                <label className={labelClass('lastName')} htmlFor="lastName">Last Name*</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    className={inputClass('lastName')}
                                    onBlur={() => handleBlur('lastName')}
                                    onChange={() => handleChange('lastName')}
                                />
                                {fieldErrors.lastName && (
                                    <span className={styles['field-error']}>{fieldErrors.lastName}</span>
                                )}
                            </div>
                        </div>

                        <div className={styles['form-group']}>
                            <label className={labelClass('email')} htmlFor="email">Email*</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className={inputClass('email')}
                                onBlur={() => handleBlur('email')}
                                onChange={() => handleChange('email')}
                            />
                            {fieldErrors.email && (
                                <span className={styles['field-error']}>{fieldErrors.email}</span>
                            )}
                        </div>

                        <div className={styles['form-group']}>
                            <label className={labelClass('message')} htmlFor="message">Brief Project Description*</label>
                            <textarea
                                id="message"
                                name="message"
                                className={`${styles.textarea} ${fieldErrors.message ? styles['input-error'] : ''}`}
                                onBlur={() => handleBlur('message')}
                                onChange={() => handleChange('message')}
                            ></textarea>
                            {fieldErrors.message && (
                                <span className={styles['field-error']}>{fieldErrors.message}</span>
                            )}
                        </div>

                        <div className={styles['form-actions']}>
                            <Button type="submit" variant="primary" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Sending...' : 'Contact'}
                            </Button>
                        </div>
                    </form>
                </div>
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
        </Section>
    );
}
