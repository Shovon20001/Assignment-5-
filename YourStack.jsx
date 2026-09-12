export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 p-5 lg:sticky lg:top-24">
      <h3 className="text-lg font-semibold text-ink">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-500">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-slate-300 py-8 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <ul className="mt-4 flex flex-col gap-3">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5"
            >
              <img
                src={tech.icon}
                alt=""
                className="h-6 w-6 object-contain"
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                }}
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{tech.name}</p>
                <p className="text-xs text-slate-400">{tech.category}</p>
              </div>
              <button
                type="button"
                aria-label={`Remove ${tech.name} from stack`}
                onClick={() => onRemove(tech.id)}
                className="text-slate-400 hover:text-slate-700"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      {stack.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
