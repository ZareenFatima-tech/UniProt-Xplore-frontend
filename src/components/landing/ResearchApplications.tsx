import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import SectionHeader from '../ui/SectionHeader';

const applications = [
  {
    num: '01',
    tag: 'Residue Mass & Stoichiometry',
    title: 'Stoichiometric & Elemental Composition',
    desc: 'Break down amino acid composition, molecular formulas, dalton weights, and elemental stoichiometry directly from sequence data.'
  },
  {
    num: '02',
    tag: 'Hydropathy & Charge Spectrum',
    title: 'Primary Residue & Charge Distribution',
    desc: 'Visualize residue frequency, hydrophobic moments, polarity indices, and net charge distribution across the full protein sequence.'
  },
  {
    num: '03',
    tag: 'Surface pH & Instability Index',
    title: 'Physicochemical & Thermodynamic Metrics',
    desc: 'Surface pH behavior, hydrophobicity profiles, aliphatic indices, isoelectric point (pI), and thermodynamic stability indicators at a glance.'
  },
  {
    num: '04',
    tag: 'X-ray / Cryo-EM Resolution',
    title: 'Crystallographic & Cryo-EM Workflows',
    desc: 'Review lab-derived experimental context — diffraction resolution, space groups, specimen conditions, and provenance — alongside computational predictions.'
  },
  {
    num: '05',
    tag: 'Variant Impact & ΔΔG Shifts',
    title: 'Variant Impact & SNV Pathogenicity',
    desc: 'Analyze single residue variants (SNVs), map active site mutation hotspots to 3D folds, and calculate thermodynamic stability shifts.'
  },
  {
    num: '06',
    tag: 'Active Pocket & Affinity Profiling',
    title: 'Druggable Pocket & Ligand Binding',
    desc: 'Identify novel druggable binding pockets, simulate ligand interaction pathways, and evaluate binding affinities dynamically across target folds.'
  },
  {
    num: '07',
    tag: 'Autonomous Text-Mining & GO Terms',
    title: 'PubMed Evidence & Functional NLP',
    desc: 'Orchestrate autonomous parsing of PubMed citations, extracting functional Gene Ontology (GO) annotations, enzymatic pathways, and evidence anchors.'
  },
  {
    num: '08',
    tag: 'Multi-Scale Fold Alignment & PDB Overlays',
    title: 'Multi-Scale Fold Alignment & PDB Overlays',
    desc: 'Bridge the sequence-structure gap by dynamically retrieving predicted structures from AlphaFold DB alongside experimental X-ray/Cryo-EM structures from PDBe.'
  }
];

export const ResearchApplications: React.FC = () => {
  return (
    <section id="research" className="py-24 px-6 border-b border-[#4A6572]/35 bg-[#0B2B26]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        
        {/* Shared Section Header */}
        <SectionHeader
          eyebrow="FIELDS OF APPLICATION"
          title="Research Applications"
          subheading="Unified multi-agent analytical modules built for structural biology, medicinal chemistry, and clinical variant interpretation."
        />

        {/* Explanatory Paragraph Card (Left-Aligned Content) */}
        <div className="w-full max-w-4xl p-6 md:p-8 rounded-2xl bg-[#0F3A33]/50 border border-[#4A6572]/30 text-left backdrop-blur-sm shadow-xl shadow-[#0F3A33]/20">
          <p className="text-sm md:text-base text-[#E3E9E8]/90 leading-relaxed font-sans">
            UniProtXplore exists because protein research today is scattered across a dozen disconnected databases and manual workflows that slow discovery to a crawl. By unifying sequence, structural, chemical, and literature data behind a single UniProt ID, it replaces hours of manual cross-referencing with one coherent, AI-assisted analysis. Researchers no longer juggle UniProtKB, PDBe, AlphaFold, ChEMBL, DrugBank, and PubMed as separate tabs — UniProtXplore aggregates and reasons over all of them automatically. This turns fragmented, error-prone data-gathering into a single accessible workspace built for both computational and experimental scientists. The result is faster hypothesis generation, fewer integration errors, and research timelines measured in minutes instead of days.
          </p>
        </div>

        {/* 8 Modular Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4">
          {applications.map((app) => (
            <GlassCard key={app.num} className="flex flex-col gap-3 p-6" glowColor="none">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#4FD1C5]">{app.num}</span>
                <span className="text-[10px] font-mono text-[#E3E9E8]/60 uppercase tracking-wider truncate max-w-[150px]">{app.tag}</span>
              </div>
              <h3 className="text-sm font-display font-bold text-[#E3E9E8] leading-tight mt-1">
                {app.title}
              </h3>
              <p className="text-xs text-[#E3E9E8]/80 leading-relaxed font-sans">
                {app.desc}
              </p>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResearchApplications;
