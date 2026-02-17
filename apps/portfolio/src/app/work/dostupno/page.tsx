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
                        {/* <div className={styles['logo-wrapper']}>
                            <Image
                                src={`${basePath}/dostupno/logo.png`}
                                alt="Dostupno Logo"
                                width={261}
                                height={242}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div> */}
                        <h1 className={styles['project-title']}>Dostupno.UA</h1>
                    </div>
                    <div className={styles['text-block']}>
                        <p className={styles['block-text']}>
                            {/* Project subtitle / description goes here */}
                        </p>
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

            {/* Section: Image */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Image Section</h2>

                    <div className={styles['centered-image']}>
                        {/* <Image
                            src={`${basePath}/dostupno/example.jpg`}
                            alt="Description"
                            width={1200}
                            height={600}
                            className={styles['screen-preview']}
                        /> */}
                    </div>
                </div>
            </section>

            {/* Section: Comparison Table */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Comparison</h2>

                    <h3 className={styles['block-title']}>Competitors</h3>

                    <div className={styles['comparison-table']}>
                        {/* Desktop header */}
                        <div className={styles['table-header']}>
                            <div className={styles['table-cell']}>Name</div>
                            <div className={styles['table-cell']}>Strength</div>
                            <div className={styles['table-cell']}>The Weakness</div>
                            <div className={styles['table-cell']}>The Opportunity</div>
                        </div>

                        {/* Row 1 */}
                        <div className={styles['table-row']}>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Name</span>
                                <span className={styles['cell-name']}>Competitor 1</span>
                            </div>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Strength</span>
                                <span>Strength description.</span>
                            </div>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Weakness</span>
                                <span><span className={styles['weakness-highlight']}>Weakness label:</span> Weakness description.</span>
                            </div>
                            <div className={styles['table-cell']}>
                                <span className={styles['cell-label']}>Opportunity</span>
                                <span>Opportunity description.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
