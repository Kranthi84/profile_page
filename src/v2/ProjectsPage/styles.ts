export const styles = {
  // Header (shared pattern)
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
  main: "relative mesh-gradient pb-28",

  // Hero
  heroSection: "max-w-7xl mx-auto px-6 pt-28 pb-10",
  heroLabel:
    "text-[10px] font-label font-bold uppercase tracking-[0.25em] text-secondary mb-4",
  heroTitle: "font-headline font-bold leading-[1.05] tracking-tight",
  heroTitleLine1: "block text-4xl md:text-6xl text-on-surface",
  heroTitleLine2:
    "block text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed italic",

  // Project list
  projectList: "max-w-7xl mx-auto px-0 md:px-6 space-y-0",

  // Project article
  article: "group",
  articleImageWrapper: "relative w-full aspect-[4/3] overflow-hidden",
  articleImage:
    "w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[1500ms]",
  articleImageOverlay:
    "absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent",
  articleBody:
    "px-6 py-8 bg-surface-container-low border-b border-outline-variant/20",
  articleBodyLast: "px-6 py-8 bg-surface-container-low",
  articleIndex:
    "text-[10px] font-label font-bold uppercase tracking-[0.2em] text-secondary mb-3",
  articleTitle:
    "font-headline text-3xl font-bold text-on-surface mb-3 leading-tight",
  articleDescription: "text-on-surface-variant text-sm leading-relaxed mb-5",
  tagList: "flex flex-wrap gap-2 mb-6",
  tag: "px-3 py-1 text-[10px] font-label font-bold uppercase tracking-widest border border-secondary/40 text-secondary rounded-full",
  ctaButton:
    "w-fit flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary font-label font-bold text-xs uppercase tracking-widest rounded-md hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all duration-500 active:scale-95 group/btn",
  ctaIcon:
    "material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform",

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
    "fixed bottom-1/4 -right-20 w-80 w-80 bg-secondary/5 blur-[120px] pointer-events-none",
} as const;
