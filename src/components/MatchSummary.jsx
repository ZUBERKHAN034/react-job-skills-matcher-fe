import { Target } from 'lucide-react';

const MatchSummary = ({ matchPercentage }) => (
  <div className="rounded-lg border border-slate-800 bg-slate-950/80 px-3.5 py-3.5 flex items-center justify-between gap-3">
    <div className="flex items-start gap-3">
      <div className="h-9 w-9 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center">
        <Target className="w-4 h-4 text-emerald-400" />
      </div>
      <div>
        <p className="text-xs font-medium text-slate-200">Estimated match</p>
        <p className="text-[11px] text-slate-400 mt-0.5">
          This is an approximation to help you decide where to focus, not a verdict on your worth.
        </p>
      </div>
    </div>
<div className="text-right">
  <span className="text-2xl font-semibold tracking-tight text-emerald-400">
    {matchPercentage}%
  </span>

  <p className="text-[11px] text-slate-500">
    {matchPercentage <= 49 && "Poor — but you can still improve this with a few updates."}
    {matchPercentage >= 50 && matchPercentage <= 74 && "Good — you're on the right track."}
    {matchPercentage >= 75 && matchPercentage <= 84 && "Very good — you're aligned with most requirements."}
    {matchPercentage >= 85 && "Excellent — you're highly aligned with this role!"}
  </p>
</div>
  </div>
);

export default MatchSummary;