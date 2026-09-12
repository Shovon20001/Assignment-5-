export default function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 p-5">
      <div className="flex items-start justify-between">
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className="h-9 w-9 object-contain"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.visibility = "hidden";
          }}
        />
        {tech.badge && (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-ink">{tech.name}</h3>
      <p className="mt-1 line-clamp-3 flex-1 text-sm text-slate-500">{tech.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-medium text-ink">
          <StarIcon />
          {tech.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-xl py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-ink text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="#f59e0b" aria-hidden="true">
      <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1 5.9L10 14.8l-5.2 2.8 1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
    </svg>
  );
}
