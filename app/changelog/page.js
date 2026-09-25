export const metadata = { title: 'Changelog & Versions | Multiverse Football' };
export default function ChangelogPage() {
  const versions = [
    {
      version: "v1.5.0", date: "September 2026", title: "The Data Reality Update",
      changes: [
        "First live integration of FootyStats API data for the 25/26 season.",
        "War Room now features full search and pagination across thousands of real players.",
        "The 17-0 Crossover Game is now fully powered by live, randomized database matchups.",
        "Automated the 'Sorting Hat' to assign positions based on real statistical percentiles."
      ]
    },
    {
      version: "v1.4.0", date: "September 2026", title: "UI Streamline",
      changes: ["Merged Whitepaper into About page", "Moved Scouting to Home Page", "Created Playbook dropdown"]
    }
  ];
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-16 px-6 max-w-4xl mx-auto">
      <div className="space-y-4 mb-16 border-b border-zinc-800 pb-8">
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">CHANGELOG</h1>
      </div>
      <div className="space-y-12">
        {versions.map((r, i) => (
          <div key={i} className="bg-[#14161B] border border-zinc-800 p-6 rounded-xl">
            <h3 className="font-mono text-xl font-black text-orange-400 mb-1">{r.version} - {r.title}</h3>
            <ul className="space-y-3 mt-4 text-zinc-400 text-sm">
              {r.changes.map((c, j) => <li key={j}>✦ {c}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
