import { useEffect, useRef, useState } from 'react';

export function Proteins() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [timeDisplay, setTimeDisplay] = useState('≈ 1.0 fs (1.0 × 10⁻¹⁵ s)');

  // Layout constants (fixes ruler/tick positioning)
  const TRACK_HEIGHT = 420; // total timeline height (items + ruler)
  const RULER_HEIGHT = 90; // reserved space at bottom for the ruler

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const minT = 1e-15;
    const maxT = 1e4;
    const logMin = Math.log10(minT);
    const logMax = Math.log10(maxT);

    function formatTime(tSeconds: number) {
      const fsVal = tSeconds / 1e-15;

      function fmt(val: number) {
        if (val === 0) return '0';
        const abs = Math.abs(val);
        if (abs >= 1e3 || abs < 1e-2) return val.toExponential(2);
        return abs >= 10 ? val.toFixed(0) : val.toFixed(2);
      }

      let unit = 's';
      let val = tSeconds;

      if (tSeconds < 1e-12) {
        unit = 'fs';
        val = tSeconds / 1e-15;
      } else if (tSeconds < 1e-9) {
        unit = 'ps';
        val = tSeconds / 1e-12;
      } else if (tSeconds < 1e-6) {
        unit = 'ns';
        val = tSeconds / 1e-9;
      } else if (tSeconds < 1e-3) {
        unit = 'µs';
        val = tSeconds / 1e-6;
      } else if (tSeconds < 1) {
        unit = 'ms';
        val = tSeconds / 1e-3;
      } else if (tSeconds < 60) {
        unit = 's';
        val = tSeconds;
      } else if (tSeconds < 3600) {
        unit = 'min';
        val = tSeconds / 60;
      } else {
        unit = 'h';
        val = tSeconds / 3600;
      }

      const fsText = fmt(fsVal) + ' fs';
      const unitText = fmt(val) + ' ' + unit;

      return '≈ ' + fsText + ' (' + unitText + ')';
    }

    function updateCounter() {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      const frac = maxScroll > 0 ? scroller.scrollLeft / maxScroll : 0;
      const logT = logMin + frac * (logMax - logMin);
      const tSeconds = Math.pow(10, logT);
      setTimeDisplay(formatTime(tSeconds));
    }

    const handleWheel = (evt: WheelEvent) => {
      evt.preventDefault();
      scroller.scrollLeft += evt.deltaY * 1.1;
    };

    scroller.addEventListener('wheel', handleWheel, { passive: false });
    scroller.addEventListener('scroll', updateCounter);
    updateCounter();

    return () => {
      scroller.removeEventListener('wheel', handleWheel);
      scroller.removeEventListener('scroll', updateCounter);
    };
  }, []);

  // Calculate position on log scale (0-100%)
  const getPositionPercent = (timeInSeconds: number) => {
    const minT = 1e-15;
    const maxT = 1e4;
    const logMin = Math.log10(minT);
    const logMax = Math.log10(maxT);
    const logT = Math.log10(timeInSeconds);
    return ((logT - logMin) / (logMax - logMin)) * 100;
  };

  const timeStops = [
    {
      time: 5e-14, // representative point within 1 fs–1 ps decade
      label: 'Bond vibrations',
      sub: '1 fs – 1 ps',
      desc: 'Fast stretching and bending of bonds and angles. These motions are typically averaged out in most experiments, but define the high-frequency limit of protein dynamics.',
      image: 'assets/bond_vibrations.gif',
    },
    {
      time: 5e-11, // representative point within 1 ps–1 ns decade
      label: 'Side-chain flickers',
      sub: '1 ps – 1 ns',
      desc: 'Local χ-angle rotations and backbone wobbles. They modulate local packing and show up in NMR order parameters and short MD trajectories.',
    },
    {
      time: 5e-8, // representative point within 1 ns–1 µs decade
      label: 'Loop breathing',
      sub: '1 ns – 1 μs',
      desc: 'Opening and closing of loops and turns, altering the exposure of binding pockets, glycosylation sites and epitopes.',
    },
    {
      time: 5e-5, // representative point within 1 µs–1 ms decade
      label: 'Secondary-structure shifts',
      sub: '1 μs – 1 ms',
      desc: 'Helix–coil transitions and β-structure rearrangements. These gradations are central to ambiguous or "fuzzy" protein regions.',
    },
    {
      time: 5e-2, // representative point within 1 ms–1 s decade
      label: 'Domain motions',
      sub: '1 ms – 1 s',
      desc: 'Hinge and shear motions between domains that often control allosteric regulation and long-range communication.',
    },
    // Scientifically corrected: relaxation dispersion is µs–ms, not seconds
    {
      time: 5e-4, // ~0.5 ms (within µs–ms exchange regime)
      label: 'Conformational exchange',
      sub: '10 μs – 10 ms',
      desc: 'Exchange between conformational states. Causes line broadening and is quantified by NMR relaxation dispersion (e.g., CPMG, R1ρ).',
    },
    {
      time: 1e1,
      label: 'Binding / unbinding',
      sub: '1 ms – 100 s',
      desc: 'Association and dissociation of ligands, glycans and partners. Kinetics here link conformational dynamics directly to affinity.',
    },
    {
      time: 5e2, // representative point within 100 s–10,000 s decade
      label: 'Turnover & remodeling',
      sub: '100 s – 10,000 s',
      desc: 'Slow processes such as folding after synthesis, degradation, trafficking and large-scale remodeling within cells.',
    },
  ];

  const formatTickLabel = (timeInSeconds: number) => {
    if (timeInSeconds < 1e-12) {
      const fs = timeInSeconds / 1e-15;
      return fs === 1 ? '1 fs' : `${Math.round(fs)} fs`;
    }
    if (timeInSeconds < 1e-9) {
      const ps = timeInSeconds / 1e-12;
      return ps === 1 ? '1 ps' : `${Math.round(ps)} ps`;
    }
    if (timeInSeconds < 1e-6) {
      const ns = timeInSeconds / 1e-9;
      return ns === 1 ? '1 ns' : `${Math.round(ns)} ns`;
    }
    if (timeInSeconds < 1e-3) {
      const us = timeInSeconds / 1e-6;
      return us === 1 ? '1 µs' : `${Math.round(us)} µs`;
    }
    if (timeInSeconds < 1) {
      const ms = timeInSeconds / 1e-3;
      return ms === 1 ? '1 ms' : `${Math.round(ms)} ms`;
    }
    if (timeInSeconds < 60) {
      return timeInSeconds === 1 ? '1 s' : `${timeInSeconds} s`;
    }
    if (timeInSeconds < 3600) {
      // keep tick labels clean (no long decimals)
      const mins = timeInSeconds / 60;
      return mins < 10 ? `${mins.toFixed(1)} min` : `${mins.toFixed(0)} min`;
    }
    const hrs = timeInSeconds / 3600;
    return hrs < 10 ? `${hrs.toFixed(1)} h` : `${hrs.toFixed(0)} h`;
  };

  // Generate ruler tick marks - major ticks at powers of 10
  const generateRulerTicks = () => {
    const ticks: { time: number; isMajor: boolean; label: string }[] = [];

    const majorTimes = [
      1e-15, 1e-14, 1e-13,
      1e-12, 1e-11, 1e-10,
      1e-9, 1e-8, 1e-7,
      1e-6, 1e-5, 1e-4,
      1e-3, 1e-2, 1e-1,
      1, 10, 100, 1000, 10000,
    ];

    majorTimes.forEach((time) => {
      ticks.push({
        time,
        isMajor: true,
        label: formatTickLabel(time),
      });
    });

    return ticks;
  };

  const rulerTicks = generateRulerTicks();

  return (
    <section className="py-12">
      <div className="mb-8 inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full">
        <span className="uppercase tracking-[0.16em] text-[0.72rem] text-blue-600">
          Protein Dynamics
        </span>
      </div>

      <h2 className="text-[clamp(1.7rem,3vw,2.2rem)] m-0 mb-4 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">
        Protein Time Scales
      </h2>

      <p className="text-[1.05rem] text-slate-600 leading-relaxed mb-8 max-w-4xl">
        Inspired by pixel-accurate solar system maps, this strip places protein motions
        along a single time axis, from femtosecond (fs) bond vibrations to hours-long
        conformational and functional changes. Scroll horizontally to move along the axis.
      </p>

      <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-6 shadow-lg border border-blue-100">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-blue-200">
          <div className="text-[0.85rem] text-slate-600">
            Time scale → from ultrafast vibrations to slow functional motions
          </div>
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
            <span className="text-[0.85rem] text-slate-600">Current Position:</span>
            <span className="text-[0.9rem] text-blue-600">{timeDisplay}</span>
          </div>
        </div>

        {/* Main scrollable timeline */}
        <div
          ref={scrollerRef}
          className="overflow-x-auto overflow-y-hidden w-full relative rounded-2xl bg-white/50"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'white #e2e8f0',
          }}
        >
          {/* Timeline track with fixed height so ruler bottom anchoring is correct */}
          <div
            className="relative min-w-[8000px] px-8"
            style={{ height: `${TRACK_HEIGHT}px` }}
          >
            {/* Timeline items positioned absolutely */}
            {timeStops.map((stop, idx) => {
              const leftPercent = getPositionPercent(stop.time);
              return (
                <div
                  key={idx}
                  className="absolute w-[280px] text-center"
                  style={{
                    left: `${leftPercent}%`,
                    top: '20px',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                  }}
                >
                  <div className="text-[1rem] text-blue-600 mb-3">
                    {stop.label}
                  </div>

                  {stop.image && (
                    <div className="mb-3 rounded-xl overflow-hidden shadow-md bg-white p-2">
                      <img
                        src={stop.image}
                        alt={stop.label}
                        className="max-h-[150px] block mx-auto"
                      />
                    </div>
                  )}

                  <div className="text-[0.8rem] text-slate-500 mb-3 bg-slate-100 rounded-full px-3 py-1 inline-block">
                    {stop.sub}
                  </div>

                  <div className="text-[0.88rem] leading-[1.6] text-slate-600 text-center mx-auto max-w-[260px]">
                    {stop.desc}
                  </div>
                </div>
              );
            })}

            {/* Ruler with ticks at the bottom */}
            <div
              className="absolute left-0 right-0"
              style={{
                bottom: 0,
                height: `${RULER_HEIGHT}px`,
                zIndex: 30,
              }}
            >
              {/* Main ruler line */}
              <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 rounded-full" />

              {/* Tick marks */}
              {rulerTicks.map((tick, idx) => {
                const leftPercent = getPositionPercent(tick.time);
                return (
                  <div
                    key={idx}
                    className="absolute"
                    style={{
                      left: `${leftPercent}%`,
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Tick mark */}
                    <div
                      className={`${tick.isMajor ? 'w-[3px] h-[22px] bg-blue-600' : 'w-[2px] h-[12px] bg-blue-400'} rounded-full mx-auto`}
                    />
                    {/* Label for major ticks */}
                    {tick.isMajor && tick.label && (
                      <div className="text-[0.72rem] text-blue-700 mt-2 whitespace-nowrap bg-white px-2 py-0.5 rounded-full shadow-sm">
                        {tick.label}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* White scrollbar styling */}
        <style>{`
          .overflow-x-auto::-webkit-scrollbar { height: 14px; }
          .overflow-x-auto::-webkit-scrollbar-track { background: #e2e8f0; border-radius: 10px; }
          .overflow-x-auto::-webkit-scrollbar-thumb {
            background: linear-gradient(to right, #dbeafe, white, #dbeafe);
            border: 2px solid #e2e8f0;
            border-radius: 10px;
          }
          .overflow-x-auto::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to right, #bfdbfe, #f8fafc, #bfdbfe);
          }
        `}</style>

        <div className="text-[0.85rem] text-slate-500 mt-4 text-center">
          Scroll horizontally to traverse the axis. Values are positioned on a logarithmic scale
          to emphasize how protein motions span many orders of magnitude in time.
        </div>
      </div>
    </section>
  );
}
