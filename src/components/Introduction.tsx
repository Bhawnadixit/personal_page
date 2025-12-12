import { Dna, Waves, Zap } from 'lucide-react';

export function Introduction() {
  return (
    <section id="introduction" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-slate-800">
            Understanding Protein Dynamics
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proteins are not static structures—they are dynamic molecular machines in constant motion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Dna className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="mb-3 text-slate-800">
              Conformational Changes
            </h3>
            <p className="text-slate-600">
              Proteins undergo structural rearrangements that are essential for their biological function, from subtle side-chain rotations to large-scale domain movements.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Waves className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="mb-3 text-slate-800">
              Time Scales
            </h3>
            <p className="text-slate-600">
              Protein motions span an enormous range of timescales, from femtosecond bond vibrations to millisecond folding events and beyond.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="mb-3 text-slate-800">
              Energy Landscapes
            </h3>
            <p className="text-slate-600">
              Proteins navigate complex energy landscapes, exploring different conformational states to perform their biological functions efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
