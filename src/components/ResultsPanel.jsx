import { useState, useEffect } from 'react';
import { Briefcase, FileText, AlertTriangle, Sparkles, XCircle } from 'lucide-react';
import MatchSummary from './MatchSummary';
import SkillList from './SkillList';
import MissingSkills from './MissingSkills';

const ResultsPanel = ({ hasAnalyzed, analysisData, isAnalyzing, onRunAnalysis, isButtonDisabled, error }) => {
  const [currentDemoIndex, setCurrentDemoIndex] = useState(0);

  // Multiple demo objects
  const demoDataset = [
    {
      matchPercentage: 78,
      jobSkills: ['Roadmapping', 'Stakeholder management', 'A/B testing', 'SQL'],
      resumeSkills: ['Product discovery', 'Jira', 'SQL'],
      missingSkills: ['Product analytics dashboards', 'Partner alignment']
    },
    {
      matchPercentage: 64,
      jobSkills: ['React', 'TypeScript', 'Redux', 'REST APIs'],
      resumeSkills: ['JavaScript', 'React', 'Node.js', 'Git'],
      missingSkills: ['Redux Toolkit', 'Advanced TypeScript', 'API design patterns']
    },
    {
      matchPercentage: 92,
      jobSkills: ['Leadership', 'System design', 'Code reviews'],
      resumeSkills: ['Mentoring', 'Microservices', 'CI/CD'],
      missingSkills: ['Distributed caching', 'Observability best practices']
    }
  ];

  // Demo mode: rotate data every 5 seconds
  useEffect(() => {
    if (!hasAnalyzed) {
      const interval = setInterval(() => {
        setCurrentDemoIndex(prev => (prev + 1) % demoDataset.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [hasAnalyzed]);

  const displayData = hasAnalyzed && analysisData
    ? analysisData
    : demoDataset[currentDemoIndex];

  const safeDisplayData = {
    matchPercentage: displayData?.matchPercentage || 0,
    jobSkills: Array.isArray(displayData?.jobSkills) ? displayData.jobSkills : [],
    resumeSkills: Array.isArray(displayData?.resumeSkills) ? displayData.resumeSkills : [],
    missingSkills: Array.isArray(displayData?.missingSkills) ? displayData.missingSkills : [],
  };

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 md:p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-50">
            3. Results & insights
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            Once you add a job and resume, we'll highlight overlaps and gentle gaps—not as judgment,
            but as guidance.
          </p>
        </div>
        <button
          type="button"
          onClick={onRunAnalysis}
          disabled={isButtonDisabled}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-medium text-slate-950 shadow-sm shadow-sky-500/30 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-sky-500"
        >
          {isAnalyzing ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent"></div>
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Run analysis</span>
            </>
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/5 px-3.5 py-3 flex items-start gap-3">
          <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-medium text-red-200">Error</p>
            <p className="text-[11px] text-red-300/80 mt-0.5">
              {error}
            </p>
          </div>
        </div>
      )}

      {/* Demo mode indicator */}
      {!hasAnalyzed && (
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-3.5 py-3 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-medium text-amber-200">Showing rotating demo data</p>
            <p className="text-[11px] text-amber-300/80 mt-0.5">
              This rotates every few seconds to preview the interface. Click "Run Analysis" to see real results.
            </p>
          </div>
        </div>
      )}

      <MatchSummary matchPercentage={safeDisplayData.matchPercentage} />

      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>Skill coverage</span>
          <span>Job skills you already show</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-sky-400 transition-all duration-500"
            style={{ width: `${safeDisplayData.matchPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SkillList
          title="Extracted job skills"
          subtitle="Based on the role you provided"
          icon={Briefcase}
          iconColor="text-sky-300"
          skills={safeDisplayData.jobSkills}
          count={safeDisplayData.jobSkills.length}
        />
        <SkillList
          title="Extracted resume skills"
          subtitle="What you're already communicating"
          icon={FileText}
          iconColor="text-emerald-300"
          skills={safeDisplayData.resumeSkills}
          count={safeDisplayData.resumeSkills.length}
        />
      </div>

      <MissingSkills
        skills={safeDisplayData.missingSkills}
      />
    </section>
  );
};

export default ResultsPanel;