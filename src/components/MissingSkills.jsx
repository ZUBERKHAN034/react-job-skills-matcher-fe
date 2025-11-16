import { AlertCircle, Sparkles } from 'lucide-react';

const MissingSkills = ({ skills }) => (
  <div className="mt-1 rounded-lg border border-slate-800 bg-slate-950/80 p-3.5 space-y-3">
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center">
          <AlertCircle className="w-[14px] h-[14px] text-amber-300" />
        </div>
        <div>
          <p className="text-xs font-medium text-slate-200">Gently missing skills</p>
          <p className="text-[11px] text-slate-500">
            These don't appear clearly yet. You may already have them—consider making them more visible.
          </p>
        </div>
      </div>
      <span className="text-[11px] text-slate-400">{skills.length} potential gaps</span>
    </div>

    <div className="flex flex-wrap gap-1.5">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-900 border border-amber-500/50 text-[11px] text-amber-100"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default MissingSkills;