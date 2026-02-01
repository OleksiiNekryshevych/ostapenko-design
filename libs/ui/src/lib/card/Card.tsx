import { ReactNode } from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={clsx(styles.card, className)}>
            {children}
        </div>
    );
}
