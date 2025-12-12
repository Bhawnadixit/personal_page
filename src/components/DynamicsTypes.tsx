import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const timescaleData = [
  { time: '10^-15', vibrations: 100, sidechain: 0, loops: 0, domains: 0 },
  { time: '10^-12', vibrations: 90, sidechain: 30, loops: 0, domains: 0 },
  { time: '10^-9', vibrations: 50, sidechain: 80, loops: 40, domains: 0 },
  { time: '10^-6', vibrations: 10, sidechain: 60, loops: 90, domains: 30 },
  { time: '10^-3', vibrations: 0, sidechain: 20, loops: 70, domains: 80 },
  { time: '1', vibrations: 0, sidechain: 5, loops: 30, domains: 95 },
];

export function DynamicsTypes() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-slate-800">
            Types of Protein Dynamics
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Different motions occur at different timescales
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="mb-6 text-center text-slate-800">
            Motion Timescales (seconds)
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={timescaleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis label={{ value: 'Activity', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="vibrations" stroke="#3b82f6" name="Bond Vibrations" strokeWidth={2} />
              <Line type="monotone" dataKey="sidechain" stroke="#8b5cf6" name="Side-chain Rotations" strokeWidth={2} />
              <Line type="monotone" dataKey="loops" stroke="#ec4899" name="Loop Motions" strokeWidth={2} />
              <Line type="monotone" dataKey="domains" stroke="#10b981" name="Domain Movements" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="mb-4 text-slate-800">
              Local Motions
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Bond vibrations</strong> - Femtosecond oscillations of covalent bonds</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Side-chain rotations</strong> - Nanosecond to microsecond reorientations</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Loop movements</strong> - Flexibility in unstructured regions</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="mb-4 text-slate-800">
              Global Motions
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Domain movements</strong> - Large-scale hinge and shear motions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Allosteric transitions</strong> - Long-range conformational changes</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Folding/unfolding</strong> - Complete structural reorganization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
