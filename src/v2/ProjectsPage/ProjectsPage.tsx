import { Link } from 'react-router-dom';
import { styles } from './styles';
import { strings } from './strings';
import MobilePaymentPDF from '../../assets/Mobile_Payment_Solutions.pdf';
import ImageClassificationPDF from '../../assets/ImageClassification.pdf';

export default function ProjectsPage() {
    return (
        <>
            {/* TopAppBar */}
            <header className={styles.header}>
                <div className={styles.headerInner}>
                    <div className={styles.logoWrapper}>
                        <span className={styles.logoIcon} data-icon="terminal">terminal</span>
                        <h1 className={styles.logoText}>{strings.logo}</h1>
                    </div>
                    <nav className={styles.nav}>
                        <Link className={styles.navLink} to="/">{strings.nav.intro}</Link>
                        <a className={styles.navLinkActive} href="#">{strings.nav.work}</a>
                        <Link className={styles.navLink} to="/skills">{strings.nav.tech}</Link>
                        <Link className={styles.navLink} to="/contact">{strings.nav.reach}</Link>
                    </nav>
                </div>
            </header>

            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.heroSection}>
                    <p className={styles.heroLabel}>{strings.hero.sectionLabel}</p>
                </section>

                {/* Project List */}
                <section className={styles.projectList}>
                    {strings.projects.map((project, i) => {
                        const isLast = i === strings.projects.length - 1;
                        return (
                            <article key={project.index} className={styles.article}>
                                {/* Info */}
                                <div className={isLast ? styles.articleBodyLast : styles.articleBody}>
                                    <p className={styles.articleIndex}>
                                        {project.index} / {project.category}
                                    </p>
                                    <h2 className={styles.articleTitle}>
                                        {project.title.split('\n').map((line, j) => (
                                            <span key={j}>
                                                {line}
                                                {j < project.title.split('\n').length - 1 && <br />}
                                            </span>
                                        ))}
                                    </h2>
                                    <p className={styles.articleDescription}>{project.description}</p>

                                    {/* Tags */}
                                    <div className={styles.tagList}>
                                        {project.tags.map((tag) => (
                                            <span key={tag} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    {i === 0 ? (
                                        <a
                                            href={MobilePaymentPDF}
                                            download="Mobile_Payment_Solutions.pdf"
                                            className={styles.ctaButton}
                                        >
                                            {project.cta}
                                            <span className={styles.ctaIcon} data-icon="chevron_right">chevron_right</span>
                                        </a>
                                    ) : i === 1 ? (
                                        <a
                                            href={ImageClassificationPDF}
                                            download="ImageClassification.pdf"
                                            className={styles.ctaButton}
                                        >
                                            {project.cta}
                                            <span className={styles.ctaIcon} data-icon="chevron_right">chevron_right</span>
                                        </a>
                                    ) : (
                                        <button className={styles.ctaButton}>
                                            {project.cta}
                                            <span className={styles.ctaIcon} data-icon="chevron_right">chevron_right</span>
                                        </button>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </section>
            </main>

            {/* BottomNavBar (Mobile Only) */}
            <footer className={styles.footer}>
                <div className={styles.footerNav}>
                    <Link className={styles.footerNavLink} to="/">
                        <span className={styles.footerNavIcon} data-icon="home">home</span>
                        <span className={styles.footerNavLabel}>{strings.nav.intro}</span>
                    </Link>
                    <a className={styles.footerNavLinkActive} href="#">
                        <span
                            className={styles.footerNavIcon}
                            data-icon="code"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            code
                        </span>
                        <span className={styles.footerNavLabel}>{strings.nav.work}</span>
                    </a>
                    <Link className={styles.footerNavLink} to="/skills">
                        <span className={styles.footerNavIcon} data-icon="psychology">psychology</span>
                        <span className={styles.footerNavLabel}>{strings.nav.tech}</span>
                    </Link>
                    <Link className={styles.footerNavLink} to="/contact">
                        <span className={styles.footerNavIcon} data-icon="mail">mail</span>
                        <span className={styles.footerNavLabel}>{strings.nav.reach}</span>
                    </Link>
                </div>
            </footer>

            {/* Decorative glows */}
            <div className={styles.decorLeft} />
            <div className={styles.decorRight} />
        </>
    );
}
