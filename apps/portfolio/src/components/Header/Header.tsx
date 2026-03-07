'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
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
    const pathname = usePathname();
    const isHomePage = pathname === '/' || pathname === '';

    const headerRef = useRef<HTMLElement>(null);
    const darkOverlayRef = useRef<HTMLDivElement>(null);
    const lightLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const darkLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const darkNavOverlayRef = useRef<HTMLDivElement>(null);

    const [linksInHeader, setLinksInHeader] = useState(!isHomePage);

    const updateHeader = useCallback(() => {
        const header = headerRef.current;
        const darkOverlay = darkOverlayRef.current;
        if (!header || !darkOverlay) return;

        const headerRect = header.getBoundingClientRect();
        const headerTop = headerRect.top;
        const headerBottom = headerRect.bottom;
        const headerHeight = headerRect.height;

        // ─── Dark section clip-path logic ───
        const darkSections = document.querySelectorAll('[data-section-theme="dark"]');

        let darkRegionTop = headerHeight;
        let darkRegionBottom = 0;

        darkSections.forEach((section) => {
            const sectionRect = section.getBoundingClientRect();
            const overlapTop = Math.max(headerTop, sectionRect.top);
            const overlapBottom = Math.min(headerBottom, sectionRect.bottom);

            if (overlapBottom > overlapTop) {
                const relTop = overlapTop - headerTop;
                const relBottom = overlapBottom - headerTop;
                darkRegionTop = Math.min(darkRegionTop, relTop);
                darkRegionBottom = Math.max(darkRegionBottom, relBottom);
            }
        });

        // Header clip-path (relative to header element)
        let headerClipPath: string;
        if (darkRegionBottom <= darkRegionTop) {
            headerClipPath = 'inset(0 0 100% 0)';
        } else {
            const clipTop = (darkRegionTop / headerHeight) * 100;
            const clipBottom = ((headerHeight - darkRegionBottom) / headerHeight) * 100;
            headerClipPath = `inset(${clipTop}% 0 ${clipBottom}% 0)`;
        }
        darkOverlay.style.clipPath = headerClipPath;

        // Dark nav overlay: clip to reveal only where dark sections exist on screen
        // Uses viewport-absolute coordinates since the overlay covers the full viewport
        if (darkNavOverlayRef.current) {
            const vh = window.innerHeight;
            const darkRanges: string[] = [];

            darkSections.forEach((section) => {
                const r = section.getBoundingClientRect();
                if (r.bottom > 0 && r.top < vh) {
                    const top = Math.max(0, r.top);
                    const bottom = Math.min(vh, r.bottom);
                    // Add a rectangle covering this dark section's visible area
                    darkRanges.push(
                        `0% ${(top / vh) * 100}%, 100% ${(top / vh) * 100}%, 100% ${(bottom / vh) * 100}%, 0% ${(bottom / vh) * 100}%`
                    );
                }
            });

            if (darkRanges.length === 0) {
                darkNavOverlayRef.current.style.clipPath = 'inset(0 0 100% 0)';
            } else {
                // Build a polygon for each visible dark section
                darkNavOverlayRef.current.style.clipPath = `polygon(${darkRanges.join(', ')})`;
            }
        }

        // ─── Nav link positioning ───
        const headerCenterY = headerTop + headerHeight / 2;
        const containerEl = header.querySelector('.container');
        const containerWidth = containerEl?.getBoundingClientRect().width || window.innerWidth;
        const containerLeft = containerEl?.getBoundingClientRect().left || 0;

        const totalLinks = NAV_LINKS.length;
        const linkGap = 32;
        const avgLinkWidth = 70;
        const headerNavWidth = totalLinks * avgLinkWidth + (totalLinks - 1) * linkGap;
        const headerStartX = containerLeft + (containerWidth - headerNavWidth) / 2;

        if (!isHomePage) {
            // Non-homepage: position links directly in the header
            const positionLinks = (refs: (HTMLAnchorElement | null)[]) => {
                refs.forEach((link, index) => {
                    if (!link) return;
                    link.style.position = 'fixed';
                    link.style.top = `${headerCenterY}px`;
                    link.style.left = `${headerStartX + index * (avgLinkWidth + linkGap)}px`;
                    link.style.transform = 'translateY(-50%)';
                });
            };
            positionLinks(lightLinksRef.current);
            positionLinks(darkLinksRef.current);
            return;
        }

        // ─── Homepage: animate links from Motto ───
        const mottoSection = document.querySelector('[data-section-theme="dark"]');
        if (!mottoSection) return;

        const mottoRect = mottoSection.getBoundingClientRect();
        const mottoBottomY = mottoRect.bottom - 60;
        const mottoHeight = mottoRect.height;

        // Progress: 0 = links at motto bottom, 1 = links in header
        // Start transition when ~65% of the motto has been scrolled
        // mottoRect.top starts at 0 (or headerBottom with negative margin) and goes negative
        // When mottoRect.top is at -(mottoHeight * 0.35), 65% has scrolled past
        const scrolledIntoMotto = headerBottom - mottoRect.top;
        const transitionStartAt = mottoHeight * 0.65;
        const transitionEndAt = mottoHeight; // when motto bottom hits header

        let progress = 0;
        if (scrolledIntoMotto >= transitionEndAt) {
            progress = 1;
        } else if (scrolledIntoMotto <= transitionStartAt) {
            progress = 0;
        } else {
            progress = (scrolledIntoMotto - transitionStartAt) / (transitionEndAt - transitionStartAt);
        }

        setLinksInHeader(progress >= 1);

        const mottoSpread = containerWidth * 0.8;
        const mottoStartX = containerLeft + (containerWidth - mottoSpread) / 2;

        // Position both light and dark link sets identically
        const positionLink = (link: HTMLAnchorElement | null, index: number) => {
            if (!link) return;

            const staggerOffset = index * 0.12;
            const linkProgress = Math.max(0, Math.min(1, (progress - staggerOffset) / (1 - staggerOffset)));
            const easedLinkProgress = easeOutCubic(linkProgress);

            const currentY = mottoBottomY + (headerCenterY - mottoBottomY) * easedLinkProgress;
            const mottoLinkX = mottoStartX + (index / (totalLinks - 1)) * mottoSpread;
            const headerLinkX = headerStartX + index * (avgLinkWidth + linkGap);
            const currentX = mottoLinkX + (headerLinkX - mottoLinkX) * easedLinkProgress;

            link.style.position = 'fixed';
            link.style.top = `${currentY}px`;
            link.style.left = `${currentX}px`;
            link.style.transform = 'translateY(-50%)';
        };

        lightLinksRef.current.forEach((link, i) => positionLink(link, i));
        darkLinksRef.current.forEach((link, i) => positionLink(link, i));
    }, [isHomePage]);

    useEffect(() => {
        updateHeader();

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

                <div className={styles['header-nav-placeholder']} />

                <nav className={styles['social-nav']}>
                    <SocialLinks className={isDark ? styles['social-inverted'] : ''} />
                </nav>
            </div>
        </div>
    );

    const navLinks = (refs: React.MutableRefObject<(HTMLAnchorElement | null)[]>) =>
        NAV_LINKS.map((link, index) => (
            <a
                key={link.label}
                ref={el => { refs.current[index] = el; }}
                href={link.href}
                className={styles['floating-nav-link']}
            >
                {link.label}
            </a>
        ));

    return (
        <>
            <header ref={headerRef} className={styles['site-header']}>
                <div className={styles['header-light']}>
                    {headerContent(false)}
                </div>
                <div ref={darkOverlayRef} className={styles['header-dark']}>
                    {headerContent(true)}
                </div>
            </header>

            {/* Dual-layer floating nav links — light (base) + dark (clipped) */}
            <div className={styles['floating-nav']}>
                {/* Light links (dark text) */}
                <div className={styles['floating-nav-light']}>
                    {navLinks(lightLinksRef)}
                </div>
                {/* Dark links (white text) — same clip-path as header dark overlay */}
                <div ref={darkNavOverlayRef} className={styles['floating-nav-dark']}>
                    {navLinks(darkLinksRef)}
                </div>
            </div>
        </>
    );
}

function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
}
