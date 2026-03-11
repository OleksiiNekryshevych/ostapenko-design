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
    const chevronRef = useRef<HTMLButtonElement>(null);

    const animStartTimeRef = useRef<number | null>(null);
    const animProgressRef = useRef(0);
    const animFromRef = useRef(0); // progress value when animation started
    const animTargetRef = useRef(0); // 0 or 1
    const ANIM_DURATION = 1000;

    const [linksInHeader, setLinksInHeader] = useState(!isHomePage);
    const [isMounted, setIsMounted] = useState(false);

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

        let headerClipPath: string;
        if (darkRegionBottom <= darkRegionTop) {
            headerClipPath = 'inset(0 0 100% 0)';
        } else {
            const clipTop = (darkRegionTop / headerHeight) * 100;
            const clipBottom = ((headerHeight - darkRegionBottom) / headerHeight) * 100;
            headerClipPath = `inset(${clipTop}% 0 ${clipBottom}% 0)`;
        }
        darkOverlay.style.clipPath = headerClipPath;

        if (darkNavOverlayRef.current) {
            const vh = window.innerHeight;
            const darkRanges: string[] = [];

            darkSections.forEach((section) => {
                const r = section.getBoundingClientRect();
                if (r.bottom > 0 && r.top < vh) {
                    const top = Math.max(0, r.top);
                    const bottom = Math.min(vh, r.bottom);
                    darkRanges.push(
                        `0% ${(top / vh) * 100}%, 100% ${(top / vh) * 100}%, 100% ${(bottom / vh) * 100}%, 0% ${(bottom / vh) * 100}%`
                    );
                }
            });

            if (darkRanges.length === 0) {
                darkNavOverlayRef.current.style.clipPath = 'inset(0 0 100% 0)';
            } else {
                darkNavOverlayRef.current.style.clipPath = `polygon(${darkRanges.join(', ')})`;
            }
        }

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

        const mottoSection = document.querySelector('[data-section-theme="dark"]');
        if (!mottoSection) return;

        const mottoRect = mottoSection.getBoundingClientRect();
        const mottoBottomY = mottoRect.bottom - 60;
        const mottoHeight = mottoRect.height;

        const scrolledIntoMotto = headerBottom - mottoRect.top;
        const threshold = mottoHeight * 0.65;
        const shouldBeInHeader = scrolledIntoMotto >= threshold;
        const newTarget = shouldBeInHeader ? 1 : 0;

        // Trigger animation when target changes
        if (newTarget !== animTargetRef.current) {
            animFromRef.current = animProgressRef.current;
            animTargetRef.current = newTarget;
            animStartTimeRef.current = performance.now();
        }

        // Calculate time-based progress
        if (animStartTimeRef.current !== null) {
            const elapsed = performance.now() - animStartTimeRef.current;
            const t = Math.min(elapsed / ANIM_DURATION, 1);
            // easeInOutQuad — smooth start and end
            const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            animProgressRef.current = animFromRef.current + (animTargetRef.current - animFromRef.current) * eased;

            if (t >= 1) {
                animStartTimeRef.current = null;
            }
        }

        const progress = animProgressRef.current;
        setLinksInHeader(progress >= 1);

        // Motto positions (left/right groups) — with padding from edges
        const innerLinkGap = 35;
        const mottoPadding = 20; // prevent touching screen edges
        const mottoLinkPositions = [
            containerLeft + mottoPadding,
            containerLeft + mottoPadding + avgLinkWidth + innerLinkGap,
            containerLeft + containerWidth - mottoPadding - 2 * avgLinkWidth - innerLinkGap,
            containerLeft + containerWidth - mottoPadding - avgLinkWidth,
        ];

        const positionLink = (link: HTMLAnchorElement | null, index: number) => {
            if (!link) return;

            const staggerOffset = index * 0.12;
            const linkProgress = Math.max(0, Math.min(1, (progress - staggerOffset) / (1 - staggerOffset)));
            const easedLinkProgress = easeOutCubic(linkProgress);

            const currentY = mottoBottomY + (headerCenterY - mottoBottomY) * easedLinkProgress;
            const mottoLinkX = mottoLinkPositions[index];
            const headerLinkX = headerStartX + index * (avgLinkWidth + linkGap);
            const currentX = mottoLinkX + (headerLinkX - mottoLinkX) * easedLinkProgress;

            link.style.position = 'fixed';
            link.style.top = `${currentY}px`;
            link.style.left = `${currentX}px`;
            link.style.transform = 'translateY(-50%)';
        };

        lightLinksRef.current.forEach((link, i) => positionLink(link, i));
        darkLinksRef.current.forEach((link, i) => positionLink(link, i));

        // Chevron
        if (chevronRef.current) {
            chevronRef.current.style.position = 'fixed';
            chevronRef.current.style.top = `${mottoBottomY}px`;
            chevronRef.current.style.left = `${containerLeft + containerWidth / 2}px`;
            chevronRef.current.style.transform = 'translate(-50%, -50%)';
            chevronRef.current.style.opacity = `${1 - progress}`;
            chevronRef.current.style.pointerEvents = progress >= 1 ? 'none' : 'auto';
        }

        // Keep animating if animation is still running
        if (animStartTimeRef.current !== null) {
            requestAnimationFrame(updateHeader);
        }
    }, [isHomePage]);

    useEffect(() => {
        updateHeader();
        setIsMounted(true);

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
                    <Link
                        href="/"
                        className={styles.logo}
                        onClick={(e) => {
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                    >
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
                href={isHomePage ? link.href : `/${link.href}`}
                className={styles['floating-nav-link']}
                onClick={(e) => {
                    // Only intercept if we are already on the homepage where the sections exist
                    if (isHomePage) {
                        e.preventDefault();
                        const targetId = link.href.replace('/#', '').replace('#', '');
                        const element = document.getElementById(targetId);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }}
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
            <div className={styles['floating-nav']} style={{ opacity: isMounted ? 1 : 0, transition: 'opacity 0.2s ease-in-out' }}>
                {/* Light links (dark text) */}
                <div className={styles['floating-nav-light']}>
                    {navLinks(lightLinksRef)}
                </div>
                {/* Dark links (white text) — same clip-path as header dark overlay */}
                <div ref={darkNavOverlayRef} className={styles['floating-nav-dark']}>
                    {navLinks(darkLinksRef)}
                </div>
            </div>

            {/* Chevron scroll button — only on homepage */}
            {isHomePage && (
                <button
                    ref={chevronRef}
                    className={styles['scroll-chevron']}
                    onClick={() => {
                        const aboutSection = document.getElementById('about');
                        const header = headerRef.current;
                        if (aboutSection && header) {
                            const headerHeight = header.getBoundingClientRect().height;
                            const aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY;
                            window.scrollTo({ top: aboutTop - headerHeight, behavior: 'smooth' });
                        } else {
                            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                        }
                    }}
                    aria-label="Scroll down"
                >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            )}
        </>
    );
}

function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
}


