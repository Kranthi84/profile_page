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
  main: "pt-32 pb-40 px-6 max-w-7xl mx-auto",

  // Hero
  heroSection:
    "mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8",
  heroLeft: "max-w-2xl",
  heroTitle:
    "text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface leading-none mb-6",
  heroTitleLine1: "block",
  heroTitleLine2: "text-primary-fixed",
  heroDescription:
    "text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed",

  // Two-column grid
  contentGrid: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24",

  // Work History (left column)
  timelineSection: "lg:col-span-7",
  timelineHeader: "flex items-center gap-4 mb-12",
  timelineIcon: "material-symbols-outlined text-primary text-3xl",
  timelineSectionTitle:
    "text-3xl font-headline font-bold uppercase tracking-tight",
  timelineList: "relative space-y-16",
  timelineRail:
    "absolute left-[11px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-primary/50 via-surface-variant to-transparent",
  timelineItem: "relative pl-12 group",
  timelineDotCurrent:
    "absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container border-2 border-primary-fixed z-10 group-hover:bg-primary-fixed transition-colors duration-500",
  timelineDot:
    "absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container border-2 border-outline-variant z-10 group-hover:border-primary-fixed transition-colors duration-500",
  timelineItemContent: "flex flex-col gap-2",
  timelinePeriodCurrent:
    "text-xs font-label font-bold text-secondary tracking-widest uppercase",
  timelinePeriod:
    "text-xs font-label font-bold text-on-surface-variant tracking-widest uppercase",
  timelineItemTitle: "text-2xl font-headline font-bold text-on-surface",
  timelineCompany: "text-primary-fixed text-lg font-medium",
  timelineDesc: "text-on-surface-variant mt-4 leading-relaxed max-w-lg",
  timelineHighlightsList:
    "mt-4 ml-5 list-disc space-y-2 text-on-surface-variant leading-relaxed max-w-2xl",
  timelineHighlightItem: "text-sm",
  timelineTagList: "flex flex-wrap gap-2 mt-4",
  timelineTag:
    "px-3 py-1 text-[10px] font-label bg-surface-container-high text-on-surface-variant rounded-full tracking-wider uppercase",

  // Core Stack (right column)
  stackSection: "lg:col-span-5 flex flex-col gap-8",
  stackHeader: "flex items-center gap-4 mb-4",
  stackIcon: "material-symbols-outlined text-secondary text-3xl",
  stackSectionTitle:
    "text-3xl font-headline font-bold uppercase tracking-tight",
  skillGrid: "grid grid-cols-2 gap-4",

  // Primary skill card
  primaryCard:
    "col-span-2 glass-card p-8 rounded-xl flex flex-col gap-6 shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(105,246,184,0.1)] transition-all duration-500 group",
  primaryCardHeader: "flex justify-between items-center",
  primaryCardName: "font-headline font-bold text-xl uppercase tracking-tighter",
  primaryCardLevel:
    "text-secondary font-bold font-label text-xs uppercase tracking-widest",
  primaryCardBarTrack:
    "relative h-1 bg-surface-container-highest rounded-full overflow-hidden",
  primaryCardBarFill:
    "absolute left-0 top-0 h-full bg-gradient-to-r from-secondary to-primary group-hover:brightness-125 transition-all duration-700",
  primaryCardSubTags: "flex flex-wrap gap-2",
  primaryCardSubTag:
    "text-[10px] text-on-surface-variant font-label uppercase tracking-widest",

  // Small skill cards
  skillCard:
    "col-span-1 glass-card p-6 rounded-xl flex flex-col gap-4 hover:bg-surface-container-highest transition-colors duration-300",
  skillCardIcon: "material-symbols-outlined text-primary-fixed text-2xl",
  skillCardIconSecondary: "material-symbols-outlined text-secondary text-2xl",
  skillCardTitle: "font-headline font-bold uppercase text-sm tracking-tight",
  skillCardTagList: "flex flex-wrap gap-2 mt-auto",
  skillCardTag:
    "px-2 py-0.5 text-[9px] border border-outline-variant/20 rounded bg-surface-container-lowest text-on-surface-variant",

  // Tools section
  toolsSection: "col-span-2 mt-8",
  toolsLabel:
    "text-xs font-label font-black text-on-surface-variant uppercase tracking-[0.2em] mb-6",
  toolsList: "flex flex-wrap gap-3",
  toolChip:
    "px-4 py-2 bg-surface-container border border-outline-variant/10 rounded-lg text-sm font-medium hover:border-primary/50 transition-all cursor-default",

  // Resume CTA card
  resumeCard:
    "mt-12 p-8 rounded-xl bg-gradient-to-br from-surface-container-high to-surface-container flex items-center justify-between border-l-4 border-primary",
  resumeCardTitle: "font-headline font-bold text-lg mb-1",
  resumeCardDesc: "text-sm text-on-surface-variant",
  resumeCardButton:
    "w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary hover:scale-110 transition-transform shadow-[0_0_20px_rgba(161,250,255,0.3)]",
  resumeCardButtonIcon: "material-symbols-outlined",

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
    "fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10",
  decorRight:
    "fixed bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-secondary/5 blur-[100px] rounded-full pointer-events-none -z-10",
} as const;
