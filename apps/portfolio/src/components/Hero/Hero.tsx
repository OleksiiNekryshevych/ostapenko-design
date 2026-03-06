'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import { Section } from '../Section/Section';

// ─── Animated number logic (from HeroStats) ───

interface Stat {
    number: string;
    label: string;
}

const stats: Stat[] = [
    { number: '7', label: 'Long term project' },
    { number: '5+', label: 'Years of experience' },
    { number: '20+', label: 'Short term projects' },
];

function parseStat(value: string): { target: number; suffix: string } {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return { target: 0, suffix: '' };
    return { target: parseInt(match[1], 10), suffix: match[2] };
}

function easeOutQuart(t: number): number {
    return 1 - Math.pow(1 - t, 4);
}

const ANIMATION_DURATION_MS = 1500;
const STAGGER_DELAY_MS = 300;

function AnimatedNumber({ value, delay = 0 }: { value: string; delay?: number }) {
    const { target, suffix } = parseStat(value);
    const [display, setDisplay] = useState<string>(value);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        setDisplay(`0${suffix}`);
    }, [suffix]);

    useEffect(() => {
        const el = ref.current;
        if (!el || hasAnimated) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();
                setHasAnimated(true);

                setTimeout(() => {
                    let start: number | null = null;
                    function step(timestamp: number) {
                        if (start === null) start = timestamp;
                        const elapsed = timestamp - start;
                        const progress = Math.min(elapsed / ANIMATION_DURATION_MS, 1);
                        const easedProgress = easeOutQuart(progress);
                        const current = Math.round(easedProgress * target);
                        setDisplay(`${current}${suffix}`);
                        if (progress < 1) requestAnimationFrame(step);
                    }
                    requestAnimationFrame(step);
                }, delay);
            },
            { threshold: 0.3 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [hasAnimated, target, suffix, delay]);

    return (
        <span ref={ref} className={styles['stat-number']}>
            {display}
        </span>
    );
}

// ─── Hero Component (merged Hero + HeroStats + About) ───

export function Hero() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <Section id="about">
            <div className={`container ${styles['hero-section']}`}>
                {/* Top: Image + Title */}
                <div className={styles['hero-top']}>
                    <div className={styles['hero-visual']}>
                        <Image
                            src={`${basePath}/profile-pic.jpg`}
                            alt="Alina Ostapenko"
                            width={420}
                            height={420}
                            className={styles['profile-image']}
                            priority
                        />
                    </div>
                    <div className={styles['hero-intro']}>
                        <h1 className={styles['hero-title']}>Product Designer</h1>
                        <span className={styles['hero-name']}>Alina Ostapenko</span>

                        {/* Stats */}
                        <div className={styles['stats-grid']}>
                            {stats.map((stat, index) => (
                                <div key={index} className={styles.stat}>
                                    <AnimatedNumber value={stat.number} delay={index * STAGGER_DELAY_MS} />
                                    <span className={styles['stat-label']}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom: About */}
                <div className={styles['about-row']}>
                    <div className={styles['about-text']}>
                        <p>
                            I'm a Product, UI/UX Designer with 5+ years of experience creating user-centered digital products.
                        </p>
                        <p>
                            Throughout my career, I've collaborated with stakeholders, developers, and cross-functional teams to transform complex ideas into clear, functional solutions.
                        </p>
                        <p>
                            I've worked on a wide range of projects – from medical, investment platforms and mobile applications to large-scale admin dashboards.
                        </p>
                    </div>
                    <div className={styles['about-cards']}>
                        <div className={styles['about-card']}>
                            <span className={styles['card-number']}>01</span>
                            <span className={styles['card-text']}>Currently based in Berlin</span>
                        </div>
                        <div className={styles['about-card']}>
                            <span className={styles['card-number']}>02</span>
                            <span className={styles['card-text']}>Focused on Design Systems & Scalable UX</span>
                        </div>
                        <div className={styles['about-card']}>
                            <span className={styles['card-number']}>03</span>
                            <span className={styles['card-text']}>"Observe, Design, Empower"</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
