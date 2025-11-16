const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
        <span className="text-xs font-semibold tracking-[0.18em] text-sky-300">JS</span>
      </div>
      <div>
        <h1 className="text-lg md:text-xl font-semibold tracking-tight text-slate-50">
          Job Skills Analyzer
        </h1>
        <p className="text-xs md:text-sm text-slate-400">
          Gently helping you see how your experience aligns with the roles you're aiming for.
        </p>
      </div>
    </div>
    <div className="hidden md:flex items-center gap-3 text-xs text-slate-400">
      <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px] shadow-emerald-500/30"></span>
      <span>Ready to analyze your match</span>
    </div>
  </header>
);

export default Header;