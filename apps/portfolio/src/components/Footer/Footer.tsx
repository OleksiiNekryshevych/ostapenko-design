import styles from './Footer.module.scss';

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={styles['site-footer']}>
            <div className="container footer-inner">
                <p>&copy; {year} Oleksii Ostapenko</p>
            </div>
        </footer>
    );
}
