'use client';

import React, { useState, useEffect } from 'react';

const agentStages = [
  { id: 0, num: '01', title: 'Research Question', agent: 'Planner Agent', desc: 'Initializes query interface & decomposes target biological objectives.' },
  { id: 1, num: '02', title: 'Protein Identification', agent: 'Sequence Agent', desc: 'Isolates accession IDs & validates homologous domain alignments.' },
  { id: 2, num: '03', title: 'Knowledge Retrieval', agent: 'Curation Agent', desc: 'Queries UniProtKB curation, PubMed citations & genomic databases.' },
  { id: 3, num: '04', title: 'Structure Analysis', agent: 'Folding Agent', desc: 'Analyzes PDB geometries & AlphaFold 3D model fold overlays.' },
  { id: 4, num: '05', title: 'Mutation Interpretation', agent: 'Variant Agent', desc: 'Maps SNVs to active sites & calculates thermodynamic stability shifts.' },
  { id: 5, num: '06', title: 'AI Scientific Reasoning', agent: 'Synthesis Agent', desc: 'Consolidates multi-perspective agent evidence into active pathways.' },
  { id: 6, num: '07', title: 'Interactive Visualization', agent: 'Rendering Agent', desc: 'Deploys interactive 3D ribbon backbone overlays linked to residues.' },
  { id: 7, num: '08', title: 'Scientific Report & Insights', agent: 'Documentation Agent', desc: 'Compiles audit-ready research reports ready for export.' }
];

export const HowItWorksContent: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-advance neural cycle every 2.8s
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 8);
    }, 2800);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNodeClick = (id: number) => {
    setActiveStage(id);
    setIsAutoPlaying(false); // Pause auto-play when user manually interacts
  };

  // Geometry calculations for 8 radial nodes
  const size = 520;
  const center = size / 2;
  const radius = 195;

  const getNodeCoords = (idx: number) => {
    const angle = (idx / 8) * (2 * Math.PI) - Math.PI / 2;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle)
    };
  };

  const activeCoords = getNodeCoords(activeStage);
  const nextCoords = getNodeCoords((activeStage + 1) % 8);

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto flex flex-col items-center gap-10 bg-[#0B2B26] border-b border-[#4A6572]/35">
      
      {/* 1. Header */}
      <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#4FD1C5]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#4FD1C5] font-bold">
            Ecosystem Pipeline
          </span>
          <span className="h-[1px] w-8 bg-[#4FD1C5]" />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-[#E3E9E8]">
          From accession number to scientific report — no tab-switching.
        </h2>

        {/* Subtitle */}
        <div className="w-full max-w-2xl p-5 rounded-xl bg-[#0F3A33]/50 border border-[#4A6572]/30 text-left">
          <p className="text-xs md:text-sm text-[#E3E9E8]/90 leading-relaxed font-sans">
            Watch what happens the moment you submit a UniProt ID. Every stage below is a real step in the pipeline, not a marketing diagram — scroll to see each agent activate in sequence.
          </p>
        </div>
      </div>

      {/* 2. Single-Screen Neural Network View (DESKTOP & MOBILE) */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 my-4">
        
        {/* Radial Neural Network (Desktop >= 768px) */}
        <div className="hidden md:block relative w-[520px] h-[520px] shrink-0">
          
          {/* SVG Neural Connections & Traveling Spark Line */}
          <svg width={size} height={size} className="absolute inset-0 z-0 pointer-events-none">
            
            {/* Outer perimeter dashed ring */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="rgba(74, 101, 114, 0.35)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />

            {/* Inner cross-connecting neural lattice lines */}
            {agentStages.map((st) => {
              const current = getNodeCoords(st.id);
              const crossTarget = getNodeCoords((st.id + 4) % 8); // opposite node
              return (
                <line
                  key={`cross-${st.id}`}
                  x1={current.x}
                  y1={current.y}
                  x2={crossTarget.x}
                  y2={crossTarget.y}
                  stroke="rgba(74, 101, 114, 0.15)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Active connection line between active node and next node */}
            <line
              x1={activeCoords.x}
              y1={activeCoords.y}
              x2={nextCoords.x}
              y2={nextCoords.y}
              stroke="#4FD1C5"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              className="animate-pulse"
            />

            {/* Animated Traveling Spark Circle (Pulse from node to node) */}
            <circle
              r="6"
              fill="#4FD1C5"
              className="filter drop-shadow-[0_0_8px_#4FD1C5]"
            >
              <animate
                attributeName="cx"
                from={activeCoords.x}
                to={nextCoords.x}
                dur="2.8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                from={activeCoords.y}
                to={nextCoords.y}
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          {/* Central Collaboration Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#0F3A33] border-2 border-[#4FD1C5]/40 flex flex-col items-center justify-center p-5 text-center z-10 shadow-2xl shadow-[#4FD1C5]/10 backdrop-blur-md">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#4FD1C5] px-2 py-0.5 rounded-full bg-[#4FD1C5]/10 border border-[#4FD1C5]/20">
              {agentStages[activeStage].agent}
            </span>
            <h4 className="text-xs font-display font-extrabold text-[#E3E9E8] mt-2 leading-snug">
              {agentStages[activeStage].title}
            </h4>
            <p className="text-[10px] text-[#E3E9E8]/75 mt-1.5 line-clamp-3 leading-relaxed font-sans text-left">
              {agentStages[activeStage].desc}
            </p>
          </div>

          {/* 8 Neural Agent Nodes */}
          {agentStages.map((stage) => {
            const coords = getNodeCoords(stage.id);
            const isActive = activeStage === stage.id;

            return (
              <button
                key={stage.id}
                onClick={() => handleNodeClick(stage.id)}
                style={{
                  left: `${coords.x}px`,
                  top: `${coords.y}px`,
                  transform: 'translate(-50%, -50%)'
                }}
                className={`absolute z-20 transition-all duration-300 flex flex-col items-center group cursor-pointer focus:outline-none ${
                  isActive ? 'scale-110' : 'scale-100 hover:scale-105'
                }`}
                aria-label={`Select Stage ${stage.num}: ${stage.title}`}
              >
                {/* Node Circle */}
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#4FD1C5] text-[#0B2B26] shadow-xl shadow-[#4FD1C5]/50 ring-4 ring-[#4FD1C5]/30'
                    : 'bg-[#0F3A33] text-[#E3E9E8] border border-[#4A6572]/50 group-hover:border-[#4FD1C5]'
                }`}>
                  {stage.num}
                </div>

                {/* Node Title Label */}
                <div className="mt-1.5 max-w-[100px] text-center">
                  <span className={`text-[10px] font-display font-semibold block leading-tight ${
                    isActive ? 'text-[#4FD1C5]' : 'text-[#E3E9E8]/70 group-hover:text-[#E3E9E8]'
                  }`}>
                    {stage.title}
                  </span>
                </div>
              </button>
            );
          })}

        </div>

        {/* Mobile / Tablet Interactive Stepper (< 768px) */}
        <div className="md:hidden flex flex-col gap-3 w-full max-w-md">
          
          {/* Active Card Detail */}
          <div className="p-5 rounded-2xl bg-[#0F3A33] border-2 border-[#4FD1C5] flex flex-col gap-2 shadow-lg shadow-[#4FD1C5]/10 text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#4FD1C5] font-bold">
                Stage {agentStages[activeStage].num} / 08
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#4FD1C5]/10 text-[#4FD1C5] border border-[#4FD1C5]/30">
                {agentStages[activeStage].agent}
              </span>
            </div>
            <h3 className="text-base font-display font-bold text-[#E3E9E8]">
              {agentStages[activeStage].title}
            </h3>
            <p className="text-xs text-[#E3E9E8]/80 leading-relaxed font-sans">
              {agentStages[activeStage].desc}
            </p>
          </div>

          {/* Stepper Node Grid */}
          <div className="grid grid-cols-4 gap-2 mt-2">
            {agentStages.map((stage) => {
              const isActive = activeStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => handleNodeClick(stage.id)}
                  className={`py-2.5 px-2 rounded-xl flex flex-col items-center gap-1 border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#4FD1C5] text-[#0B2B26] border-[#4FD1C5] font-bold'
                      : 'bg-[#0F3A33] text-[#E3E9E8]/70 border-[#4A6572]/30 hover:border-[#4FD1C5]/50'
                  }`}
                >
                  <span className="text-xs font-mono font-bold">{stage.num}</span>
                </button>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
};

export default HowItWorksContent;
