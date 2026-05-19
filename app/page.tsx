import { ArrowRight, Database, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

const signals = [
  "POS sales",
  "Private events",
  "Vendor receipts",
  "Weather",
  "Local demand",
  "Menu movement",
  "Staffing pressure"
];

const cards = [
  {
    icon: Database,
    title: "Connect the signals",
    text: "KitchenPulse brings operating data into one decision layer instead of leaving managers to hunt through disconnected systems."
  },
  {
    icon: TrendingUp,
    title: "Explain what changed",
    text: "Daily movement, risks, recoveries, and opportunities are translated into plain-English operator context."
  },
  {
    icon: Sparkles,
    title: "Recommend the next move",
    text: "The system surfaces practical actions for service prep, menu focus, staffing awareness, and owner review."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(32,211,238,0.20),_transparent_35%),linear-gradient(180deg,#06111f_0%,#071827_55%,#04101d_100%)]">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/synthopulse-logo.png"
              alt="SynthoPulse"
              className="h-10 w-auto sm:h-12"
            />
          </div>

          <div className="hidden items-center gap-3 sm:flex">
  <a
    href="https://portal.synthopulse.ai"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-pulse px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(32,211,238,0.25)] transition hover:scale-[1.02]"
  >
    Client Login
  </a>

  <a
    href="mailto:info@synthopulse.ai"
    className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/85 transition hover:border-cyan-300/60 hover:text-white"
  >
    Contact
  </a>
</div>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              KitchenPulse is the flagship SynthoPulse product
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Operating intelligence for real-world restaurant teams.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              KitchenPulse turns POS sales, private events, receipts, weather, local demand, menu movement, and staffing signals into clear daily recommendations for independent restaurant operators.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kitchenpulse"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pulse px-6 py-3 font-semibold text-slate-950 shadow-[0_0_35px_rgba(32,211,238,0.35)] transition hover:scale-[1.02]"
              >
                View KitchenPulse <ArrowRight size={18} />
              </a>
              <a
                href="#integration"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white/90 transition hover:border-cyan-300/60"
              >
                Integration Approach
              </a>
            </div>
          </div>

          <div id="kitchenpulse" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="overflow-hidden rounded-[1.55rem] border border-cyan-300/15 bg-[#071827]">
              <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950/45 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-300/80" />
                <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
                <span className="ml-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                  KitchenPulse operator portal
                </span>
              </div>
              <img
                src="/kitchenpulse-home.png"
                alt="KitchenPulse operator portal showing restaurant operating intelligence"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <section className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/10">
              <card.icon className="mb-5 text-cyan-200" size={30} />
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{card.text}</p>
            </div>
          ))}
        </section>

        <section id="integration" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-9">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
                <ShieldCheck size={16} /> Read-first integration design
              </div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for partner trust and restaurant safety.</h2>
              <p className="mt-5 leading-8 text-slate-300">
                KitchenPulse requests the minimum access needed to analyze sales, menu, reservation/event, receipt, and operating signals. It does not process payments, alter transactions, or interfere with POS workflows.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2 lg:w-[28rem]">
              {signals.map((signal) => (
                <div key={signal} className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3">
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SynthoPulse. KitchenPulse is the flagship restaurant intelligence product.</p>
          <a href="mailto:info@synthopulse.ai" className="text-cyan-200 hover:text-cyan-100">
            info@synthopulse.ai
          </a>
        </footer>
      </section>
    </main>
  );
}
