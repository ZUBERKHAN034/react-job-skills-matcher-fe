const SkillList = ({ title, subtitle, icon: Icon, iconColor, skills, count }) => (
  <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-3.5 flex flex-col gap-2.5">
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
          <Icon className={`w-[14px] h-[14px] ${iconColor}`} />
        </div>
        <div>
          <p className="text-xs font-medium text-slate-200">{title}</p>
          <p className="text-[11px] text-slate-500">{subtitle}</p>
        </div>
      </div>
      <span className="text-[11px] text-slate-400">{count} skills</span>
    </div>
    <div className="flex flex-wrap gap-1.5 pt-1">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="px-2 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] text-slate-200"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillList;