import styles from './page.module.scss';
import { BackButton } from '../../../components/BackButton/BackButton';
import Image from 'next/image';

export const metadata = {
    title: 'Dostupno.UA | Alina Ostapenko',
    description: 'Dostupno.UA / OpenRoad - An accessibility-focused design project',
};

export default function DostupnoPage() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <main>
            {/* Back Button */}
            <div className="container">
                <BackButton />
            </div>

            {/* Header */}
            <header className={styles['project-header']}>
                <div className="container">
                    <div className={styles['header-content']}>
                        <Image
                            src={`${basePath}/dostupno/logo_title.svg`}
                            alt="Dostupno.UA"
                            width={400}
                            height={80}
                            style={{ maxWidth: '305px', width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </header>

            {/* Section: About */}
            <section className={styles.section}>
                <div className="container">
                    <p className={styles['block-text']}>
                        <span className={styles.highlight}>Dostupno.UA</span> is a prominent Ukrainian non-governmental organization (NGO) founded in 2015 by Dmytro Shchebetiuk.
                        The organization is a leading voice in the movement for a barrier-free environment.
                    </p>

                    <h3 className={styles['section-subtitle']}>What they do:</h3>
                    <p className={styles['block-text']}>
                        They perform accessibility audits of cities and businesses, provide consultations for infrastructure projects, and run motivational campaigns for people with disabilities (including war veterans) to encourage an active social life.
                    </p>

                    <h3 className={styles['section-subtitle']}>The Problem</h3>
                    <p className={styles['block-text']}>
                        While the organization fights for physical accessibility, their digital presence needs to reflect those same values - offering an intuitive, and highly accessible experience for all users.
                    </p>
                </div>
            </section>

            {/* Section: UX Goals */}
            <section className={styles['section-highlight']}>
                <div className="container">
                    <h3 className={styles['section-subtitle']}>UX Goals (The &quot;Why&quot;)</h3>

                    <p className={styles['block-text']}>
                        After reviewing the user experience, I found two big goals that our current layout makes too difficult to achieve.
                    </p>

                    <ol className={styles['ordered-list']}>
                        <li>
                            <div className={styles['ordered-title']}>Information Overload vs. Clarity</div>
                            <ul className={styles['nested-list']}>
                                <li>The Problem: The website is crowded with old content and long paragraphs. This clutter makes it hard for users to understand what DostupnoUA does and why it matters.</li>
                                <li>The UX Solution: Implement a Content Pruning strategy. By auditing and removing non-essential information, I made easier the user journey, allowing the most impactful stories and data to stand out.</li>
                            </ul>
                        </li>
                        <li>
                            <div className={styles['ordered-title']}>The &quot;Donations&quot; Flow</div>
                            <ul className={styles['nested-list']}>
                                <li>The Problem: The site is so cluttered with old content and long paragraphs that it&apos;s overwhelming. This &quot;noise&quot; stops new visitors from seeing how they can actually get involved or support organization.</li>
                                <li>The UX Solution: I redesign the site hierarchy to prioritize &apos;Support&apos; as a primary action. This involves implementing a &quot;sticky&quot; donation header and an updated &quot;Make a Donation&quot; page and flow, where users can discover information and options to make a donation or become a volunteer.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </section>

            {/* Section: Technical Audit */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles['screen-container']}>
                        <div className={styles['screen-description']}>
                            <h3 className={styles['section-subtitle']}>Technical Audit: Current Performance Baseline</h3>
                            <p className={styles['block-text']}>
                                The website currently demonstrates strong technical health, scoring in the &quot;Green&quot; zone (90+) across all key web vitals:
                            </p>
                            <ul className={styles['content-list']}>
                                <li>
                                    <span className={styles['list-label']}>Accessibility (98/100):</span> From a code perspective, the site is well-structured with proper labels and high color contrast.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>Performance (94/100):</span> The site loads efficiently with a low Time to Interactive (TTI), meaning users aren&apos;t waiting long for the page to become functional.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>Best Practices (100/100):</span> The site follows modern web security and code health standards.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>SEO (92/100):</span> The platform is well-optimized for search engines to discover its content.
                                </li>
                            </ul>
                        </div>
                        <div className={styles['screen-image']}>
                            <Image
                                src={`${basePath}/dostupno/1.jpg`}
                                alt="Technical Audit Performance Scores"
                                width={500}
                                height={400}
                                className={styles['screen-preview']}
                            />
                        </div>
                    </div>

                    <p className={styles['block-text']}>
                        My redesign bridges the gap between a technically &apos;perfect&apos; site and a functionally intuitive one. I am taking these strong technical foundations and applying UX improvements to solve the specific problems our users ran into.
                    </p>
                </div>
            </section>

            {/* Section: Problem & Solution Approach */}
            <section className={styles.section}>
                <div className="container">
                    <h3 className={styles['section-subtitle']}>The &quot;Problem &amp; Solution&quot; Approach</h3>

                    <div className={styles['screen-container']}>
                        <div className={styles['screen-description']}>
                            <p className={styles['block-text']}>
                                Users who are motivated to support the movement for accessibility are often lost in a sea of unnecessary information, resulting in loosing the donation page.
                            </p>
                        </div>
                        <div className={styles['screen-image']}>
                            <Image
                                src={`${basePath}/dostupno/2.jpg`}
                                alt="Problem and Solution Approach"
                                width={500}
                                height={400}
                                className={styles['screen-preview']}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Improvement Roadmap */}
            <section className={styles.section}>
                <div className="container">
                    <h3 className={styles['section-subtitle']}>Improvement Roadmap for Dostupno.UA</h3>

                    <div className={styles['comparison-table']}>
                        {/* Desktop header */}
                        <div className={styles['table-header']}>
                            <div className={styles['table-cell']}>Feature</div>
                            <div className={styles['table-cell']}>Competitor Inspiration</div>
                            <div className={styles['table-cell']}>Action for Dostupno.UA Redesign</div>
                        </div>

                        {/* Row 1 */}
                        <div className={styles['table-row']}>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Feature</span>
                                <span className={styles['cell-name-highlight']}>Call to Action (CTA)</span>
                            </div>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Competitor Inspiration</span>
                                <span>DRK / Volunteering UKR</span>
                            </div>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Action</span>
                                <span>Move &quot;Support&quot; (Donate) to a high-contrast button in the top right of the navigation bar. Make it &quot;Sticky&quot; so it stays visible during scroll.</span>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className={styles['table-row']}>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Feature</span>
                                <span className={styles['cell-name-highlight']}>Content Strategy</span>
                            </div>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Competitor Inspiration</span>
                                <span>Platforma Volunteer</span>
                            </div>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Action</span>
                                <span>Reduce home page text by 50%. Use Impact Metrics (e.g., &quot;150 Cities Audited&quot;) instead of long paragraphs to explain the organization&apos;s work.</span>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className={styles['table-row']}>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Feature</span>
                                <span className={styles['cell-name-highlight']}>Trust Signals</span>
                            </div>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Competitor Inspiration</span>
                                <span>Volunteering UKR</span>
                            </div>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Action</span>
                                <span>Add a &quot;Where your money goes&quot; infographic or a transparency section directly on the homepage to reduce hesitation.</span>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className={styles['table-row']}>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Feature</span>
                                <span className={styles['cell-name-highlight']}>Navigation</span>
                            </div>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Competitor Inspiration</span>
                                <span>Platforma Volunteer</span>
                            </div>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Action</span>
                                <span>Create a clear &quot;Start Here&quot; path. Instead of many equal menu items, use a visual hierarchy that guides the user to &quot;Find Accessible Places&quot; or &quot;Support Us.&quot;</span>
                            </div>
                        </div>

                        {/* Row 5 */}
                        <div className={styles['table-row']}>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Feature</span>
                                <span className={styles['cell-name-highlight']}>Visual Design</span>
                            </div>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Competitor Inspiration</span>
                                <span>Volunteering UKR</span>
                            </div>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Action</span>
                                <span>Replace generic/small photos with large, high-quality images of people to trigger empathy-driven giving.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Coming Soon */}
            <section className={styles['section-coming-soon']}>
                <div className="container">
                    <div className={styles['coming-soon-content']}>
                        <span className={styles['coming-soon-icon']}>🎨</span>
                        <h2 className={styles['coming-soon-title']}>Final Screens Coming Soon</h2>
                        <p className={styles['coming-soon-text']}>
                            The design implementation is currently in progress. Stay tuned for the final screens and interactive prototypes.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}
