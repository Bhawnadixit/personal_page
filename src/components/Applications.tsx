import { FlaskConical, Pill, Cpu, Microscope } from 'lucide-react';

const applications = [
  {
    icon: Pill,
    title: 'Drug Discovery',
    description: 'Understanding protein dynamics is crucial for rational drug design, as binding sites can change shape and accessibility over time.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: FlaskConical,
    title: 'Enzyme Engineering',
    description: 'Optimizing enzyme catalysis by studying the dynamic motions that facilitate substrate binding and product release.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Cpu,
    title: 'Computational Biology',
    description: 'Molecular dynamics simulations help predict protein behavior and design new proteins with desired properties.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Microscope,
    title: 'Disease Research',
    description: 'Many diseases involve protein misfolding or aberrant dynamics, making this knowledge critical for therapeutic development.',
    color: 'bg-pink-100 text-pink-600',
  },
];

export function Applications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-slate-800">
            Applications & Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            How protein dynamics research shapes modern biotechnology and medicine
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center mb-6`}>
                <app.icon className="w-9 h-9" />
              </div>
              <h3 className="mb-3 text-slate-800">
                {app.title}
              </h3>
              <p className="text-slate-600">
                {app.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 sm:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-4">
              The Future of Protein Dynamics
            </h3>
            <p className="text-slate-300 mb-8">
              Advanced experimental techniques like cryo-EM, NMR spectroscopy, and time-resolved crystallography, 
              combined with increasingly powerful computational methods, are revealing protein dynamics at unprecedented 
              detail. This knowledge is revolutionizing our understanding of biology at the molecular level.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm">
                Cryo-EM
              </span>
              <span className="px-4 py-2 bg-pink-500/20 border border-pink-400/30 rounded-full text-sm">
                MD Simulations
              </span>
              <span className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-sm">
                NMR Spectroscopy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
