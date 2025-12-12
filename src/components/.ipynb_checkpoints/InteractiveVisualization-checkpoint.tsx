import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export function InteractiveVisualization() {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <section id="visualization" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            Visualizing Protein Motion
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A simplified representation of protein conformational changes over time
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12">
          <div className="flex justify-center mb-8">
            <div className="flex gap-4">
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                {isAnimating ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                {isAnimating ? 'Pause' : 'Play'}
              </button>
              <button
                onClick={() => setIsAnimating(false)}
                className="px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Reset
              </button>
            </div>
          </div>

          <div className="relative h-96 flex items-center justify-center">
            {/* Simplified protein visualization */}
            <div className="relative w-full max-w-2xl h-full">
              {/* Alpha helix representation */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`helix-${i}`}
                  className="absolute w-32 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  style={{ left: `${20 + i * 25}%`, top: '20%' }}
                  animate={isAnimating ? {
                    rotate: [0, 5, -5, 0],
                    y: [0, -10, 10, 0],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* Beta sheet representation */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={`sheet-${i}`}
                  className="absolute w-24 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded"
                  style={{ left: `${15 + i * 20}%`, top: '60%' }}
                  animate={isAnimating ? {
                    scaleX: [1, 1.1, 0.9, 1],
                    opacity: [1, 0.7, 1],
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}

              {/* Loop regions */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`loop-${i}`}
                  className="absolute w-3 h-3 bg-yellow-400 rounded-full"
                  style={{ left: `${30 + i * 25}%`, top: '40%' }}
                  animate={isAnimating ? {
                    scale: [1, 1.5, 1],
                    x: [0, 10, -10, 0],
                    y: [0, -15, 15, 0],
                  } : {}}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}

              {/* Active site indicator */}
              <motion.div
                className="absolute w-16 h-16 border-4 border-green-400 rounded-full"
                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                animate={isAnimating ? {
                  scale: [1, 1.3, 1],
                  borderColor: ['#4ade80', '#22d3ee', '#4ade80'],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="w-8 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-slate-300">α-Helix</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="w-8 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded mx-auto mb-2"></div>
              <p className="text-sm text-slate-300">β-Sheet</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-slate-300">Loop Regions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
