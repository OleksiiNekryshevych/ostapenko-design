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
                                <span>Update structure and update hierarchy; put the most important info at the beginning to give the user a clear understanding of what the organization does.</span>
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

            <section className={styles.section}>
                <div className="container">
                    <h3 className={styles['section-subtitle']}>Home Page</h3>
                    <div className={`${styles['screen-container']} ${styles['screen-container-top']}`}>
                        <div className={styles['screen-description']}>
                            <h4 className={styles['screen-title']}>UX Strategy & Optimization</h4>
                            <ul className={styles['content-list']}>
                                <li>
                                    <span className={styles['list-label']}>Information Architecture Refactoring:</span> I restructured the complex content - into a clean, intuitive hierarchy. This ensures that users (veterans, business owners, and volunteers) can find relevant tools like the "Accessibility Bureau" .
                                </li>
                                <li>
                                    <span className={styles['list-label']}>Conversion-Centric Support Flows:</span> Recognizing that financial sustainability is key, I redesigned the "Support Us" section into high-conversion cards. By introducing a "Quick Support", I reduced friction, allowing users to choose between one-time donations (Mono, Privat, PayPal, Portmone) and recurring Patreon memberships with minimal cognitive load.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>Accessibility-First Navigation:</span> Beyond standard WCAG compliance, I focused on "low-mobility UX." This included large tap targets, high-contrast readability, and a logical flow that mirrors the physical ease of navigation the organization advocates for in the real world.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>Engagement Loops:</span> I implemented a "Share Your Story" feature, creating a user-generated content loop that increases time-on-site and provides authentic social proof for potential volunteers and donors.
                                </li>
                            </ul>
                        </div>
                        <div className={styles['screen-image']}>
                            <Image
                                src={`${basePath}/dostupno/dostupno_home.jpg`}
                                alt="Home page of dostupno.ua"
                                width={519}
                                height={1978}
                                className={styles['screen-preview']}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h3 className={styles['section-subtitle']}>Support Us</h3>
                    <div className={`${styles['screen-container']} ${styles['screen-container-top']}`}>
                        <div className={styles['screen-description']}>
                            <h4 className={styles['screen-title']}>UX Strategy & Optimization</h4>
                            <ul className={styles['content-list']}>
                                <li>
                                    <span className={styles['list-label']}>Frictionless Transaction Design:</span> I replaced the traditional, overwhelming list of bank requisites with a "Quick-Tap" interface. By categorizing payment methods (Monobank, Portmone, PayPal, Privat24), I reduced the user's cognitive load and time-to-donation.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>Copy-to-Clipboard Integration:</span> To solve the pain point of manual data entry, I added interactive "copy" icons next to card numbers and emails, ensuring 100% accuracy for mobile-first users.
                                </li>
                                <li>
                                    <span className={styles['list-label']}>Tiered Subscription Model (Patreon):</span> BI restructured the Patreon section into a tiered value proposition ("Panda's Friend" vs. "Become a Panda"). By visualizing these tiers with playful, relatable imagery, I shifted the user's perception from "giving money away" to "joining an exclusive community".
                                </li>
                            </ul>
                        </div>
                        <div className={styles['screen-image']}>
                            <Image
                                src={`${basePath}/dostupno/dostupno_payment.jpg`}
                                alt="Payment page of dostupno.ua"
                                width={519}
                                height={1098}
                                className={styles['screen-preview']}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h3 className={styles['section-subtitle']}>Accessibility Bureau</h3>
                    <div className={`${styles['screen-container']} ${styles['screen-container-top']}`}>
                        <div className={styles['screen-description']}>
                            <p className={styles['block-text']}>I structured the page to guide business owners through a logical funnel: identifying the problem, exploring specific solutions (Audits, Consultations, Training), and viewing proven success stories.</p>
                        </div>
                        <div className={styles['screen-image']}>
                            <Image
                                src={`${basePath}/dostupno/dostupno_accessibility.jpg`}
                                alt="Accessibility Bureau page of dostupno.ua"
                                width={519}
                                height={1098}
                                className={styles['screen-preview']}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h3 className={styles['section-subtitle']}>Dostupno Blog</h3>
                    <div className={`${styles['screen-container']} ${styles['screen-container-top']}`}>
                        <div className={styles['screen-description']}>
                            <p className={styles['block-text']}>I implemented a clean, flexible grid of content cards (design system components)  that maintains visual harmony despite varying image aspect ratios and headline lengths.</p>
                        </div>
                        <div className={styles['screen-image']}>
                            <Image
                                src={`${basePath}/dostupno/dostupno_blog.jpg`}
                                alt="Dostupno Blog page of dostupno.ua"
                                width={519}
                                height={964}
                                className={styles['screen-preview']}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles['section-bottom-content']}>
                        <Image
                            src={`${basePath}/dostupno/logo.svg`}
                            alt="Dostupno.UA"
                            width={400}
                            height={80}
                            style={{ maxWidth: '116px', width: '100%', height: 'auto' }}
                        />
                        <div>
                            <p className={styles['block-text']}>
                                Developed entirely on a volunteer basis, this redesign brought together senior-level talent to donate their expertise for social good. As the Senior Product Designer, I led the UX/UI strategy to ensure the organization’s digital tools <br /> are accessible and intuitive.
                            </p>
                            <p className={styles['block-text']}>
                                The design is currently being handed off to developers for a WordPress build, and an additional update for the Open Road <br /> project will follow shortly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}
