'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { SocialLinks } from '../SocialLinks';

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#works' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
];

export function Header() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const headerRef = useRef<HTMLElement>(null);
    const darkOverlayRef = useRef<HTMLDivElement>(null);
    const [showNav, setShowNav] = useState(false);

    const updateHeader = useCallback(() => {
        const header = headerRef.current;
        const darkOverlay = darkOverlayRef.current;
        if (!header || !darkOverlay) return;

        const headerRect = header.getBoundingClientRect();
        const headerTop = headerRect.top;
        const headerBottom = headerRect.bottom;
        const headerHeight = headerRect.height;

        // Find all dark sections
        const darkSections = document.querySelectorAll('[data-section-theme="dark"]');

        // Track the visible dark region within the header (union of all overlapping dark sections)
        let darkRegionTop = headerHeight; // relative to header top
        let darkRegionBottom = 0;         // relative to header top

        darkSections.forEach((section) => {
            const sectionRect = section.getBoundingClientRect();

            // Check if this dark section overlaps the header
            const overlapTop = Math.max(headerTop, sectionRect.top);
            const overlapBottom = Math.min(headerBottom, sectionRect.bottom);

            if (overlapBottom > overlapTop) {
                // Convert to header-relative coordinates
                const relTop = overlapTop - headerTop;
                const relBottom = overlapBottom - headerTop;

                // Expand the dark region to include this overlap
                darkRegionTop = Math.min(darkRegionTop, relTop);
                darkRegionBottom = Math.max(darkRegionBottom, relBottom);
            }
        });

        // Apply clip-path to dark overlay
        // inset(top right bottom left)
        if (darkRegionBottom <= darkRegionTop) {
            // No overlap — fully clipped (show light)
            darkOverlay.style.clipPath = 'inset(0 0 100% 0)';
        } else {
            const clipTop = (darkRegionTop / headerHeight) * 100;
            const clipBottom = ((headerHeight - darkRegionBottom) / headerHeight) * 100;
            darkOverlay.style.clipPath = `inset(${clipTop}% 0 ${clipBottom}% 0)`;
        }

        // Check if motto nav has scrolled into the header
        const mottoNav = document.querySelector('[data-motto-nav]');
        if (mottoNav) {
            const mottoNavRect = mottoNav.getBoundingClientRect();
            // Show header nav when motto nav scrolls above header bottom
            setShowNav(mottoNavRect.top <= headerBottom);
        }
    }, []);

    useEffect(() => {
        // Run on mount
        updateHeader();

        // Throttled scroll handler using requestAnimationFrame
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateHeader();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', updateHeader);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateHeader);
        };
    }, [updateHeader]);

    const headerContent = (isDark: boolean) => (
        <div className="container">
            <div className={styles['header-inner']}>
                <div className={styles.brand}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src={`${basePath}/logo.png`}
                            alt="AO Logo"
                            width={71}
                            height={48}
                            className={`${styles['logo-image']} ${isDark ? styles['logo-inverted'] : ''}`}
                            priority
                        />
                    </Link>
                </div>

                <nav className={`${styles['header-nav']} ${showNav ? styles['header-nav-visible'] : ''}`}>
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={styles['header-nav-link']}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <nav className={styles['social-nav']}>
                    <SocialLinks className={isDark ? styles['social-inverted'] : ''} />
                </nav>
            </div>
        </div>
    );

    return (
        <header ref={headerRef} className={styles['site-header']}>
            {/* Light (base) layer */}
            <div className={styles['header-light']}>
                {headerContent(false)}
            </div>

            {/* Dark overlay layer — clipped based on scroll */}
            <div ref={darkOverlayRef} className={styles['header-dark']}>
                {headerContent(true)}
            </div>
        </header>
    );
}
