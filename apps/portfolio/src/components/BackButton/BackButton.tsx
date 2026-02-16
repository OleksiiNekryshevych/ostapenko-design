import styles from './BackButton.module.scss';
import Link from 'next/link';

interface BackButtonProps {
    href?: string;
    label?: string;
}

export function BackButton({ href = '/', label = '' }: BackButtonProps) {
    return (
        <Link href={href} className={styles['back-button']}>
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M15.833 10H4.167M4.167 10L10 15.833M4.167 10L10 4.167"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            {/* <span>{label}</span> */}
        </Link>
    );
}
