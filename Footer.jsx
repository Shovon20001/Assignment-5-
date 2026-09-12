const COLUMNS = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
                DS
              </span>
              <span className="text-lg font-bold text-ink">
                Dev <span className="text-brand-gradient">Stack</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              Curated tools, technologies, and resources for developers building modern
              software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-medium text-slate-600">
              <a href="#github" className="hover:text-ink">GitHub</a>
              <a href="#twitter" className="hover:text-ink">Twitter</a>
              <a href="#linkedin" className="hover:text-ink">LinkedIn</a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-slate-600">Privacy</a>
            <a href="#terms" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
