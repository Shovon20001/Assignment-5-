export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
          Build Your Ideal
          <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>
        <p className="mt-5 max-w-md text-slate-600">
          Explore frontend, backend, database, and tooling options, compare them side by side,
          and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#technologies"
            className="bg-brand-gradient rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-ink"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <HeroArt />
      </div>
    </section>
  );
}

function HeroArt() {
  return (
    <svg viewBox="0 0 320 280" className="h-56 w-56 sm:h-72 sm:w-72" aria-hidden="true">
      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <g transform="translate(160,140)">
        <polygon points="0,-90 100,-30 0,30 -100,-30" fill="url(#heroGrad)" opacity="0.15" />
        <polygon points="0,-60 70,-20 0,20 -70,-20" fill="none" stroke="url(#heroGrad)" strokeWidth="3" />
        <polygon points="0,20 70,-20 70,40 0,80" fill="url(#heroGrad)" opacity="0.25" />
        <polygon points="0,20 -70,-20 -70,40 0,80" fill="url(#heroGrad)" opacity="0.4" />
        <circle cx="0" cy="-40" r="10" fill="url(#heroGrad)" />
        <rect x="-14" y="-10" width="28" height="20" rx="4" fill="white" stroke="url(#heroGrad)" strokeWidth="2" />
      </g>
    </svg>
  );
}
