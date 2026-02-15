'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HeroStats.module.scss';
import { Section } from '../Section/Section';

interface Stat {
    number: string;
    label: string;
}

const stats: Stat[] = [
    { number: '5+', label: 'Work Experience' },
    { number: '7', label: 'Long term project' },
    { number: '20+', label: 'Short term projects' },
];

/**
 * Parse a stat string like "5+" or "20+" into its numeric value and suffix.
 */
function parseStat(value: string): { target: number; suffix: string } {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return { target: 0, suffix: '' };
    return { target: parseInt(match[1], 10), suffix: match[2] };
}

/**
 * Easing function (ease-out cubic) for a more natural feel.
 */
function easeOutQuart(t: number): number {
    return 1 - Math.pow(1 - t, 4);
}

const ANIMATION_DURATION_MS = 1500;

const STAGGER_DELAY_MS = 300;

function AnimatedNumber({ value, delay = 0 }: { value: string; delay?: number }) {
    const { target, suffix } = parseStat(value);
    const [display, setDisplay] = useState<string>(value); // SSR: real value
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // On hydration, reset to "0" so the count-up starts from zero
        // once the element enters the viewport.
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

                        if (progress < 1) {
                            requestAnimationFrame(step);
                        }
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

export function HeroStats() {
    return (
        <Section>
            <div className="container">
                <div className={styles['stats-grid']}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.stat}>
                            <AnimatedNumber value={stat.number} delay={index * STAGGER_DELAY_MS} />
                            <span className={styles['stat-label']}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
