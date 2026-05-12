import { Link } from 'react-router-dom';
import './HomePage.css';
import { styles } from './styles';
import { strings } from './strings';

export default function HomePage() {
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
            <a className={styles.navLinkActive} href="#">{strings.nav.intro}</a>
            <Link className={styles.navLink} to="/projects">{strings.nav.work}</Link>
            <Link className={styles.navLink} to="/skills">{strings.nav.tech}</Link>
            <Link className={styles.navLink} to="/contact">{strings.nav.reach}</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.availableBadge}>
              <span className={styles.availableDot}></span>
              <span className={styles.availableText}>{strings.hero.availableBadge}</span>
            </div>
            <div className={styles.headingGroup}>
              <h2 className={styles.heroSubheading}>{strings.hero.subheading}</h2>
              <h1 className={styles.heroTitle}>
                {strings.hero.titlePrefix} <br />
                <span className={styles.heroTitleAccent}>{strings.hero.titleAccent}</span>
              </h1>
            </div>
            <p className={styles.heroDescription}>
              {strings.hero.descriptionPrefix}{' '}
              <span className={styles.heroPrimaryAccent}>{strings.hero.descriptionScalability}</span>,{' '}
              <span className={styles.heroSecondaryAccent}>{strings.hero.descriptionPrecision}</span>.{' '}
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.ctaButton} to="/projects">
                {strings.hero.ctaButton}
                <span className={styles.ctaButtonIcon} data-icon="arrow_forward">arrow_forward</span>
              </Link>
              <div className={styles.socialLinks}>
                <a
                  className={styles.socialLink}
                  href="https://bcert.me/bc/html/profile.jsp?k=jjhrguh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.socialLinkIcon} data-icon="android">android</span>
                </a>
              </div>
            </div>
          </div>

          {/* Asymmetric Visual Element */}
          <div className={styles.heroVisual}>
            <div className={styles.heroImageWrapper}>
              {/* Geometric Frame */}
              <div className={styles.geometricFrame1}></div>
              <div className={styles.geometricFrame2}></div>
              <div className={styles.heroImageContainer}>
                <img
                  alt={strings.hero.imageAlt}
                  className={styles.heroImage}
                  data-alt={strings.hero.imageDataAlt}
                  src={strings.hero.imageSrc}
                />
                <div className={styles.heroImageCaption}>
                  <div className={styles.heroImageCaptionLabel}>{strings.hero.captionLabel}</div>
                  <div className={styles.heroImageCaptionText}>{strings.hero.captionText}</div>
                </div>
              </div>
              {/* Floating Data Points */}
              <div className={styles.floatingBadge} style={{ animationDuration: '4s' }}>
                <span className={styles.floatingBadgeIcon} data-icon="terminal">terminal</span>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className={styles.highlightsSection}>
          <div className={styles.highlightsList}>
            {strings.highlights.items.map((item, index) => (
              <div key={index} className={styles.highlightItem}>
                <h3 className={styles.highlightLabel}>{item.label}</h3>
                <p className={styles.highlightText}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bento Tech Grid Preview */}
        <section className={styles.bentoSection}>
          <div className={styles.bentoFeaturedStack}>
            {/* Featured Card (full width) */}
            <div className={styles.bentoCardFeaturedFull}>
              <img
                alt={strings.bento.featuredImageAlt}
                className={styles.bentoFeaturedImage}
                data-alt={strings.bento.featuredImageDataAlt}
                src={strings.bento.featuredImageSrc}
              />
              <div className={styles.bentoFeaturedContent}>
                <span className={styles.bentoFeaturedLabel}>{strings.bento.featuredLabel}</span>
                <h3 className={styles.bentoFeaturedTitle}>{strings.bento.featuredTitle}</h3>
                <p className={styles.bentoFeaturedDescription}>
                  {strings.bento.featuredDescription}
                </p>
              </div>
            </div>

            {/* Featured Card 2 (full width) */}
            <div className={styles.bentoCardFeaturedFull}>
              <img
                alt={strings.bento.featuredTwoImageAlt}
                className={styles.bentoFeaturedImage}
                data-alt={strings.bento.featuredTwoImageDataAlt}
                src={strings.bento.featuredTwoImageSrc}
              />
              <div className={styles.bentoFeaturedContent}>
                <span className={styles.bentoFeaturedLabel}>{strings.bento.featuredLabel}</span>
                <h3 className={styles.bentoFeaturedTitle}>{strings.bento.featuredTwoTitle}</h3>
                <p className={styles.bentoFeaturedDescription}>
                  {strings.bento.featuredTwoDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* BottomNavBar (Mobile Only) */}
      <footer className={styles.footer}>
        <div className={styles.footerNav}>
          <a className={styles.footerNavLinkActive} href="#">
            <span className={styles.footerNavIcon} data-icon="home" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className={styles.footerNavLabel}>{strings.nav.intro}</span>
          </a>
          <Link className={styles.footerNavLink} to="/projects">
            <span className={styles.footerNavIcon} data-icon="code">code</span>
            <span className={styles.footerNavLabel}>{strings.nav.work}</span>
          </Link>
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

      {/* Decorative Elements */}
      <div className={styles.decorLeft}></div>
      <div className={styles.decorRight}></div>
    </>
  );
}
