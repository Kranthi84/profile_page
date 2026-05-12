export const styles = {
  // Header
  header:
    "fixed top-0 w-full z-50 bg-transparent backdrop-blur-2xl bg-opacity-80 shadow-[0_0_30px_rgba(0,245,255,0.08)]",
  headerInner: "flex justify-between items-center max-w-7xl mx-auto px-8 h-20",
  logoWrapper: "flex items-center gap-3",
  logoIcon: "material-symbols-outlined text-cyan-400",
  logoText:
    "font-['Space_Grotesk'] tracking-widest uppercase text-xl font-bold text-cyan-400 dark:text-cyan-300",
  nav: "hidden md:flex items-center gap-8",
  navLinkActive:
    "text-cyan-300 font-black border-b-2 border-cyan-400 font-['Space_Grotesk'] tracking-tight uppercase py-1",
  navLink:
    "text-slate-400 font-medium hover:text-cyan-200 transition-all duration-300 font-['Space_Grotesk'] tracking-tight uppercase py-1",

  // Main
  main: "relative min-h-screen mesh-gradient flex flex-col justify-center overflow-hidden",

  // Hero Section
  heroSection:
    "max-w-7xl mx-auto px-8 pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10",
  heroContent: "lg:col-span-8 space-y-8",
  availableBadge:
    "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/10 border border-secondary/20",
  availableDot: "w-2 h-2 rounded-full bg-secondary animate-pulse",
  availableText:
    "text-[10px] font-label font-bold uppercase tracking-[0.2em] text-secondary",
  headingGroup: "space-y-4",
  heroSubheading:
    "text-on-surface-variant font-headline text-xl md:text-2xl font-light tracking-tight",
  heroTitle:
    "text-display-lg text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-on-surface leading-[1.1] tracking-tighter",
  heroTitleAccent:
    "text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-secondary typewriter-cursor",
  heroDescription:
    "max-w-xl text-lg md:text-xl text-on-surface-variant leading-relaxed font-light",
  heroPrimaryAccent: "text-primary font-medium",
  heroSecondaryAccent: "text-secondary font-medium",
  heroActions: "flex flex-wrap items-center gap-6 pt-4",
  ctaButton:
    "px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-md hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all duration-500 active:scale-95 group flex items-center gap-2",
  ctaButtonIcon:
    "material-symbols-outlined group-hover:translate-x-1 transition-transform",
  socialLinks: "flex items-center gap-4",
  socialLink:
    "w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 hover:bg-surface-container-high transition-all text-on-surface-variant hover:text-primary",
  socialLinkIcon: "material-symbols-outlined text-2xl",

  // Hero Visual
  heroVisual: "lg:col-span-4 hidden lg:block relative",
  heroImageWrapper: "aspect-square relative flex items-center justify-center",
  geometricFrame1:
    "absolute inset-0 border-[1px] border-primary/20 rotate-12 scale-90 translate-x-8",
  geometricFrame2:
    "absolute inset-0 border-[1px] border-secondary/20 -rotate-6 scale-95 -translate-x-4",
  heroImageContainer:
    "w-full h-full relative z-10 overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl bg-surface-container-low",
  heroImage:
    "w-full h-full object-cover opacity-60 hover:scale-110 transition-transform duration-[2000ms]",
  heroImageCaption:
    "absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-surface-container/60 border-l-2 border-primary",
  heroImageCaptionLabel:
    "text-[10px] font-label text-primary-fixed uppercase tracking-widest mb-1",
  heroImageCaptionText: "font-headline text-sm text-on-surface font-bold",
  floatingBadge:
    "absolute -top-4 -right-4 p-4 bg-surface-container-high rounded-xl shadow-2xl border border-outline-variant/20 animate-bounce",
  floatingBadgeIcon: "material-symbols-outlined text-secondary text-3xl",

  // Highlights Section
  highlightsSection: "max-w-7xl mx-auto px-8 py-20 w-full",
  highlightsList: "grid grid-cols-1 md:grid-cols-2 gap-6",
  highlightItem:
    "p-6 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors group",
  highlightLabel: "text-primary font-headline font-bold text-lg mb-2",
  highlightText: "text-on-surface-variant leading-relaxed text-sm",

  // Bento Grid
  bentoSection: "max-w-7xl mx-auto px-8 py-32 w-full",
  bentoFeaturedStack: "flex flex-col gap-8",
  bentoGrid: "grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6",
  bentoCard1:
    "md:col-span-2 lg:col-span-2 p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors group",
  bentoCard1Icon: "material-symbols-outlined text-primary mb-6 text-4xl",
  bentoCardTitle: "font-headline text-xl font-bold mb-3",
  bentoCardText: "text-on-surface-variant text-sm leading-relaxed",
  bentoCardFeatured:
    "md:col-span-2 lg:col-span-3 lg:row-span-2 relative overflow-hidden bg-surface-container-high group",
  bentoCardFeaturedFull:
    "col-span-full relative overflow-hidden bg-surface-container-high group",
  bentoFeaturedImage:
    "absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-1000",
  bentoFeaturedContent: "relative z-10 p-10 flex flex-col",
  bentoFeaturedLabel:
    "text-secondary font-label font-bold text-xs tracking-widest uppercase mb-2",
  bentoFeaturedTitle: "font-headline text-3xl font-bold mb-4",
  bentoFeaturedDescription: "text-on-surface-variant w-full max-w-none",
  bentoFeaturedLink:
    "inline-flex items-center text-primary-fixed gap-2 hover:gap-4 transition-all",
  bentoFeaturedLinkIcon: "material-symbols-outlined",
  bentoStatCard1:
    "md:col-span-2 lg:col-span-1 bg-surface-container-lowest p-6 flex flex-col items-center justify-center text-center border-l border-primary/10",
  bentoStatValuePrimary: "text-4xl font-headline font-black text-primary mb-1",
  bentoStatLabel:
    "text-[10px] font-label text-on-surface-variant uppercase tracking-widest",
  bentoCard4:
    "md:col-span-2 lg:col-span-2 p-8 bg-surface-container-low hover:bg-surface-container-high transition-colors",
  bentoCard4Icon: "material-symbols-outlined text-secondary mb-6 text-4xl",
  bentoStatCard2:
    "md:col-span-2 lg:col-span-1 bg-surface-container-lowest p-6 flex flex-col items-center justify-center text-center border-r border-secondary/10",
  bentoStatValueSecondary:
    "text-4xl font-headline font-black text-secondary mb-1",

  // Footer / Bottom Nav
  footer:
    "md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pb-8 px-4",
  footerNav:
    "flex justify-around items-center w-[90%] max-w-md bg-[#0f1930]/80 backdrop-blur-3xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-2",
  footerNavLinkActive:
    "flex flex-col items-center justify-center bg-gradient-to-br from-cyan-400 to-cyan-600 text-[#060e20] rounded-xl px-5 py-2 scale-110 shadow-[0_0_15px_rgba(0,245,255,0.4)]",
  footerNavLink:
    "flex flex-col items-center justify-center text-slate-500 hover:text-cyan-400 px-4 py-2 transition-all duration-500",
  footerNavIcon: "material-symbols-outlined",
  footerNavLabel: "font-['Manrope'] uppercase tracking-[0.1em] text-[10px]",

  // Decorative
  decorLeft:
    "fixed top-1/4 -left-20 w-64 h-64 bg-primary/5 blur-[120px] pointer-events-none",
  decorRight:
    "fixed bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 blur-[120px] pointer-events-none",
} as const;
