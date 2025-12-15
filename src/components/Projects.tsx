type Project = {
  name: string;
  href: string;
  desc: string;
  stack?: string[];
};

type PrivateProject = {
  name: string;
  desc: string;
  stack?: string[];
};

function Icon({ name }: { name: string }) {
  const common = "w-4 h-4";

  switch (name) {
    case "Python":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2c4.418 0 4 2 4 2v2H8V5s-.418-3 4-3zm-4 7h8v3H8V9zm0 4h8v6s.418 3-4 3-4-2-4-2v-7z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.05.13 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
        </svg>
      );
    case "PDB":
    case "Supabase":
    case "UniProt":   
    case "BMRB":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C7.58 2 4 3.79 4 6v12c0 2.21 3.58 4 8 4s8-1.79 8-4V6c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 .99 6 2s-2.13 2-6 2-6-.99-6-2 2.13-2 6-2zm0 14c-3.87 0-6-.99-6-2V9.97c1.48.9 3.94 1.53 6 1.53s4.52-.63 6-1.53V16c0 1.01-2.13 2-6 2z" />
        </svg>
      );
    case "Lock":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm-3 8V6a3 3 0 016 0v3H9z" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14 2l-1 7h7l-10 13 1-9H4L14 2z" />
        </svg>
      );
  }
}

export function Projects() {
  const projects: Project[] = [
    {
      name: "AlphaFold2-NMR Normal mode fluctuations",
      href: "https://github.com/Bhawnadixit/AlphaFold2_NMR_fluctuations",
      desc: "Pipeline for running normal mode analysis (WEBnma) on AlphaFold2 models and mapped NMR ensembles, computing residue fluctuations and contacts, and comparing experimental vs computational flexibility profiles across many structures.",
      stack: ["Python", "GitHub", "AlphaFold", "WEBnma", "BMRB", "PDB"],
    },
    {
      name: "AlphaFold2-NMR NMA Visualization Code",
      href: "https://github.com/Bhawnadixit/AlphaFold2_NMR_fluctuations",
      desc: "Pipeline for computing plots on large-scale on the AlphaFold-NMR-NMA data.",
      stack: ["Python", "BitBucket", "Docket"],
    },
    {
      name: "Sequence-structure mapping of Glycans",
      href: "https://github.com/Bhawnadixit/glycan_struct_mapping",
      desc: "Tools for converting specific glycan IUPAC strings into structural mappings and computing glycosidic φ/ψ dihedrals, useful for analyzing glycan conformations in MD or static models.",
      stack: ["Python", "GitHub", "MDAnalysis"],
    },
    {
      name: "Protein sequence network analysis",
      href: "https://github.com/Bhawnadixit/protein_sequence_network_analysis",
      desc: "Analysis workflow for clustering and visualizing unannotated protein sequence datasets using CD-HIT, MMseqs2 and network graphs, with radial trees for phylogenetic-style classification.",
      stack: ["Python", "GitHub", "CD-HIT", "mmseqs2", "UniProt"],
    },
    {
      name: "Deep Learning student projects",
      href: "https://github.com/Bhawnadixit/Deeplearning_CNN_RNN_projects",
      desc: "Google Colab notebooks from deep learning / AI courses with my introductory experience with TensorFlow and neural networks on practical assignments.",
      stack: ["Python", "TensorFlow", "PyTorch"],
    },
    {
      name: "ClinicalTrials.gov ETL Pipeline",
      href: "https://github.com/Bhawnadixit/ClinicalTrialsgov_ETL_Pipeline",
      desc: "Python-based ETL pipeline for extracting, cleaning, and structuring clinical trial data from the ClinicalTrials.gov API into analysis-ready formats.",
      stack: ["Python", "REST API", "ETL", "JSON", "BioBERT"]
    },

  ];

  // ✅ Add your private projects here (no links)
    const privateProjects: PrivateProject[] = [
      {
        name: "AGP dynamics & large-scale MD simulations (private)",
        desc: "Private workflows for long-timescale molecular dynamics simulations of AGP, combined with NMR-informed analysis of conformational dynamics, flexibility metrics, and ensemble interpretation.",
        stack: ["Python", "GROMACS", "HPC", "MDAnalysis", "MDTraj"],
      },
      {
        name: "WhatsApp scheduling AI agent (private)",
        desc: "End-to-end LLM-driven automation for WhatsApp-based AI agent for scheduling, integrating message ingestion, intent extraction, orchestration, and calendar actions via external services.",
        stack: [
          "Python",
          "Supabase",
          "AI Foundry",
          "n8n",
          "360dialog",
          "Gemini",
          "OpenAI",
          "Pinecone",
        ],
      },
    ];


  return (
    <section className="py-12">
      <div className="mb-8 inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full">
        <span className="uppercase tracking-[0.16em] text-[0.72rem] text-blue-600">Open Source</span>
      </div>

      <h2 className="text-[clamp(1.7rem,3vw,2.2rem)] m-0 mb-4 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">
        GitHub Projects &amp; Tooling
      </h2>

      <p className="text-[1.05rem] text-slate-600 leading-relaxed mb-8 max-w-4xl">
        Most of my code is hosted on GitHub under{" "}
        <a
          href="https://github.com/Bhawnadixit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 no-underline hover:text-blue-700 border-b-2 border-blue-300 hover:border-blue-500 transition-colors"
        >
          github.com/Bhawnadixit
        </a>
        . Below are the main themes; the full list of repositories is on my profile.
      </p>

      {/* PUBLIC PROJECTS */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon name="GitHub" />
              </div>

              <div className="flex-1">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.05rem] text-slate-800 no-underline hover:text-blue-600 transition-colors group-hover:underline"
                >
                  {project.name}
                </a>
              </div>
            </div>

            <p className="text-[0.92rem] text-slate-600 leading-relaxed !text-justify [hyphens:auto]">
              {project.desc}
            </p>

            {project.stack?.length ? (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    title={tech}
                    className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[0.75rem]"
                  >
                    <Icon name={tech} />
                    <span className="leading-none">{tech}</span>
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* PRIVATE PROJECTS SECTION */}
      <div className="mt-12">
        <h3 className="text-[1.25rem] text-slate-800 mb-2">
          Private Projects
        </h3>
        <p className="text-[0.95rem] text-slate-600 leading-relaxed mb-6 max-w-4xl">
          Selected closed / private work. Details can be shared upon request where permitted.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {privateProjects.map((project, idx) => (
            <div
              key={`private-${idx}`}
              className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-slate-700">
                  <Icon name="Lock" />
                </div>

                <div className="flex-1">
                  <div className="text-[1.05rem] text-slate-800">
                    {project.name}
                  </div>
                  <div className="mt-1 inline-flex items-center gap-2 text-[0.72rem] px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 border border-slate-300">
                    <Icon name="Lock" />
                    Private / NDA
                  </div>
                </div>
              </div>

              <p className="text-[0.92rem] text-slate-600 leading-relaxed !text-justify [hyphens:auto]">
                {project.desc}
              </p>

              {project.stack?.length ? (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      title={tech}
                      className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[0.75rem]"
                    >
                      <Icon name={tech} />
                      <span className="leading-none">{tech}</span>
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
