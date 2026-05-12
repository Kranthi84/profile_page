import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { styles } from './styles';
import { strings } from './strings';
import './ContactPage.css';

export default function ContactPage() {
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
                        <Link className={styles.navLink} to="/projects">{strings.nav.work}</Link>
                        <Link className={styles.navLink} to="/skills">{strings.nav.tech}</Link>
                        <a className={styles.navLinkActive} href="#">{strings.nav.reach}</a>
                    </nav>
                </div>
            </header>

            <main className={styles.main}>
                {/* Ambient glows */}
                <div className={styles.ambientLeft} />
                <div className={styles.ambientRight} />

                <div className={styles.contentGrid}>
                    {/* Left editorial */}
                    <div className={styles.leftCol}>
                        <h1 className={styles.heroTitle}>
                            {strings.hero.titlePrefix}{' '}
                            <span className={styles.heroTitleAccent}>{strings.hero.titleAccent}</span>{' '}
                            {strings.hero.titleSuffix}
                        </h1>
                        <p className={styles.heroDesc}>{strings.hero.description}</p>

                        {/* Contact metadata */}
                        <div className={styles.metaList}>
                            {strings.contactMeta.map((item) => (
                                <div key={item.label} className={styles.metaItem}>
                                    <div className={styles.metaIconWrapper}>
                                        <span className={`${styles.metaIcon} ${item.colorClass}`} data-icon={item.icon}>
                                            {item.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <span className={styles.metaLabelText}>{item.label}</span>
                                        <span className={styles.metaValue}>{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.socialsRow}>
                            <div className={styles.socialsList}>
                                {strings.socials.links.map((link) => (
                                    <a key={link.icon} className={styles.socialMetaLink} href={link.href} target="_blank" rel="noreferrer">
                                        <div className={styles.metaIconWrapper}>
                                            {link.icon === 'github' ? (
                                                <FaGithub className={styles.socialBrandIcon} />
                                            ) : (
                                                <FaLinkedin className={styles.socialBrandIcon} />
                                            )}
                                        </div>
                                        <span className={styles.socialUrlText}>{link.href}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* BottomNavBar (Mobile Only) */}
            <footer className={styles.footer}>
                <div className={styles.footerNav}>
                    <Link className={styles.footerNavLink} to="/">
                        <span className={styles.footerNavIcon} data-icon="home">home</span>
                        <span className={styles.footerNavLabel}>{strings.nav.intro}</span>
                    </Link>
                    <Link className={styles.footerNavLink} to="/projects">
                        <span className={styles.footerNavIcon} data-icon="code">code</span>
                        <span className={styles.footerNavLabel}>{strings.nav.work}</span>
                    </Link>
                    <Link className={styles.footerNavLink} to="/skills">
                        <span className={styles.footerNavIcon} data-icon="psychology">psychology</span>
                        <span className={styles.footerNavLabel}>{strings.nav.tech}</span>
                    </Link>
                    <a className={styles.footerNavLinkActive} href="#">
                        <span
                            className={styles.footerNavIcon}
                            data-icon="mail"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            mail
                        </span>
                        <span className={styles.footerNavLabel}>{strings.nav.reach}</span>
                    </a>
                </div>
            </footer>

            {/* Background grid decoration */}
            <div className={styles.bgGrid}>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(#dee5ff 1px, transparent 1px), linear-gradient(90deg, #dee5ff 1px, transparent 1px)',
                        backgroundSize: '80px 80px',
                    }}
                />
            </div>
        </>
    );
}
