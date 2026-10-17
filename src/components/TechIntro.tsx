import React, { useEffect, useState, useRef } from 'react';
import { FastForward } from 'lucide-react';

type IntroMode = 'short' | 'long';

interface TechIntroProps {
  onComplete: () => void;
  forceShow?: boolean;
  mode?: IntroMode;
}

type Phase =
  | 'idle'
  | 'grid'
  | 'outer'
  | 'inner'
  | 'avatar'
  | 'corners'
  | 'name'
  | 'settle';

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/315736777?v=4';

const TIMELINES: Record<IntroMode, { total: number; phases: [number, Phase][] }> = {
  short: {
    total: 3500, // Dioptimalkan jadi 3.5 detik agar cepat dan responsif
    phases: [
      [100, 'grid'],
      [400, 'outer'],
      [900, 'inner'],
      [1500, 'avatar'],
      [2200, 'corners'],
      [2800, 'name'],
      [3200, 'settle'],
    ],
  },
  long: {
    total: 8000,
    phases: [
      [200, 'grid'],
      [1000, 'outer'],
      [2000, 'inner'],
      [3500, 'avatar'],
      [5000, 'corners'],
      [6500, 'name'],
      [7500, 'settle'],
    ],
  },
};

const detectModeFromURL = (): IntroMode => {
  if (typeof window === 'undefined') return 'short';
  const params = new URLSearchParams(window.location.search);
  return params.get('intro') === 'long' ? 'long' : 'short';
};

export const TechIntro: React.FC<TechIntroProps> = ({
  onComplete,
  forceShow,
  mode,
}) => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [progress, setProgress] = useState(0);
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  const finalMode: IntroMode = mode ?? detectModeFromURL();
  const { total: TOTAL_DURATION, phases: TIMELINE_PHASES } = TIMELINES[finalMode];

  const startTimeRef = useRef<number | null>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches && !forceShow) {
      onComplete();
      return;
    }

    const onKey = (e: KeyboardEvent) => {
      if (completedRef.current) return;
      if (e.key === 'Escape') {
        completedRef.current = true;
        onComplete();
      }
    };

    window.addEventListener('keydown', onKey);

    let raf: number;

    const tick = (timestamp: number) => {
      if (completedRef.current) return;

      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const p = Math.min(TOTAL_DURATION, elapsed);

      let newPhase: Phase = 'idle';
      for (const [time, phaseName] of TIMELINE_PHASES) {
        if (p >= time) newPhase = phaseName;
      }

      setPhase((prev) => (prev !== newPhase ? newPhase : prev));
      setProgress((p / TOTAL_DURATION) * 100);

      if (p >= TOTAL_DURATION) {
        completedRef.current = true;
        // Beri sedikit jeda 300ms di akhir sebelum menutup intro
        setTimeout(() => {
          onComplete();
        }, 300);
        return;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('keydown', onKey);
    };
  }, [onComplete, forceShow, TOTAL_DURATION, TIMELINE_PHASES]);

  const atLeast = (target: Phase): boolean => {
    const order: Phase[] = [
      'idle', 'grid', 'outer', 'inner',
      'avatar', 'corners', 'name', 'settle',
    ];
    return order.indexOf(phase) >= order.indexOf(target);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0B] text-[#F4F4F5] flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden">

      {/* ===== TOP HEADER ===== */}
      <div className="flex items-center justify-between border-b border-[#232326] pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="relative w-4 h-4">
            <div className="absolute inset-0 border border-[#D9FF3D] rotate-45" />
            <div className="absolute inset-1 bg-[#D9FF3D]" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
            RAFFA<span className="text-[#D9FF3D]">.</span>OS
          </span>
          {finalMode === 'long' && (
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#52525B] border border-[#232326] px-2 py-0.5 rounded">
              DEMO MODE
            </span>
          )}
        </div>
        <button
          onClick={() => {
            completedRef.current = true;
            onComplete();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#3F3F46] bg-[#121214] hover:bg-[#18181B] text-xs font-mono text-[#F4F4F5] hover:text-[#D9FF3D] transition-all cursor-pointer"
          title="Lewati animasi (ESC)"
        >
          <span>SKIP</span>
          <span className="text-[10px] text-[#71717A] bg-[#232326] px-1.5 py-0.5 rounded">ESC</span>
          <FastForward className="w-3.5 h-3.5 ml-1" />
        </button>
      </div>

      {/* ===== CENTER ===== */}
      <div className="flex-1 flex items-center justify-center relative">

        <div
          className="absolute w-[800px] h-[800px] rounded-full bg-[#D9FF3D]/[0.05] blur-[180px] pointer-events-none transition-opacity duration-1500"
          style={{ opacity: atLeast('inner') ? 1 : 0 }}
        />

        <div className="relative w-[320px] h-[320px] sm:w-[460px] sm:h-[460px]">

          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="avatarClip">
                <circle cx="100" cy="100" r="75" />
              </clipPath>
              <pattern
                id="placeholderPattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect width="20" height="20" fill="#18181B" />
                <path d="M 0,0 L 20,20 M -5,5 L 5,15 M 15,-5 L 25,5" stroke="#232326" strokeWidth="0.5" />
              </pattern>
            </defs>

            {/* GRID */}
            <g style={{ opacity: atLeast('grid') ? 1 : 0, transition: 'opacity 0.6s ease-out' }}>
              {[40, 80, 120, 160].map((v, i) => (
                <path key={`vg-${i}`} d={`M ${v},20 L ${v},180`} stroke="#18181B" strokeWidth="0.3" />
              ))}
              {[40, 80, 120, 160].map((v, i) => (
                <path key={`hg-${i}`} d={`M 20,${v} L 180,${v}`} stroke="#18181B" strokeWidth="0.3" />
              ))}
            </g>

            {/* OUTER CIRCLE */}
            <path
              d="M 100,20 A 80,80 0 1,1 99.9,20 Z"
              stroke="#232326"
              strokeWidth="0.6"
              style={{
                strokeDasharray: 503,
                strokeDashoffset: atLeast('outer') ? 0 : 503,
                transition: 'stroke-dashoffset 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
              }}
            />

            {/* INNER CIRCLE */}
            <path
              d="M 100,40 A 60,60 0 1,1 99.9,40 Z"
              stroke="#232326"
              strokeWidth="0.6"
              style={{
                strokeDasharray: 378,
                strokeDashoffset: atLeast('inner') ? 0 : 378,
                transition: 'stroke-dashoffset 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
              }}
            />

            {/* AVATAR */}
            <g
              style={{
                opacity: atLeast('avatar') ? 1 : 0,
                transform: atLeast('avatar') ? 'scale(1)' : 'scale(0.5)',
                transformOrigin: '100px 100px',
                transition: 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <circle cx="100" cy="100" r="75" fill="url(#placeholderPattern)" />

              {!avatarError && (
                <image
                  href={AVATAR_URL}
                  xlinkHref={AVATAR_URL}
                  x="25"
                  y="25"
                  width="150"
                  height="150"
                  clipPath="url(#avatarClip)"
                  preserveAspectRatio="xMidYMid slice"
                  onLoad={() => setAvatarLoaded(true)}
                  onError={() => setAvatarError(true)}
                />
              )}

              {(avatarError || !avatarLoaded) && (
                <text
                  x="100"
                  y="122"
                  textAnchor="middle"
                  fontFamily="Space Grotesk, sans-serif"
                  fontWeight="700"
                  fontSize="56"
                  fill="#F4F4F5"
                >
                  MR
                </text>
              )}

              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="#D9FF3D"
                strokeWidth="1.2"
                fill="none"
                opacity="0.5"
              />
            </g>

            {/* CORNER DOTS */}
            {[
              { d: 'M 33,35 A 2,2 0 1,1 37,35 A 2,2 0 1,1 33,35 Z', delay: 0 },
              { d: 'M 163,35 A 2,2 0 1,1 167,35 A 2,2 0 1,1 163,35 Z', delay: 0.05 },
              { d: 'M 33,165 A 2,2 0 1,1 37,165 A 2,2 0 1,1 33,165 Z', delay: 0.1 },
              { d: 'M 163,165 A 2,2 0 1,1 167,165 A 2,2 0 1,1 163,165 Z', delay: 0.15 },
            ].map((dot, i) => (
              <path
                key={i}
                d={dot.d}
                fill="#D9FF3D"
                style={{
                  opacity: atLeast('corners') ? 1 : 0,
                  transition: `opacity 0.3s ease-out ${dot.delay}s`,
                }}
              />
            ))}

            <path
              d="M 97,100 A 3,3 0 1,1 103,100 A 3,3 0 1,1 97,100 Z"
              fill="#D9FF3D"
              style={{
                opacity: atLeast('settle') ? 0.9 : 0,
                transition: 'opacity 0.4s ease-out',
              }}
            />
          </svg>

          {/* NAME + TITLE */}
          <div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
            style={{
              opacity: atLeast('name') ? 1 : 0,
              transform: atLeast('name') ? 'translate(-50%, 0)' : 'translate(-50%, 16px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <div className="text-sm sm:text-base font-display font-bold uppercase tracking-[0.3em] text-[#F4F4F5]">
              Muhammad Raffadian Pratama
            </div>
            <div
              className="mx-auto my-2.5 h-[1px] bg-[#D9FF3D]/40 transition-all duration-500"
              style={{ width: atLeast('name') ? '60%' : '0%' }}
            />
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.4em] text-[#D9FF3D]">
              Fullstack Developer
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM: PROGRESS ===== */}
      <div className="border-t border-[#232326] pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#71717A] relative z-10">
        <div className="flex items-center gap-3 w-full sm:w-96">
          <div className="w-full h-[2px] bg-[#18181B] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#D9FF3D] transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="shrink-0 text-[11px] text-[#A1A1AA] w-9 text-right">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="text-[11px] tracking-wide">
          <span>
            INITIALIZING <span className="text-[#D9FF3D]">PORTFOLIO</span> ENGINE
          </span>
        </div>
      </div>
    </div>
  );
};
