import { useState } from 'react';
import Header from './components/Header';
import JobTitleInput from './components/JobTitleInput';
import ResumeUpload from './components/ResumeUpload';
import ResultsPanel from './components/ResultsPanel';
import Footer from './components/Footer';
import { getJobSkills, parseResume, parseResumeText, compareSkills } from './services/jobMatcherService';

export default function App() {
  const [jobTitle, setJobTitle] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const onRemoveFile = () => {
  setUploadedFile(null);
  };

  const handleRunAnalysis = async () => {
    setIsAnalyzing(true);
    setError(null);
    
    try {
      // Step 1: Fetch job skills
      const jobSkillsData = await getJobSkills(jobTitle);
      
      // Step 2: Parse resume (either from file or text)
      let resumeSkillsData;
      if (uploadedFile) {
        resumeSkillsData = await parseResume(uploadedFile);
      } else if (resumeText) {
        resumeSkillsData = await parseResumeText(resumeText);
      }
      
      // Step 3: Analyze skills
      const comparisonData = await compareSkills(jobSkillsData, resumeSkillsData);
      
      // Ensure all required fields exist
      const safeAnalysisData = {
        matchPercentage: comparisonData.matchPercentage || 0,
        jobSkills: Array.isArray(comparisonData.jobSkills) ? comparisonData.jobSkills : [],
        resumeSkills: Array.isArray(comparisonData.resumeSkills) ? comparisonData.resumeSkills : [],
        missingSkills: Array.isArray(comparisonData.missingSkills) ? comparisonData.missingSkills : [],
        matchedSkills: Array.isArray(comparisonData.matchedSkills) ? comparisonData.matchedSkills : [],
        totalJobSkills: comparisonData.totalJobSkills || 0,
        totalResumeSkills: comparisonData.totalResumeSkills || 0,
      };
      
      // Set the analysis data
      setAnalysisData(safeAnalysisData);
      
      setHasAnalyzed(true);
    } catch (err) {
      console.error('Analysis error:', err);
      setError(err.response?.data?.error || err.response?.data?.message || err.message || 'Failed to analyze. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const isButtonDisabled = !jobTitle.trim() || (!uploadedFile && !resumeText.trim()) || isAnalyzing;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased flex">
      <div className="w-full flex flex-col">
        <div className="bg-slate-950/60 border-x border-slate-800 min-h-screen mx-auto max-w-[1920px] w-full flex flex-col">
          <Header />

          <div className="grid lg:grid-cols-[1.1fr,1fr] gap-6 p-4 md:p-6 lg:p-8 xl:p-12 flex-1">
            <section className="flex flex-col gap-6">
              <JobTitleInput
                jobTitle={jobTitle}
                setJobTitle={setJobTitle}
              />
              <ResumeUpload
                resumeText={resumeText}
                setResumeText={setResumeText}
                onFileUpload={handleFileUpload}
                uploadedFile={uploadedFile}
                onRemoveFile={onRemoveFile}
              />
            </section>

            <ResultsPanel
              hasAnalyzed={hasAnalyzed}
              analysisData={analysisData}
              isAnalyzing={isAnalyzing}
              onRunAnalysis={handleRunAnalysis}
              isButtonDisabled={isButtonDisabled}
              error={error}
            />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}