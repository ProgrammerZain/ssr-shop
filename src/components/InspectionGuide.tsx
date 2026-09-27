import React from "react";

export interface DemoQuestionsProps {
  executionLocation: string;
  apiRequestTime: string;
  isHtmlServerGenerated: boolean;
  browserReceives: string;
  networkTabOutput: string;
  jsRequiredInBrowser: boolean;
  isResultCached: string;
  dataRegenerationTime: string;
}

export interface InspectionStepsProps {
  viewSourceTip: string;
  networkTabTip: string;
  devToolsTip: string;
  serverTerminalTip: string;
}

interface InspectionGuideProps {
  questions: DemoQuestionsProps;
  inspectionSteps: InspectionStepsProps;
}

export function InspectionGuide({
  questions,
  inspectionSteps,
}: InspectionGuideProps) {
  return (
    <div className="space-y-6 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
      {/* Section 1: The 8 Core Architecture Questions */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-3">
          <span>🧠</span> Demo Architecture Deep Dive (8 Core Questions)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-sans uppercase text-[10px]">
              1. Execution Location
            </span>
            <div className="text-blue-400 font-bold">
              {questions.executionLocation}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-sans uppercase text-[10px]">
              2. API Request Timing
            </span>
            <div className="text-purple-400 font-bold">
              {questions.apiRequestTime}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-sans uppercase text-[10px]">
              3. Server-Generated HTML?
            </span>
            <div
              className={`font-bold ${
                questions.isHtmlServerGenerated
                  ? "text-emerald-400"
                  : "text-amber-400"
              }`}
            >
              {questions.isHtmlServerGenerated
                ? "YES — Complete HTML pre-rendered on server"
                : "NO — Minimal HTML shell sent"}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-sans uppercase text-[10px]">
              4. What Browser Receives
            </span>
            <div className="text-slate-200 font-semibold">
              {questions.browserReceives}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-sans uppercase text-[10px]">
              5. Browser Network Tab
            </span>
            <div className="text-slate-300 font-semibold">
              {questions.networkTabOutput}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-sans uppercase text-[10px]">
              6. JavaScript Required?
            </span>
            <div
              className={`font-bold ${
                questions.jsRequiredInBrowser
                  ? "text-amber-400"
                  : "text-emerald-400"
              }`}
            >
              {questions.jsRequiredInBrowser
                ? "YES — Client JS executes to fetch/render UI"
                : "NO — Content displays with JS disabled"}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-sans uppercase text-[10px]">
              7. Result Cached?
            </span>
            <div className="text-teal-400 font-bold">
              {questions.isResultCached}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-sans uppercase text-[10px]">
              8. When Data Regenerates
            </span>
            <div className="text-amber-300 font-bold">
              {questions.dataRegenerationTime}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: How To Inspect This Demo Checklist */}
      <div className="space-y-4 border-t border-slate-800 pt-5">
        <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <span>🔍</span> How to Inspect This Demo in Developer Tools
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
          <div className="p-4 rounded-lg bg-slate-950/50 border border-slate-800 space-y-1.5">
            <div className="font-bold text-blue-400 flex items-center gap-1.5">
              <span>📄</span> 1. View Source (Ctrl + U)
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {inspectionSteps.viewSourceTip}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/50 border border-slate-800 space-y-1.5">
            <div className="font-bold text-purple-400 flex items-center gap-1.5">
              <span>🌐</span> 2. Browser Network Tab
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {inspectionSteps.networkTabTip}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/50 border border-slate-800 space-y-1.5">
            <div className="font-bold text-emerald-400 flex items-center gap-1.5">
              <span>🛠️</span> 3. DevTools Elements Panel
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {inspectionSteps.devToolsTip}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/50 border border-slate-800 space-y-1.5">
            <div className="font-bold text-amber-400 flex items-center gap-1.5">
              <span>🖥️</span> 4. Server Terminal Logs
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {inspectionSteps.serverTerminalTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
