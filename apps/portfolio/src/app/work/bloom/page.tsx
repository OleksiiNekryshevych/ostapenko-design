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
                                width={261}
                                height={242}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                        <h1 className={styles['project-title']}>Bloom</h1>
                    </div>
                    <div className={styles['text-block']}>
                        <p className={styles['block-text']}>
                            Bloom is a minimalist mental health companion designed to bridge the gap between "tracking data" and "understanding emotions.
                            Unlike traditional mood trackers that feel like spreadsheets, Bloom uses a tactile, color-driven interface to make emotional reflection a seamless part of a user’s daily ritual.
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Idea & Solution Cards */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles['intro-card']}>
                        <div className={styles['card-label']}>
                            <div className={styles['card-image']}>
                                <Image
                                    src={`${basePath}/bloom/bloom-logo.png`}
                                    alt="Bloom Logo"
                                    width={63}
                                    height={57}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <span className={styles['card-title']}>The Problem</span>
                        </div>
                        <div className={styles['card-content']}>
                            <ul className={styles['solution-list']}>
                                <li><strong>Lack of Context: </strong> Users see a "bad  mood" on a chart but don't understand the triggers behind it.</li>
                                <li><strong>Clinical Feel:</strong> Cold, sterile interfaces can make users feel like "patients" rather than people seeking growth</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles['intro-card']}>
                        <div className={styles['card-label']}>
                            <div className={styles['card-image']}>
                                <Image
                                    src={`${basePath}/bloom/bloom-logo.png`}
                                    alt="Bloom Logo"
                                    width={63}
                                    height={57}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <span className={styles['card-title']}>The Solution</span>
                        </div>
                        <div className={styles['card-content']}>
                            <p className={styles['block-text']}>
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
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles['section-heading']}>UX Design Strategy</h2>

                    <div className={styles['text-block']}>
                        <p className={styles['block-text']}>
                            Our goal was to simplify the start. I turned a difficult habit into something that takes almost no effort.
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

                    <h2 className={styles['section-heading']}>UI Design Strategy</h2>

                    <div className={styles['text-block']}>
                        <p className={styles['block-text']}>
                            The UI strategy was to create a "A quiet, safe space on your phone". Every visual element was chosen to reduce stress.
                        </p>
                        <ul className={styles['content-list']}>
                            <li>
                                <span className={styles['list-label']}>Soft Minimalism:</span> We used large border radius (rounded corners) and generous white space.
                            </li>
                            <li>
                                <span className={styles['list-label']}>Tactile Feedback:</span> I designed the UI to feel "physical".
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Customer Journey Map */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Customer Journey Map</h2>

                    <p className={styles['block-text']}>
                        Scenario: <strong>Sarah (27, Marketing Manager) feels overwhelmed by work stress and wants a quick way to track her mood and reflect on her day without adding to her mental load.</strong>
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

            {/* Component analitics */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Competitors Analysis</h2>

                    <div className={styles['text-block']}>
                        <p className={styles['block-text']}>
                            UX Research Insights
                        </p>
                        <ul className={styles['content-list']}>
                            <li>
                                <span className={styles['list-label']}>Making Habits Easy:</span> Most people quit mood tracking because it feels like a chore. Bloom was designed to be finished in under 15 seconds so it’s easy to do every day without feeling like work;
                            </li>
                            <li>
                                <span className={styles['list-label']}>A Friend, Not a Tool:</span> Many health apps feel cold, like a doctor's office. We used a 3D character that reacts to your mood to make the app feel like a supportive friend, which keeps users coming back;
                            </li>
                            <li>
                                <span className={styles['list-label']}>Freedom of actions:</span> You are rarely just "happy" or "sad." Our sliders let you log mixed emotions – like feeling joyful but stressed at the same time – because that’s how real life actually works.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Colors Section */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Colors</h2>

                    <p className={styles['block-text']}>
                        I chose these colors to create a warm, grounding atmosphere that feels more like a cozy paper journal than a cold screen. The soft cream and deep blue provide a calm, low-stress backdrop, while the golden amber adds a touch of optimism and focus.
                    </p>

                    <div className={`${styles['centered-image']} ${styles['colors-images-container']}`}>
                        <Image
                            src={`${basePath}/bloom/1000010063.png`}
                            alt="Customer Journey Map"
                            width={1200}
                            height={600}
                            className={styles['screen-preview']}
                        />
                    </div>



                </div>
            </section>

            {/* Typography Section */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Font</h2>

                    <p className={styles['block-text']}>
                        I chose Satoshi because its clean, modern design makes the text very easy to read and keeps the interface looking organized. Its balanced style feels professional yet friendly, perfectly matching the app's calm and simple vibe.
                    </p>

                    <p className={styles['block-text']}>
                        <span className={styles.highlight}>Typeface:</span> Satoshi<br />
                        <span className={styles.highlight}>Category:</span> sans
                    </p>
                </div>
            </section>

            {/* Screens Section */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Screens & Flows</h2>
                    <h3 className={styles['block-title']}>Splash, Sign Up & Onboarding</h3>


                    <p className={styles['block-text']}>
                        The Bloom onboarding flow utilizes a frictionless strategy, prioritizing social authentication to minimize the initial effort required from users. By implementing progressive disclosure, the registration process is divided into three manageable micro-steps to prevent users from feeling overwhelmed.
                    </p>

                    <div className={styles['screens-images-container']}>
                        <Image
                            src={`${basePath}/bloom/flows-1.jpg`}
                            alt="Mood Tracking Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                        <Image
                            src={`${basePath}/bloom/flows-2.jpg`}
                            alt="Mood Tracking Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                        <Image
                            src={`${basePath}/bloom/flows-3.jpg`}
                            alt="Flow 3"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                    {/* Mood Dashboard 1 */}
                    <div className={styles['screen-container']}>
                        <div className={styles['screen-description']}>
                            <div className={styles['screen-title']}>Mood</div>
                            <p className={styles['block-text']}>
                                The Mood Dashboard serves as a "Calm Hub" designed for immediate emotional clarity and low-friction engagement.
                            </p>

                            <ul className={styles['content-list']}>
                                <li>
                                    <span className={styles['list-label']}>Glanceable Data:</span> The central Mood Balance Ring provides an instant "Bright" vs. "Challenging" day ratio, offering high-level insights without complex analysis.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>Behavioral Correlation:</span> By visualizing Month Activities as varied bubbles, the UX naturally nudges users to link their habits—like walking or diet- to their emotional trends.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>Reduced Self-Judgment:</span> The use of empathetic language like "Challenging Days" instead of "Bad" creates a supportive environment that encourages honest tracking.
                                </li>
                            </ul>
                        </div>
                        <div className={styles['screen-image']}>
                            <Image
                                src={`${basePath}/bloom/muud.jpg`}
                                alt="Mood Tracking Screen"
                                width={245}
                                height={530}
                                className={styles['screen-preview']}
                            />
                        </div>
                    </div>

                    {/* 2 */}
                    <div className={styles['screen-container']}>
                        <div className={styles['screen-description']}>
                            <div className={styles['screen-title']}>Journal History</div>
                            <p className={styles['block-text']}>
                                The History screen is a simple place to look back on past entries. It’s designed to help users quickly find specific days and easily see how their mood has changed over time.
                            </p>

                            <ul className={styles['content-list']}>
                                <li>
                                    <span className={styles['list-label']}>Search Functionality:</span> A prominent, clean search bar at the top allows users to find specific memories or triggers instantly by keyword.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>Mood-Based Filtering:</span> Users can filter their entire history by specific emotional states.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>UX Goal:</span> This allows users to quickly find "Bright Days" for a mood boost or analyze "Challenging Days" to identify recurring negative patterns.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>Visual Hierarchy:</span> Every entry is a clean card that summarizes your day.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>Immediate Context:</span> You can see your mood, date, and notes all at once without clicking.
                                </li>
                            </ul>
                        </div>
                        <div className={styles['screen-image']}>
                            <Image
                                src={`${basePath}/bloom/journal-history.jpg`}
                                alt="Journal History"
                                width={245}
                                height={530}
                                className={styles['screen-preview']}
                            />
                        </div>
                    </div>

                    {/* 3 */}
                    <div className={styles['screen-container']}>
                        <div className={styles['screen-description']}>
                            <div className={styles['screen-title']}>Insights</div>
                            <p className={styles['block-text']}>
                                The Insights screen represents the "intelligence layer" of the Bloom app. The UX focus is on actionable data—transforming raw behavioral tracking into meaningful, easy-to-digest advice that helps users close the loop between reflection and improvement.
                            </p>

                            <ul className={styles['content-list']}>
                                <li>
                                    <span className={styles['list-label']}>Gamify Education:</span> Using progress bars and "completed" states.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>Support the User:</span> Providing value beyond just "tracking" by giving them the tools to improve.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>The Learning Library:</span> This section introduces educational content tailored to the user’s current emotional state.
                                </li>
                            </ul>
                        </div>
                        <div className={styles['screen-image']}>
                            <Image
                                src={`${basePath}/bloom/insights.jpg`}
                                alt="Insights"
                                width={245}
                                height={530}
                                className={styles['screen-preview']}
                            />
                        </div>
                    </div>

                    {/* 4 */}
                    <div className={styles['screen-container']}>
                        <div className={styles['screen-description']}>
                            <div className={styles['screen-title']}>Profile</div>
                            <p className={styles['block-text']}>
                                The Profile tab shows general user info and achievement badges. Users can see both their earned badges and the ones they haven't unlocked yet, which motivates them to keep tracking their mood.
                            </p>
                        </div>
                        <div className={styles['screen-image']}>
                            <Image
                                src={`${basePath}/bloom/profile.jpg`}
                                alt="Profile"
                                width={245}
                                height={530}
                                className={styles['screen-preview']}
                            />
                        </div>
                    </div>

                </div>

                <div className="container">
                    <div className={styles['screens-mood-tracking']}>
                        <div className={styles['screen-title']}>Mood Tracking Flow</div>
                        <p className={styles['block-text']}>
                            The Mood Tracking flow is designed to be the "heartbeat" of the Bloom app. The UX strategy focuses on emotional granularity and tactile engagement, moving away from simple "happy/sad" buttons to a more nuanced, multi-dimensional reflection.
                        </p>
                        <ul className={styles['content-list']}>
                            <li>
                                <span className={styles['list-label']}>Visualizing Complex Emotions:</span> Unlike traditional trackers that force a single mood choice, this interface uses multiple sliders for "Joyful," "Stressed," and "Sad."
                            </li>
                            <li>
                                <span className={styles['list-label']}>Dynamic Visual Feedback:</span> A large, 3D character in the center reacts in real-time to the slider positions.
                            </li>
                            <li>
                                <span className={styles['list-label']}>Frictionless Contextual Identification:</span> The "Choose what influenced your mood" screen uses a grid of large, tappable icons to identify external triggers without requiring manual typing.
                            </li>
                            <li>
                                <span className={styles['list-label']}>Visual Shorthand:</span> Using recognizable icons (Coffee, Sport, Conflicts) reduces the cognitive load on the user, allowing them to complete the context-setting phase in seconds.
                            </li>
                            <li>
                                <span className={styles['list-label']}>Progressive Disclosure:</span> The final step - adding a note - is presented only after the user has already engaged with the simpler, more visual steps.
                            </li>
                        </ul>

                        <div className={styles['screens-mood-tracking-image']}>
                            <Image
                                src={`${basePath}/bloom/mood-tracking-flow.jpg`}
                                alt="Mood Tracking Flow"
                                width={1168}
                                height={554}
                                className={styles['screen-preview']}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles['bye-section']}`}>
                <div className="container">
                    <Image
                        src={`${basePath}/bloom/bye-bye.png`}
                        alt="Bye Image"
                        width={622}
                        height={548}
                        className={styles['bye-image']}
                    />
                </div>
            </section>
        </main>
    );
}
