import { ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'ghost';
    href?: string;
    className?: string; // Allow custom classes
}

export function Button({
    children,
    variant = 'primary',
    href,
    className,
    ...props
}: ButtonProps) {
    const btnClass = clsx(styles.btn, styles[variant], className);

    if (href) {
        return (
            <a href={href} className={btnClass} {...(props as any)}>
                {children}
            </a>
        );
    }

    return (
        <button className={btnClass} {...props}>
            {children}
        </button>
    );
}
