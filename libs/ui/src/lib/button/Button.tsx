import { ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'ghost' | 'outline';
    size?: 'md' | 'lg';
    href?: string;
    className?: string; // Allow custom classes
    download?: boolean | string; // Add download prop
}

export function Button({
    children,
    variant = 'primary',
    size = 'lg',
    href,
    className,
    ...props
}: ButtonProps) {
    const btnClass = clsx(styles.btn, styles[variant], styles[`size-${size}`], className);

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
