export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-slate-400">
      <span className="bg-brand-gradient h-10 w-10 animate-spin rounded-full [mask:radial-gradient(farthest-side,transparent_calc(100%-4px),#000_0)]" />
      <p className="text-sm">Loading technologies…</p>
    </div>
  );
}
