import styles from './page.module.scss';
import { BackButton } from '../../../components/BackButton/BackButton';
import Image from 'next/image';

export const metadata = {
    title: 'VirtuCare | Alina Ostapenko',
    description: 'VirtuCare - A telehealth and healthcare web application',
};

export default function VirtuCarePage() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    const projectInfo = [
        { label: 'Timeline', value: '3 months' },
        { label: 'Role', value: 'UX/UI Designer' },
        { label: 'Tools', value: 'Figma, FigJam, Miro' },
        { label: 'Team', value: '1 Designer, 2 Developers' },
    ];

    const colors = [
        { name: 'Primary', hex: '#E74C3C' },
        { name: 'Secondary', hex: '#3498DB' },
        { name: 'Accent', hex: '#2ECC71' },
        { name: 'Background', hex: '#F8F9FA' },
        { name: 'Text', hex: '#2C3E50' },
        { name: 'Muted', hex: '#95A5A6' },
    ];

    const finalScreens = [
        { src: `${basePath}/virtu-care/Home-Appt-1.jpg`, alt: 'Home Appointments' },
        { src: `${basePath}/virtu-care/Health-Hub-1.jpg`, alt: 'Health Hub' },
        { src: `${basePath}/virtu-care/Make-aapt-1.jpg`, alt: 'Make Appointment' },
        { src: `${basePath}/virtu-care/Profile-appt-1.jpg`, alt: 'Profile Appointments' },
        { src: `${basePath}/virtu-care/Chat_Virtu-1.jpg`, alt: 'Chat Feature' },
        { src: `${basePath}/virtu-care/Video-call_Virtu.jpg`, alt: 'Video Call' },
    ];

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
                                src={`${basePath}/virtu-care/Group-8.svg`}
                                alt="VirtuCare Logo"
                                width={137}
                                height={121}
                            />
                        </div>
                        <h1 className={styles['project-title']}>VirtuCare</h1>
                    </div>
                    <p className={styles['project-subtitle']}>
                        Experience quality care from the comfort of your own home
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
                                Telehealth websites and platforms are becoming increasingly important in today's healthcare landscape.
                            </p>
                            <p>
                                These platforms provide individuals with convenient and accessible options for receiving medical care and advice, allowing patients to connect with healthcare providers from the comfort of their own homes.
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
                                VirtueCare is an all-in-one health ecosystem designed to bridge the gap between clinical consultation and daily self-management. It solves the fragmentation problem by centralizing:
                            </p>
                            <ul className={styles['solution-list']}>
                                <li><strong>Synchronous Care:</strong> Video consultations (Telehealth).</li>
                                <li><strong>Asynchronous Care:</strong> Chat and file sharing.</li>
                                <li><strong>Self-Management:</strong> Medication tracking, symptom analytics, and educational content (Health Hub).</li>
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
                            <span className={styles['title-underline']}>User Experience (UX) Goal:</span> Reducing "Medical Anxiety"
                        </h3>
                        <p className={styles['block-text']}>
                            My primary UX goal was to reduce the friction and anxiety associated with medical management.
                        </p>
                        <ul className={styles['content-list']}>
                            <li>
                                <span className={styles['list-label']}>Flow:</span> I simplified the user journey for booking. As seen in the Doctor Profile screen, the decision matrix (Reviews + Bio + Calendar) is unified to prevent decision paralysis.
                            </li>
                            <li>
                                <span className={styles['list-label']}>Information Architecture:</span> I grouped complex medical data into digestible tabs (Treatment, Analytics, General Info) to prevent users from feeling overwhelmed by their own medical records.
                            </li>
                        </ul>
                    </div>

                    <div className={styles['text-block']}>
                        <h3 className={styles['block-title']}>
                            <span className={styles['title-underline']}>User Interface (UI) Goal:</span> Trust & Clarity via Data Visualization
                        </h3>
                        <p className={styles['block-text']}>
                            My primary UX goal was to reduce the friction and anxiety associated with medical management.
                        </p>
                        <ul className={styles['content-list']}>
                            <li>
                                <span className={styles['list-label']}>Color Palette:</span> I utilized a soft blue and white primary palette (evoking hygiene and trust) with pastel accents for categorization. This avoids the sterile, cold look of traditional hospital software.
                            </li>
                            <li>
                                <span className={styles['list-label']}>Typography:</span> A sans-serif typeface ensures high readability, which is crucial for accessibility in health tech.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Customer Journey Map */}
            <section className={styles['text-section']}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Customer Journey Map</h2>

                    <h3 className={styles['block-title']}><span className={styles['title-underline']}>The "VirtueCare" Patient Experience.</span></h3>

                    <p className={styles['block-text']}>
                        Scenario: Andrea (32, Hyperthyroidism) needs to book a follow-up for recurring symptoms and manage her ongoing treatment without disrupting her work week.
                    </p>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/virtu-care/virtue-care-1.jpg`}
                            alt="Customer Journey Map"
                            width={805}
                            height={500}
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
                        In telemedicine, color is functional, not just decorative. Patients often open health apps while feeling vulnerable, anxious, or unwell. Therefore, the UI must avoid over-stimulation and instead foster a sense of calm, hygiene, and professional reliability.
                    </p>

                    <p className={styles['block-text']}>
                        For VirtueCare, I chose a blue-monochromatic foundation—the industry standard for trust—paired with a specific functional red.
                    </p>

                    {/* Color 1 */}
                    <div className={styles['color-item']}>
                        <div className={styles['color-swatch-row']}>
                            <div className={styles['color-octagon']} style={{ backgroundColor: '#27577D' }} />
                            <span className={styles['color-hex']}>#27577D</span>
                        </div>
                        <p className={styles['block-text']}>
                            <span className={styles.highlight}>Role:</span> Primary Text & Branding
                        </p>
                        <p className={styles['block-text']}>
                            <span className={styles.highlight}>Why:</span> This deep blue serves as a softer, more approachable alternative to pure black for typography. It provides high WCAG (accessibility) contrast ratios for readability while projecting authority, stability, and medical expertise.
                        </p>
                    </div>

                    {/* Color 2 */}
                    <div className={styles['color-item']}>
                        <div className={styles['color-swatch-row']}>
                            <div className={styles['color-octagon']} style={{ backgroundColor: '#DEF1FF' }} />
                            <span className={styles['color-hex']}>#DEF1FF</span>
                        </div>
                        <p className={styles['block-text']}>
                            <span className={styles.highlight}>Role:</span> Active States & Primary Accents.
                        </p>
                        <p className={styles['block-text']}>
                            <span className={styles.highlight}>Why:</span> Used for buttons and active selections, this shade guides the user's eye without being aggressive. It bridges the gap between clinical sterility and a friendly, consumer-facing app experience.
                        </p>
                    </div>

                    {/* Color 3 - Dual colors */}
                    <div className={styles['color-item']}>
                        <div className={styles['color-swatch-row']}>
                            <div className={`${styles['color-octagon']} ${styles['color-octagon-first']}`} style={{ backgroundColor: '#EBF3F9' }} />
                            <div className={`${styles['color-octagon']} ${styles['color-octagon-second']}`} style={{ backgroundColor: '#F9FBFC' }} />
                            <span className={styles['color-hex']}>#EBF3F9</span>
                            <span className={styles['color-hex']}>#F9FBFC</span>
                        </div>
                        <p className={styles['block-text']}>
                            <span className={styles.highlight}>Role:</span> Backgrounds & Cards.
                        </p>
                        <p className={styles['block-text']}>
                            <span className={styles.highlight}>Why:</span> Pure white (#FFFFFF) can sometimes cause eye strain on digital screens, especially during late-night use. These subtle off-white and cool grey tones create a "clean" and "sterile" canvas that feels hygienic and organized, allowing the content (medical data) to breathe.
                        </p>
                    </div>

                    <div className={styles['color-row']}>
                        <div className={styles['color-octagon']} style={{ backgroundColor: '#0D0C0C' }} />
                        <div className={styles['color-octagon']} style={{ backgroundColor: '#CC3434' }} />
                        <div className={styles['color-octagon']} style={{ backgroundColor: '#D1ECE6' }} />
                        <div className={styles['color-octagon']} style={{ backgroundColor: '#FFE1C5' }} />
                        <div className={styles['color-octagon']} style={{ backgroundColor: '#DBD8FF' }} />
                        <div className={styles['color-octagon']} style={{ backgroundColor: '#FFF7BD' }} />
                        <div className={styles['color-octagon']} style={{ backgroundColor: '#FFE28C' }} />
                    </div>
                </div>
            </section>

            {/* Typography Section */}
            <section className={styles['text-section']}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Typography</h2>

                    <p className={styles['block-text']}>
                        In a data-heavy medical interface, legibility is the highest priority. Patients need to read dosages, lab results, and doctor's notes without ambiguity.
                    </p>

                    <p className={styles['block-text']}>
                        <span className={styles.highlight}>Typeface:</span> Plus Jakarta Sans<br />
                        <span className={styles.highlight}>Category:</span> Geometric Sans-Serif
                    </p>
                </div>
            </section>

            {/* Screens Section */}
            <section className={styles['text-section']}>
                <div className="container">
                    <h2 className={styles['section-heading']}>Screens</h2>

                    <h3 className={styles['section-subtitle']}>Patient Healthcare Dashboard</h3>

                    <ul className={styles['content-list']}>
                        <li>
                            <span className={styles['list-label']}>Fast Access to Care:</span> I put "Upcoming Appointments" at the very top so patients can join a video call in one click without searching through menus.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Comparison at a Glance:</span> Instead of making users click every doctor's profile, I built a "mini-calendar" into the search results so they can see who is free right now.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Smart Categorization:</span> I used "Popular Categories" (like Family Doctor or Vaccination) to help users who don't know exactly what they need yet, reducing their mental effort.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Building Trust:</span> By showing "Years of Experience" and "Reviews" upfront, I give users the data they need to feel safe and confident in their choice.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Easy Navigation:</span> The sidebar keeps the most important tools (like Chat and Medical History) always visible, so the user never feels lost.
                        </li>
                    </ul>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/virtu-care/Home-Appt-1.jpg`}
                            alt="Home Appointments Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                    {/* Doctor Profile & Appointment Scheduling */}
                    <h3 className={styles['section-subtitle']}>Doctor Profile & Appointment Scheduling</h3>

                    <ul className={styles['content-list']}>
                        <li>
                            <span className={styles['list-label']}>Trust-Building Layout:</span> I placed the doctor's credentials (years of experience, rating, and total patients) at the very top. This gives the user immediate confidence that the doctor is qualified before they even read the biography.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Time-Block Chunking:</span> To prevent "choice paralysis," I grouped available slots into Morning, Afternoon, and Evening sessions. This makes it much easier for a user to scan for a time that fits their specific daily routine (e.g., "I need something after work").
                        </li>
                        <li>
                            <span className={styles['list-label']}>Contextual Information:</span> By including a short "About" section and tabs for "Work Experience" and "Reviews," I keep the user on the page. They don't have to leave the booking flow to research the doctor elsewhere, which keeps the conversion rate high.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Effortless Date Selection:</span> I used a horizontal date picker that shows the next 7 days at a glance. This allows for quick "one-tap" switching between days without the clutter of a full-month calendar view.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Clear Feedback Loop:</span> The selected date (e.g., Apr 8) is highlighted with a high-contrast dark color. This provides clear "System Status" (Nielsen's 1st Heuristic), so the user always knows exactly which day they are currently viewing.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Logical Navigation:</span> The "Back to all doctors" link at the top acts as an emergency exit. If this specific doctor doesn't fit the user's schedule, they can return to their search results in one click without losing their place.
                        </li>
                    </ul>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/virtu-care/Make-aapt-1.jpg`}
                            alt="Doctor Profile & Appointment Scheduling Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                    {/* Patient Stats & Analytics */}
                    <h3 className={styles['section-subtitle']}>Patient Stats & Analytics</h3>

                    <ul className={styles['content-list']}>
                        <li>
                            <span className={styles['list-label']}>Progressive Information Disclosure:</span> Used a tabbed navigation system (Stats, Appointments, Personal Info, Insurance) to hide secondary data and prevent the user from feeling overwhelmed.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Trend Identification:</span> Visualized patient behavior through "Well-being distribution" and "Session activity" charts, shifting the user's role from a passive patient to an active participant in their health trends.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Mental Model Support:</span> Included a "Reasons for visits" tag cloud that uses font-size scaling to help patients quickly recall their most frequent health concerns and symptoms.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Data Glanceability:</span> Summarized historical data into high-level "Status Cards" (Total, Finished, and Canceled appointments) to provide an immediate snapshot of the user's healthcare journey.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Relationship Tracking:</span> Added a "Doctors visit history" section with percentage-based engagement bars to help patients track which specialists they see most frequently.
                        </li>
                    </ul>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/virtu-care/Profikle-1.jpg`}
                            alt="Patient Stats & Analytics Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                    {/* Appointment History */}
                    <h3 className={styles['section-subtitle']}>Appointment History</h3>

                    <ul className={styles['content-list']}>
                        <li>
                            <span className={styles['list-label']}>Temporal Separation:</span> I clearly divided "Upcoming" from "Past" appointments. This separates active tasks from historical records, so the user's "to-do list" is never cluttered by old data.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Information Consistency:</span> Every card uses the same layout—Time, Date, and Doctor Photo. This creates a "scanning pattern" where the user can find a specific past visit in seconds just by looking at the photos.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Status Clarity:</span> By listing the specific type of visit (e.g., "Consultation with psychologist"), I help the user differentiate between routine checkups and specialized care without needing to open the details.
                        </li>
                    </ul>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/virtu-care/Profile-appt-1.jpg`}
                            alt="Appointment History Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                    {/* Personal Info & Health Reports */}
                    <h3 className={styles['section-subtitle']}>Personal Info & Health Reports</h3>

                    <ul className={styles['content-list']}>
                        <li>
                            <span className={styles['list-label']}>Logical Information Chunking:</span> The page is split into two clear sections: Identity and Documentation. By placing static personal details (phone, email, address) at the top, I provide immediate context before the user dives into the more complex list of health reports.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Accessibility of Records:</span> Instead of burying medical files in a "Downloads" folder or a deep menu, I created a centralized Health Reports table. This allows patients to find specific results (like an "Annual Physical Exam") based on date or doctor name without opening multiple files.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Direct Action (Download Optimization):</span> I included a clear download icon for every report row. This reduces the "time-to-file," allowing users to save or print their results in one click, which is critical for patients who need to bring documents to offline appointments.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Scalable Navigation:</span> By using a persistent tab system (Stats, Appointments, Personal info, Insurance), I maintain a "Mental Map" for the user. They always know where they are in their profile, which reduces cognitive load when switching between looking at their data and their personal details.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Clean Hierarchy:</span> I used bold text for report titles to make the list easily "scannable." A user can find "Thyroid Ultrasound" at a glance because the typography prioritizes the most important information over secondary data like dates or doctor names.
                        </li>
                    </ul>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/virtu-care/Profile_Personal-info-1.jpg`}
                            alt="Personal Info & Health Reports Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                    {/* Health Status & Treatment Details */}
                    <h3 className={styles['section-subtitle']}>Health Status & Treatment Details</h3>

                    <ul className={styles['content-list']}>
                        <li>
                            <span className={styles['list-label']}>Condition-Based Tab System:</span> By organizing health data into tabs like "Hyperthyroidism" or "Depression," I allow patients to focus on one health concern at a time. This prevents the "wall of text" feeling common in medical portals.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Logical Content Chunking:</span> I divided the treatment page into clear sub-sections (Medications, Examinations, and History). This helps the user find exactly what they need—like how many pills to take—in under 3 seconds.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Clear Medication Instructions:</span> Instead of just listing drug names, I emphasized the timing and dosage (e.g., "in the morning and in the evening before food"). This directly addresses the most common user question: "When do I take this?"
                        </li>
                        <li>
                            <span className={styles['list-label']}>Temporal History (Timeline):</span> The right-hand column uses a vertical timeline for test results. This makes it easy for patients to see if their numbers (like TSH levels) are getting better or worse over several months without having to open separate files.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Actionable Summaries:</span> Under each test result, I included a "Summary" line. This translates complex medical data into a simple "Next Step" (e.g., "Thyroid blood test needed"), which reduces patient anxiety and gives them a clear path forward.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Contextual Details:</span> The "Thyroid Examination" card includes the clinic name and address. This ensures the patient has all the logistical info they need for their upcoming appointment in the same place they see their medical reason for going.
                        </li>
                    </ul>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/virtu-care/Health-Status-2.jpg`}
                            alt="Health Status & Treatment Details Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                    {/* Telemedicine Chat Interface */}
                    <h3 className={styles['section-subtitle']}>Telemedicine Chat Interface</h3>

                    <ul className={styles['content-list']}>
                        <li>
                            <span className={styles['list-label']}>Specialist Recognition:</span> Uses large doctor avatars to help patients quickly identify different specialists via visual memory.
                        </li>
                        <li>
                            <span className={styles['list-label']}>System Status:</span> Features "Online" and "Typing" indicators to manage user expectations and reduce anxiety during medical wait times.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Scannable Dialogue:</span> Employs color-coded message bubbles to create a clear visual hierarchy between doctor and patient responses.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Frictionless File Sharing:</span> Places attachment icons directly within the input field for immediate sharing of symptoms or lab results.
                        </li>
                    </ul>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/virtu-care/Chat_Virtu-1.jpg`}
                            alt="Telemedicine Chat Interface Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                    {/* Health Hub (Content & Wellness) */}
                    <h3 className={styles['section-subtitle']}>Health Hub (Content & Wellness)</h3>

                    <ul className={styles['content-list']}>
                        <li>
                            <span className={styles['list-label']}>Multi-Modal Learning:</span> Categorizes content by format (Articles, Podcasts, Recipes, Videos) to accommodate different user contexts and learning preferences.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Condition-Specific Personalization:</span> Prioritizes "Thyroid Health" content based on the user's medical profile, reducing information noise and increasing relevance.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Time-Managed Engagement:</span> Displays "Read/Watch Time" on every card, helping busy users decide if they have the capacity to engage before clicking.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Contextual Conversion:</span> Integrates discount banners for relevant lab tests directly within the health feed, turning information into actionable care.
                        </li>
                    </ul>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/virtu-care/Health-Hub-1.jpg`}
                            alt="Health Hub Screen"
                            width={805}
                            height={500}
                            className={styles['screen-preview']}
                        />
                    </div>

                    {/* Video Consultation */}
                    <h3 className={styles['section-subtitle']}>Video Consultation</h3>

                    <ul className={styles['content-list']}>
                        <li>
                            <span className={styles['list-label']}>Immersion & Focus:</span> Features a minimalist, edge-to-edge video layout to maintain a personal, "face-to-face" feel and minimize technical distractions.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Centered Control Hub:</span> Groups all essential call actions (Microphone, End Call, Camera) in a single bottom bar for fast, intuitive access during the session.
                        </li>
                        <li>
                            <span className={styles['list-label']}>Secondary Utility Access:</span> "View" (medical data) and "Chat" (messaging) are moved to the sides of the screen. This lets the patient look at their health info while still keeping their eyes on the doctor.
                        </li>
                    </ul>

                    <div className={styles['centered-image']}>
                        <Image
                            src={`${basePath}/virtu-care/Video-call_Virtu.jpg`}
                            alt="Video Consultation Screen"
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
