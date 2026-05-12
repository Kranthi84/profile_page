export const styles = {
  // Header
  header:
    "fixed top-0 w-full z-50 bg-transparent backdrop-blur-2xl bg-opacity-80 shadow-[0_0_30px_rgba(0,245,255,0.08)]",
  headerInner: "flex justify-between items-center max-w-7xl mx-auto px-8 h-20",
  logoWrapper: "flex items-center gap-3",
  logoIcon: "material-symbols-outlined text-cyan-400",
  logoText:
    "font-['Space_Grotesk'] tracking-widest uppercase text-xl font-bold text-cyan-400 dark:text-cyan-300",
  nav: "hidden md:flex items-center gap-10",
  navLinkActive:
    "text-cyan-300 font-black border-b-2 border-cyan-400 font-['Space_Grotesk'] tracking-tight uppercase",
  navLink:
    "text-slate-400 font-medium hover:text-cyan-200 transition-all duration-300 font-['Space_Grotesk'] tracking-tight uppercase",

  // Main
  main: "pt-32 pb-40 px-6 max-w-7xl mx-auto relative overflow-hidden",
  ambientLeft:
    "absolute -top-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none",
  ambientRight:
    "absolute top-1/2 -left-24 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none",
  contentGrid: "grid lg:grid-cols-12 gap-16 relative z-10",

  // Left editorial
  leftCol: "lg:col-span-5 flex flex-col justify-center",
  statusBadge:
    "inline-block px-3 py-1 bg-secondary-container/20 rounded-full border border-secondary/10 mb-6 w-fit",
  statusBadgeText:
    "text-[10px] uppercase tracking-[0.2em] font-bold text-secondary font-label",
  heroTitle:
    "text-5xl md:text-7xl font-headline font-bold text-on-surface leading-[1.1] mb-8 tracking-tighter",
  heroTitleAccent:
    "text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-secondary",
  heroDesc: "text-lg text-on-surface-variant max-w-md leading-relaxed mb-12",

  // Contact metadata
  metaList: "space-y-8",
  metaItem: "flex items-start gap-6 group",
  metaIconWrapper:
    "w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center group-hover:scale-110 transition-transform duration-500",
  metaIcon: "material-symbols-outlined",
  metaLabelText:
    "block text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1",
  metaValue: "text-lg font-headline font-medium",

  // Right form card
  rightCol: "lg:col-span-7",
  formCard: "glass-card p-8 md:p-12 rounded-2xl shadow-2xl relative",
  formCardBorder:
    "absolute inset-0 rounded-2xl border border-outline-variant/15 pointer-events-none",
  form: "space-y-8",
  formRow: "grid md:grid-cols-2 gap-8",
  fieldGroup: "relative group",
  fieldLabel:
    "block text-[10px] uppercase tracking-[0.15em] font-extrabold text-on-surface-variant mb-3 group-focus-within:text-primary transition-colors",
  fieldInput:
    "w-full bg-surface-variant/40 border-0 border-b-2 border-outline-variant/30 px-0 py-3 text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-primary transition-all duration-300 bg-transparent outline-none",
  fieldSelect:
    "w-full bg-surface-variant/40 border-0 border-b-2 border-outline-variant/30 px-0 py-3 text-on-surface focus:ring-0 focus:border-primary transition-all duration-300 bg-transparent outline-none appearance-none",
  selectOption: "bg-surface-container",
  fieldTextarea:
    "w-full bg-surface-variant/40 border-0 border-b-2 border-outline-variant/30 px-0 py-3 text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-primary transition-all duration-300 bg-transparent outline-none resize-none",
  submitButton:
    "w-full py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_10px_40px_-10px_rgba(0,244,254,0.3)] hover:shadow-[0_15px_50px_-5px_rgba(0,244,254,0.5)]",
  submitIcon: "material-symbols-outlined text-xl",

  // Socials footer inside card
  socialsRow: "mt-8 pt-8 border-t border-outline-variant/10",
  socialsLabel:
    "text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant",
  socialsList: "space-y-4",
  socialMetaLink: "flex items-center gap-6 group",
  socialBrandIcon:
    "w-6 h-6 text-on-surface-variant group-hover:text-primary transition-colors duration-300",
  socialUrlText:
    "text-lg font-headline font-medium break-all text-on-surface-variant group-hover:text-primary transition-colors duration-300",

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

  // Background grid decoration
  bgGrid: "fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none",
} as const;
