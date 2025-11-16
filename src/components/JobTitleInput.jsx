import { Search } from 'lucide-react';

const JobTitleInput = ({ jobTitle, setJobTitle }) => {
  const exampleJobs = ['Frontend Developer', 'Backend Developer', 'Product Manager', 'Software Engineer'];

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 md:p-5 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-50">
            1. Describe the role
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            Add a job title to explore the core skills typically expected for that role.
          </p>
        </div>
        <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/70 px-2.5 py-1 text-[11px] font-medium text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 mr-1.5"></span>
          Personalized
        </span>
      </div>

      <div className="space-y-3">
        <label className="block text-xs font-medium text-slate-300">Target Job Title</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-slate-500">
            <Search className="w-[15px] h-[15px]" />
          </span>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g. Senior Product Manager, Data Engineer, UX Designer"
            className="w-full rounded-lg border border-slate-800 bg-slate-900/70 px-9 py-2.5 text-sm placeholder:text-slate-500 text-slate-100 outline-none focus-visible:border-sky-500 focus-visible:ring-1 focus-visible:ring-sky-500/60 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        <span className="text-[11px] text-slate-500">Need ideas? Try:</span>
        {exampleJobs.map((job) => (
          <button
            key={job}
            type="button"
            onClick={() => setJobTitle(job)}
            className="text-[11px] px-2.5 py-1 rounded-full border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-sky-500/60 hover:text-sky-200 hover:bg-slate-900 transition-colors"
          >
            {job}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobTitleInput;