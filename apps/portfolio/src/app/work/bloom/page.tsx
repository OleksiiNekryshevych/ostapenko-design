import styles from './page.module.scss';
import { BackButton } from '../../../components/BackButton/BackButton';
import Image from 'next/image';

export const metadata = {
    title: 'Bloom | Alina Ostapenko',
    description: 'Bloom - A wellbeing and mental health mobile application',
};

export default function BloomPage() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <main className={styles['project-page']}>
            {/* Back Button */}
            <div className="container">
                <BackButton />
            </div>

            {/* Header */}
            <header className={styles['project-header']}>
                <div className="container">
                    <div className={styles['header-content']}>
                        <div className={styles['logo-wrapper']}>
                            <Image
                                src={`${basePath}/bloom/bloom-logo.png`}
                                alt="Bloom Logo"
                                width={100}
                                height={100}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                        <h1 className={styles['project-title']}>Bloom</h1>
                    </div>
                    <p className={styles['project-subtitle']}>
                        A wellbeing and mental health mobile application
                    </p>
                </div>
            </header>

            {/* Main Idea & Solution Cards */}
            <section className={styles['intro-section']}>
                <div className="container">
                    <div className={styles['intro-card']}>
                        <div className={styles['card-label']}>
                            <span className={styles['card-number']}>01</span>
                            <span className={styles['card-title']}>Main idea</span>
                        </div>
                        <div className={styles['card-content']}>
                            <p>
                                Mental health awareness is growing, yet many struggle to find accessible, daily tools for emotional regulation. Bloom aims to bridge this gap.
                            </p>
                            <p>
                                The platform provides individuals with intuitive tracking and journaling features, helping users understand their emotional patterns and improve their mental wellbeing through consistent, small actions.
                            </p>
                        </div>
                    </div>

                    <div className={styles['intro-card']}>
                        <div className={styles['card-label']}>
                            <span className={styles['card-number']}>02</span>
                            <span className={styles['card-title']}>Solution</span>
                        </div>
                        <div className={styles['card-content']}>
                            <p>
                                Bloom is a comprehensive mobile companion for mental wellness. It solves the problem of disconnected self-care methods by centralizing:
                            </p>
                            <ul className={styles['solution-list']}>
                                <li><strong>Mood Tracking:</strong> Daily check-ins to monitor emotional states (Muud).</li>
                                <li><strong>Journaling:</strong> Structured and free-form writing to process thoughts.</li>
                                <li><strong>Insights:</strong> Data visualization to identify triggers and patterns over time.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* UX & UI Design Strategy */}
            <section className={styles['text-section']}>
                <div className="container">
                    <h2 className={styles['section-heading']}>UX & UI Design Strategy</h2>

                    <div className={styles['text-block']}>
                        <h3 className={styles['block-title']}>
                            <span className={styles['title-underline']}>User Experience (UX) Goal:</span> Reducing Cognitive Load
                        </h3>
                        <p className={styles['block-text']}>
                            My primary UX goal was to make self-care feel effortless and rewarding, not like another chore.
                        </p>
                        <ul className={styles['content-list']}>
                            <li>
                                <span className={styles['list-label']}>Flow:</span> I simplified the entry process. Checking in mood takes less than 10 seconds, encouraging daily consistency.
                            </li>
                            <li>
                                <span className={styles['list-label']}>Information Architecture:</span> I prioritized the most frequent actions (Check-in, Journal) on the home screen while keeping deeper analytics accessible but not overwhelming.
                            </li>
                        </ul>
                    </div>

                    <div className={styles['text-block']}>
                        <h3 className={styles['block-title']}>
                            <span className={styles['title-underline']}>User Interface (UI) Goal:</span> Warmth & Positivity
                        </h3>
                        <p className={styles['block-text']}>
                            The interface is designed to feel like a warm embrace—supportive, bright, and optimistic.
                        </p>
                        <ul className={styles['content-list']}>
                            <li>
                                <span className={styles['list-label']}>Color Palette:</span> I utilized a warm yellow primary color (#FFB700) to evoke happiness, energy, and optimism, avoiding the clinical blues often found in medical apps.
                            </li>
                            <li>
                                <span className={styles['list-label']}>Typography:</span> Rounded, friendly typography reinforces the approachable and non-judgmental nature of the application.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Customer Journey Map */}
            <section className={styles['text-section']}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Customer Journey Map</h2>

                    <h3 className={styles['block-title']}><span className={styles['title-underline']}>The Bloom User Experience.</span></h3>

                    <p className={styles['block-text']}>
                        Scenario: Sarah (27, Marketing Manager) feels overwhelmed by work stress and wants a quick way to track her mood and reflect on her day without adding to her mental load.
                    </p>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/bloom/bloom-journey-map.jpg`}
                            alt="Customer Journey Map"
                            width={1200}
                            height={600}
                            className={styles['screen-preview']}
                        />
                    </div>
                </div>
            </section>

            {/* Colors Section */}
            <section className={styles['text-section']}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Colors</h2>

                    <p className={styles['block-text']}>
                        Color psychology plays a crucial role in Bloom. The palette is intentionally warm and uplifting to counteract feelings of stress or anxiety.
                    </p>

                    <p className={styles['block-text']}>
                        I chose a vibrant yellow as the foundation—symbolizing hope and clarity—supported by calming neutrals.
                    </p>

                    {/* Color 1 */}
                    <div className={styles['color-item']}>
                        <div className={styles['color-swatch-row']}>
                            <div className={styles['color-octagon']} style={{ backgroundColor: '#FFB700' }} />
                            <span className={styles['color-hex']}>#FFB700</span>
                        </div>
                        <p className={styles['block-text']}>
                            <span className={styles.highlight}>Role:</span> Primary Brand Color
                        </p>
                        <p className={styles['block-text']}>
                            <span className={styles.highlight}>Why:</span> This warm yellow is energetic and optimistic. It draws attention to key actions and creates a positive emotional association with the app.
                        </p>
                    </div>

                    {/* Color 2 */}
                    <div className={styles['color-item']}>
                        <div className={styles['color-swatch-row']}>
                            <div className={styles['color-octagon']} style={{ backgroundColor: '#FFF8E1' }} />
                            <span className={styles['color-hex']}>#FFF8E1</span>
                        </div>
                        <p className={styles['block-text']}>
                            <span className={styles.highlight}>Role:</span> Backgrounds & Accents
                        </p>
                        <p className={styles['block-text']}>
                            <span className={styles.highlight}>Why:</span> A very soft yellow tint that provides warmth without eye strain, serving as a comfortable background for long reading or journaling sessions.
                        </p>
                    </div>

                    {/* Color 3 - Dual colors */}
                    <div className={styles['color-item']}>
                        <div className={styles['color-swatch-row']}>
                            <div className={`${styles['color-octagon']} ${styles['color-octagon-first']}`} style={{ backgroundColor: '#FFF8E1' }} />
                            <div className={`${styles['color-octagon']} ${styles['color-octagon-second']}`} style={{ backgroundColor: '#FFFFFF' }} />
                            <span className={styles['color-hex']}>#FFF8E1</span>
                            <span className={styles['color-hex']}>#FFFFFF</span>
                        </div>
                        <p className={styles['block-text']}>
                            <span className={styles.highlight}>Role:</span> Cards & Surfaces
                        </p>
                        <p className={styles['block-text']}>
                            <span className={styles.highlight}>Why:</span> Layering white cards on soft yellow backgrounds creates depth and hierarchy, keeping the interface clean and organized while maintaining the warm brand personality.
                        </p>
                    </div>

                    <div className={styles['color-row']}>
                        <div className={styles['color-octagon-wraper']}>
                            <div className={styles['color-octagon']} style={{ backgroundColor: '#1A1A1A' }} />
                        </div>
                        <div className={styles['color-octagon-wraper']}>
                            <div className={styles['color-octagon']} style={{ backgroundColor: '#FFB700' }} />
                        </div>
                        <div className={styles['color-octagon-wraper']}>
                            <div className={styles['color-octagon']} style={{ backgroundColor: '#FFD54F' }} />
                        </div>
                        <div className={styles['color-octagon-wraper']}>
                            <div className={styles['color-octagon']} style={{ backgroundColor: '#FFF8E1' }} />
                        </div>
                        <div className={styles['color-octagon-wraper']}>
                            <div className={styles['color-octagon']} style={{ backgroundColor: '#8D6E63' }} />
                        </div>
                        <div className={styles['color-octagon-wraper']}>
                            <div className={styles['color-octagon']} style={{ backgroundColor: '#D7CCC8' }} />
                        </div>
                        <div className={styles['color-octagon-wraper']}>
                            <div className={styles['color-octagon']} style={{ backgroundColor: '#EFEBE9' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Typography Section */}
            <section className={styles['text-section']}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Typography</h2>

                    <p className={styles['block-text']}>
                        Typography in Bloom is designed to be readable and approachable. We avoid harsh, overly geometric fonts in favor of those with softer curves.
                    </p>

                    <p className={styles['block-text']}>
                        <span className={styles.highlight}>Typeface:</span> Plus Jakarta Sans<br />
                        <span className={styles.highlight}>Category:</span> Geometric Sans-Serif (Rounded feel)
                    </p>
                </div>
            </section>

            {/* Screens Section */}
            <section className={styles['text-section']}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Screens</h2>

                    <h3 className={styles['section-subtitle']}>Daily Check-in & Mood Tracking</h3>

                    <ul className={styles['content-list']}>
                        <li>
                            <span className={styles['list-label']}>Rapid entry:</span> Users can log their mood in seconds using the "Muud" slider, lowering the barrier to entry for daily tracking.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Visual Feedback:</span> The background color and animated characters adapt to the selected mood, providing immediate and empathetic visual feedback.
                        </li>
                    </ul>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/bloom/muud.jpg`}
                            alt="Mood Tracking Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                    <h3 className={styles['section-subtitle']}>Journaling & Reflection</h3>

                    <ul className={styles['content-list']}>
                        <li>
                            <span className={styles['list-label']}>Structured Prompts:</span> To prevent "blank page syndrome," Bloom offers guided questions for reflection.
                        </li>
                        <li>
                            <span className={styles['list-label']}>History View:</span> Users can scroll through their past entries to see their personal growth journey over time.
                        </li>
                    </ul>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/bloom/journal-history.jpg`}
                            alt="Journal History Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                    <h3 className={styles['section-subtitle']}>Personalized Insights</h3>

                    <ul className={styles['content-list']}>
                        <li>
                            <span className={styles['list-label']}>Data Visualization:</span> Weekly and monthly charts show mood trends, helping users correlate their feelings with events or habits.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Actionable Advice:</span> Based on the tracked data, the app suggests relevant articles or exercises to improve wellbeing.
                        </li>
                    </ul>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/bloom/insights.jpg`}
                            alt="Insights Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                    <h3 className={styles['section-subtitle']}>User Profile</h3>

                    <ul className={styles['content-list']}>
                        <li>
                            <span className={styles['list-label']}>Achievements:</span> Streaks and badges reward consistency, gamifying the self-care process.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Customization:</span> Users can personalize their app experience, themes, and notification preferences.
                        </li>
                    </ul>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/bloom/profile.jpg`}
                            alt="Profile Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                    {/* Flows */}
                    <h3 className={styles['section-subtitle']}>User Flows</h3>
                    <p className={styles['block-text']}>
                        Visualizing the path users take to complete key tasks ensures a logical and intuitive navigation experience.
                    </p>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/bloom/flows-1.jpg`}
                            alt="User Flows 1"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>
                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/bloom/flows-2.jpg`}
                            alt="User Flows 2"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>
                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/bloom/flows-3.jpg`}
                            alt="User Flows 3"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                </div>
            </section>

        </main>
    );
}
