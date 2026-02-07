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
        { src: `${basePath}/virtu-care/Home Appt 1.jpg`, alt: 'Home Appointments' },
        { src: `${basePath}/virtu-care/Health Hub 1.jpg`, alt: 'Health Hub' },
        { src: `${basePath}/virtu-care/Make aapt 1.jpg`, alt: 'Make Appointment' },
        { src: `${basePath}/virtu-care/Profile appt 1.jpg`, alt: 'Profile Appointments' },
        { src: `${basePath}/virtu-care/Chat_Virtu 1.jpg`, alt: 'Chat Feature' },
        { src: `${basePath}/virtu-care/Video call_Virtu.jpg`, alt: 'Video Call' },
    ];

    return (
        <main className={styles['project-page']}>
            {/* Header */}
            <header className={styles['project-header']}>
                <div className="container">
                    <BackButton />
                    <div className={styles['header-content']}>
                        <div className={styles['logo-wrapper']}>
                            <Image
                                src={`${basePath}/virtu-care/Group 8.svg`}
                                alt="VirtuCare Logo"
                                width={48}
                                height={48}
                            />
                        </div>
                        <h1 className={styles['project-title']}>VirtuCare</h1>
                    </div>
                </div>
            </header>

            {/* Hero Image */}
            <section className={styles['hero-section']}>
                <div className="container">
                    <div className={styles['hero-image']}>
                        <Image
                            src={`${basePath}/virtu-care/virtue care 1.jpg`}
                            alt="VirtuCare Hero"
                            width={1200}
                            height={600}
                            className={styles['full-width-image']}
                        />
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className={styles['content-section']}>
                <div className="container">
                    <h2 className={styles['section-title']}>Overview</h2>
                    <p className={styles['section-text']}>
                        VirtuCare is a comprehensive telehealth platform designed to connect patients with healthcare providers through seamless virtual consultations. The platform aims to make healthcare more accessible, efficient, and user-friendly for both patients and medical professionals.
                    </p>
                    <div className={styles['project-info']}>
                        {projectInfo.map((item) => (
                            <div key={item.label} className={styles['info-item']}>
                                <span className={styles['info-label']}>{item.label}</span>
                                <span className={styles['info-value']}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Problem */}
            <section className={styles['content-section']}>
                <div className="container">
                    <h2 className={styles['section-title']}>Problem</h2>
                    <p className={styles['section-text']}>
                        Traditional healthcare systems often present barriers to access, including long wait times, geographical limitations, and scheduling difficulties. Patients frequently struggle to find convenient ways to consult with healthcare providers, leading to delayed care and poor health outcomes.
                    </p>
                    <ul className={styles['bullet-list']}>
                        <li>Difficulty scheduling appointments with specialists</li>
                        <li>Long wait times for in-person consultations</li>
                        <li>Limited access for patients in rural areas</li>
                        <li>Fragmented communication between patients and providers</li>
                    </ul>
                </div>
            </section>

            {/* Goals */}
            <section className={styles['content-section']}>
                <div className="container">
                    <h2 className={styles['section-title']}>Goals & Assumptions</h2>
                    <div className={styles['goals-grid']}>
                        <div className={styles['goal-card']}>
                            <h3 className={styles['goal-title']}>Simplify Booking</h3>
                            <p className={styles['goal-text']}>
                                Create an intuitive appointment scheduling system that reduces friction and time to book.
                            </p>
                        </div>
                        <div className={styles['goal-card']}>
                            <h3 className={styles['goal-title']}>Enable Virtual Care</h3>
                            <p className={styles['goal-text']}>
                                Provide seamless video consultation experience with integrated chat and file sharing.
                            </p>
                        </div>
                        <div className={styles['goal-card']}>
                            <h3 className={styles['goal-title']}>Centralize Health Data</h3>
                            <p className={styles['goal-text']}>
                                Give patients easy access to their health records, prescriptions, and appointment history.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design System */}
            <section className={styles['content-section']}>
                <div className="container">
                    <h2 className={styles['section-title']}>Design System</h2>

                    <h3 className={styles['subsection-title']}>Color Palette</h3>
                    <div className={styles['colors-grid']}>
                        {colors.map((color) => (
                            <div key={color.name} className={styles['color-item']}>
                                <div
                                    className={styles['color-swatch']}
                                    style={{ backgroundColor: color.hex }}
                                />
                                <span className={styles['color-name']}>{color.name}</span>
                                <span className={styles['color-hex']}>{color.hex}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className={styles['subsection-title']}>Typography</h3>
                    <div className={styles['typography-showcase']}>
                        <div className={styles['type-sample']}>
                            <span className={styles['type-label']}>Heading</span>
                            <span className={styles['type-heading']}>Aa Bb Cc</span>
                        </div>
                        <div className={styles['type-sample']}>
                            <span className={styles['type-label']}>Body</span>
                            <span className={styles['type-body']}>Aa Bb Cc</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wireframes */}
            <section className={styles['content-section']}>
                <div className="container">
                    <h2 className={styles['section-title']}>Wireframes & Prototypes</h2>
                    <p className={styles['section-text']}>
                        The design process started with low-fidelity wireframes to establish the information architecture and user flows. These were iterated upon based on stakeholder feedback before moving to high-fidelity designs.
                    </p>
                    <div className={styles['wireframes-grid']}>
                        <div className={styles['wireframe-placeholder']}>
                            <span>Wireframe 1</span>
                        </div>
                        <div className={styles['wireframe-placeholder']}>
                            <span>Wireframe 2</span>
                        </div>
                        <div className={styles['wireframe-placeholder']}>
                            <span>Wireframe 3</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Designs */}
            <section className={styles['content-section']}>
                <div className="container">
                    <h2 className={styles['section-title']}>Final Designs</h2>
                    <p className={styles['section-text']}>
                        The final designs feature a clean, professional interface with a focus on usability and accessibility. The color palette conveys trust and professionalism while maintaining visual appeal.
                    </p>
                    <div className={styles['screens-grid']}>
                        {finalScreens.map((screen, index) => (
                            <div key={index} className={styles['screen-item']}>
                                <Image
                                    src={screen.src}
                                    alt={screen.alt}
                                    width={400}
                                    height={300}
                                    className={styles['screen-image']}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className={styles['content-section']}>
                <div className="container">
                    <h2 className={styles['section-title']}>Results & Takeaways</h2>
                    <p className={styles['section-text']}>
                        The VirtuCare platform successfully launched and received positive feedback from both patients and healthcare providers. Key achievements include:
                    </p>
                    <ul className={styles['bullet-list']}>
                        <li>40% reduction in average appointment booking time</li>
                        <li>95% user satisfaction rating for video consultations</li>
                        <li>Improved access for rural patients</li>
                        <li>Streamlined communication between patients and providers</li>
                    </ul>
                </div>
            </section>

            {/* Testimonial */}
            <section className={styles['testimonial-section']}>
                <div className="container">
                    <blockquote className={styles.testimonial}>
                        <p className={styles['testimonial-text']}>
                            "Working with the design team on VirtuCare was an exceptional experience. The attention to detail and user-centered approach resulted in a product that truly serves our patients' needs."
                        </p>
                        <footer className={styles['testimonial-author']}>
                            <Image
                                src={`${basePath}/virtu-care/Profikle 1.jpg`}
                                alt="Client"
                                width={64}
                                height={64}
                                className={styles['author-image']}
                            />
                            <div className={styles['author-info']}>
                                <span className={styles['author-name']}>Dr. Sarah Johnson</span>
                                <span className={styles['author-role']}>Medical Director, VirtuCare</span>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </section>
        </main>
    );
}
