'use client';

import React, { useEffect, useState } from 'react';
import { Cpu } from 'lucide-react';

interface AgentStage {
  name: string;
  progress: number;
  status: 'idle' | 'running' | 'completed';
}

const initialStages: AgentStage[] = [
  { name: 'Data Acquisition', progress: 100, status: 'completed' },
  { name: 'Structure–Function Modeling', progress: 85, status: 'running' },
  { name: 'Chemical Interaction Mapping', progress: 20, status: 'running' },
  { name: 'Literature Intelligence Retrieval', progress: 0, status: 'idle' },
  { name: 'Insight Synthesis Report', progress: 0, status: 'idle' }
];

export const AgentStatusPanel: React.FC = () => {
  const [stages, setStages] = useState<AgentStage[]>(initialStages);

  useEffect(() => {
    const timer = setInterval(() => {
      setStages((prev) =>
        prev.map((stage) => {
          if (stage.status === 'running') {
            const nextProgress = stage.progress + Math.floor(Math.random() * 8) + 1;
            if (nextProgress >= 100) {
              return { ...stage, progress: 100, status: 'completed' };
            }
            return { ...stage, progress: nextProgress };
          }
          if (stage.name === 'Literature Intelligence Retrieval' && prev[2].status === 'completed' && stage.status === 'idle') {
            return { ...stage, status: 'running', progress: 5 };
          }
          if (stage.name === 'Insight Synthesis Report' && prev[3].status === 'completed' && stage.status === 'idle') {
            return { ...stage, status: 'running', progress: 5 };
          }
          return stage;
        })
      );
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2 text-[#E3E9E8]">
        <Cpu size={16} className="text-[#4FD1C5]" />
        <h4 className="font-display font-bold text-sm">Active AI Agent Pipeline Status</h4>
      </div>

      <div className="flex flex-col gap-3">
        {stages.map((stage) => (
          <div key={stage.name} className="flex flex-col gap-1.5 p-3.5 bg-[#0F3A33] border border-[#4A6572]/35 rounded-xl">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#E3E9E8] font-sans">{stage.name}</span>
              <span className="font-mono text-[10px] text-[#4FD1C5] font-bold">
                {stage.status === 'completed' ? '100%' : `${stage.progress}%`}
              </span>
            </div>

            <div className="w-full h-1.5 bg-[#0B2B26] rounded-full overflow-hidden border border-[#4A6572]/30">
              <div
                className={`h-full transition-all duration-300 ${
                  stage.status === 'completed'
                    ? 'bg-[#4FD1C5]'
                    : stage.status === 'running'
                    ? 'bg-[#4FD1C5] animate-pulse'
                    : 'bg-transparent'
                }`}
                style={{ width: `${stage.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentStatusPanel;
