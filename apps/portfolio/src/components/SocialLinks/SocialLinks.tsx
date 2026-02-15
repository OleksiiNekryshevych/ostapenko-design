import styles from './SocialLinks.module.scss';
import Image from 'next/image';

interface SocialLink {
    label: string;
    href: string;
    icon: string;
}

interface SocialLinksProps {
    className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    const socialLinks: SocialLink[] = [
        { label: 'LinkedIn', href: 'https://linkedin.com/in/alina-ostapenko-4121801a7/?skipRedirect=true', icon: `${basePath}/linkedin.svg` },
        { label: 'WhatsApp', href: 'https://wa.me/380661444694', icon: `${basePath}/whatsapp.svg` },
        { label: 'Telegram', href: 'https://t.me/ostapenkolina', icon: `${basePath}/telegram.svg` },
    ];

    return (
        <ul className={`${styles['social-links']} ${className || ''}`}>
            {socialLinks.map((item) => (
                <li key={item.label}>
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                    >
                        <Image
                            src={item.icon}
                            alt={item.label}
                            width={40}
                            height={40}
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
}
