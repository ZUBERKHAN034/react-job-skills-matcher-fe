const Footer = () => (
  <footer className="border-t border-slate-900/80 bg-slate-950/90 px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
    <p className="text-[11px] text-slate-500">
      This tool is here to support you—not to measure your value. Use it as a gentle guide while you
      grow and apply.
    </p>
    <div className="flex items-center gap-2 text-[11px] text-slate-500">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
      <span>Job Skills Analyzer - {new Date().getFullYear()}</span>
    </div>
  </footer>
);

export default Footer;