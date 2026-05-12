import { Link } from 'react-router-dom';
import { styles } from './styles';
import { strings } from './strings';
import resumePdf from '../../assets/Resume.pdf';
import './SkillsPage.css';

export default function SkillsPage() {
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
                        <a className={styles.navLinkActive} href="#">{strings.nav.tech}</a>
                        <Link className={styles.navLink} to="/contact">{strings.nav.reach}</Link>
                    </nav>
                </div>
            </header>

            <main className={styles.main}>
                {/* Hero */}
                <header className={styles.heroSection}>
                    <div className={styles.heroLeft}>
                        <h1 className={styles.heroTitle}>
                            <span className={styles.heroTitleLine1}>{strings.hero.titleLine1}</span>{' '}
                            <br />
                            <span className={styles.heroTitleLine2}>{strings.hero.titleLine2}</span>
                        </h1>
                        <p className={styles.heroDescription}>{strings.hero.description}</p>
                    </div>
                </header>

                <div className={styles.contentGrid}>
                    {/* Left: Work History Timeline */}
                    <section className={styles.timelineSection}>
                        <div className={styles.timelineHeader}>
                            <span className={styles.timelineIcon} data-icon="history">history</span>
                            <h2 className={styles.timelineSectionTitle}>{strings.workHistory.sectionLabel}</h2>
                        </div>
                        <div className={styles.timelineList}>
                            <div className={styles.timelineRail} />
                            {strings.workHistory.items.map((item) => (
                                <div key={item.period} className={styles.timelineItem}>
                                    <div className={item.current ? styles.timelineDotCurrent : styles.timelineDot} />
                                    <div className={styles.timelineItemContent}>
                                        <span className={item.current ? styles.timelinePeriodCurrent : styles.timelinePeriod}>
                                            {item.period}
                                        </span>
                                        <h3 className={styles.timelineItemTitle}>{item.title}</h3>
                                        <p className={styles.timelineCompany}>{item.company}</p>
                                        <p className={styles.timelineDesc}>{item.description}</p>
                                        {item.highlights && item.highlights.length > 0 && (
                                            <ul className={styles.timelineHighlightsList}>
                                                {item.highlights.map((point) => (
                                                    <li key={point} className={styles.timelineHighlightItem}>{point}</li>
                                                ))}
                                            </ul>
                                        )}
                                        <div className={styles.timelineTagList}>
                                            {item.tags.map((tag) => (
                                                <span key={tag} className={styles.timelineTag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Right: Core Stack */}
                    <section className={styles.stackSection}>
                        <div className={styles.stackHeader}>
                            <span className={styles.stackIcon} data-icon="psychology">psychology</span>
                            <h2 className={styles.stackSectionTitle}>{strings.coreStack.sectionLabel}</h2>
                        </div>

                        <div className={styles.skillGrid}>
                            {/* Primary skill bar card */}
                            <div className={styles.primaryCard}>
                                <div className={styles.primaryCardHeader}>
                                    <span className={styles.primaryCardName}>{strings.coreStack.primarySkill.name}</span>
                                    <span className={styles.primaryCardLevel}>{strings.coreStack.primarySkill.level}</span>
                                </div>
                                <div className={styles.primaryCardBarTrack}>
                                    <div className={`${styles.primaryCardBarFill} ${strings.coreStack.primarySkill.barWidth}`} />
                                </div>
                                <div className={styles.primaryCardSubTags}>
                                    {strings.coreStack.primarySkill.subTags.map((t) => (
                                        <span key={t} className={styles.primaryCardSubTag}>{t}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Small skill cards */}
                            {strings.coreStack.skillCards.map((card, i) => (
                                <div key={card.title} className={styles.skillCard}>
                                    <span
                                        className={i === 0 ? styles.skillCardIcon : styles.skillCardIconSecondary}
                                        data-icon={card.icon}
                                    >
                                        {card.icon}
                                    </span>
                                    <h4 className={styles.skillCardTitle}>{card.title}</h4>
                                    <div className={styles.skillCardTagList}>
                                        {card.tags.map((tag) => (
                                            <span key={tag} className={styles.skillCardTag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Tools & Methodologies */}
                            <div className={styles.toolsSection}>
                                <h3 className={styles.toolsLabel}>{strings.coreStack.toolsLabel}</h3>
                                <div className={styles.toolsList}>
                                    {strings.coreStack.tools.map((tool) => (
                                        <span key={tool} className={styles.toolChip}>{tool}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Resume CTA */}
                        <div className={styles.resumeCard}>
                            <div>
                                <h4 className={styles.resumeCardTitle}>{strings.resumeCta.title}</h4>
                                <p className={styles.resumeCardDesc}>{strings.resumeCta.description}</p>
                            </div>
                            <a
                                className={styles.resumeCardButton}
                                href={resumePdf}
                                download="Kranthi-Chinnakotla-Resume.pdf"
                                aria-label="Download resume"
                            >
                                <span className={styles.resumeCardButtonIcon} data-icon="download">download</span>
                            </a>
                        </div>
                    </section>
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
                    <a className={styles.footerNavLinkActive} href="#">
                        <span
                            className={styles.footerNavIcon}
                            data-icon="psychology"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            psychology
                        </span>
                        <span className={styles.footerNavLabel}>{strings.nav.tech}</span>
                    </a>
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
