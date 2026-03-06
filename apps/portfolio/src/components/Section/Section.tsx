import { ReactNode } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
    children: ReactNode;
    id?: string;
    variant?: 'default' | 'dark';
}

export function Section({ children, id, variant = 'default' }: SectionProps) {
    const className = variant === 'dark' ? styles.sectionDark : styles.section;

    return (
        <section id={id} className={className} data-section-theme={variant === 'dark' ? 'dark' : undefined}>
            {children}
        </section>
    );
}
