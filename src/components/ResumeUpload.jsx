import { Upload, FileText, X } from 'lucide-react';
import { useState } from 'react';

const ResumeUpload = ({
  resumeText,
  setResumeText,
  onFileUpload,
  uploadedFile,
  onRemoveFile
}) => {
  const [isTextMode, setIsTextMode] = useState(false);

  const formatSize = (bytes) => {
    if (!bytes) return '';
    const kb = bytes / 1024;
    if (kb < 1024) return `${kb.toFixed(1)} KB`;
    return `${(kb / 1024).toFixed(1)} MB`;
  };
  
  const isFileMode = !!uploadedFile;

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 md:p-5 space-y-4 flex flex-col h-full">

      {/* Header */}
      <div>
        <h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-50">
          2. Add your resume
        </h2>
        <p className="text-xs md:text-sm text-slate-400 mt-1">
          Upload a PDF or paste plain text. Your information stays private and is only used for this analysis.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 flex-1">

        {/* LEFT SIDE */}
        {!uploadedFile ? (
          !isTextMode ? (
            /* NORMAL UPLOAD BOX */
            <label
              className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-slate-700 
                bg-slate-900/60 px-4 py-6 text-center hover:border-sky-500/70 hover:bg-slate-900 
                transition-colors cursor-pointer h-full relative"
            >
              <div className="h-10 w-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                <Upload className="text-slate-300 w-[17px] h-[17px]" />
              </div>

              <div className="space-y-1">
                <p className="text-xs font-medium text-slate-100">Drop your resume here</p>
                <p className="text-[11px] text-slate-400">PDF or DOC • Max 5 MB</p>
              </div>

              <span className="text-[11px] font-medium text-sky-300 underline underline-offset-4">
                Browse files
              </span>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={onFileUpload}
                className="hidden"
              />
            </label>
          ) : (
            /* DISABLED UPLOAD BOX */
            <div
              className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed 
                border-slate-700 bg-slate-900/40 px-4 py-6 text-center h-full opacity-40 cursor-not-allowed select-none"
            >
              <div className="h-10 w-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                <Upload className="text-slate-600 w-[17px] h-[17px]" />
              </div>
              <p className="text-xs text-slate-500">Upload disabled while text is entered</p>
            </div>
          )
        ) : (
          /* FILE PREVIEW BOX */
          <div
            className="relative flex flex-col items-center justify-center text-center gap-4 rounded-lg 
              border border-slate-700 bg-slate-900/70 px-4 py-6 shadow-inner h-full"
          >
            <button
              type="button"
              onClick={onRemoveFile}
              className="absolute top-3 right-3 p-1.5 rounded-md bg-slate-800/60 
                hover:bg-slate-700/80 transition-colors border border-slate-700"
            >
              <X className="w-4 h-4 text-red-400" />
            </button>

            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center">
                <FileText className="text-sky-300 w-6 h-6" />
              </div>

              <p className="text-sm font-medium text-slate-100">{uploadedFile.name}</p>
              <p className="text-[11px] text-slate-400">{formatSize(uploadedFile.size)}</p>
            </div>
          </div>
        )}

        {/* RIGHT SIDE — TEXTAREA */}
        <div className="flex flex-col gap-2 h-full">
          <label className="text-xs font-medium text-slate-300">Or paste your resume text</label>

          <textarea
            value={resumeText}
            onChange={(e) => {
              const value = e.target.value;
              setResumeText(value);
              setIsTextMode(value.trim().length > 0);
            }}
            disabled={isFileMode}
            placeholder="Paste your resume here — we'll extract skills, tools, and responsibilities."
            className={`
              w-full flex-1 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2.5 
              text-xs md:text-sm placeholder:text-slate-500 text-slate-100 outline-none 
              focus-visible:border-sky-500 focus-visible:ring-1 focus-visible:ring-sky-500/60 transition-colors 
              resize-none min-h-[200px]
              ${isFileMode ? "opacity-40 cursor-not-allowed" : ""}
            `}
          />

          <p className="text-[11px] text-slate-500">
            Tip: A recent LinkedIn profile export works well too.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ResumeUpload;