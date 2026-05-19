import {
  ArrowRight,
  Bot,
  CalendarDays,
  ClipboardCheck,
  Database,
  FileText,
  LineChart,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const signals = [
  "POS sales",
  "Private events",
  "Vendor receipts",
  "Weather",
  "Local demand",
  "Menu movement",
  "Staffing pressure",
];

const cards = [
  {
    icon: Database,
    title: "Connect the signals",
    text: "KitchenPulse brings operating data into one decision layer instead of leaving managers to hunt through disconnected systems.",
  },
  {
    icon: TrendingUp,
    title: "Explain what changed",
    text: "Daily movement, risks, recoveries, and opportunities are translated into plain-English operator context.",
  },
  {
    icon: Sparkles,
    title: "Recommend the next move",
    text: "The system surfaces practical actions for service prep, menu focus, staffing awareness, and owner review.",
  },
];

const tourSections = [
  {
    eyebrow: "Daily operating brief",
    title: "Start with the decision that matters today.",
    text: "KitchenPulse turns the latest completed service run into a concise operator brief: what to protect, what to push, why it surfaced, and what happens if it is ignored.",
    image: "/kitchenpulse-home-decision.png",
    alt: "KitchenPulse home decision brief showing a restaurant recommendation",
    icon: ClipboardCheck,
    points: [
      "Latest completed service context",
      "Risk, opportunity, and action summary",
      "Plain-English manager guidance",
    ],
  },
  {
    eyebrow: "Review brief",
    title: "Open the reasoning behind the recommendation.",
    text: "The review brief gives operators a deeper explanation of the current call, including immediate action, the biggest risk, and the biggest opportunity.",
    image: "/kitchenpulse-review-brief-action.png",
    alt: "KitchenPulse review brief explaining the recommended action",
    icon: FileText,
    points: [
      "Action-first operator guidance",
      "Biggest risk and opportunity surfaced",
      "Built for pre-service review",
    ],
  },
  {
    eyebrow: "Operator copilot",
    title: "Ask follow-up questions in service language.",
    text: "SynthoPulse lets managers ask why something surfaced, what to do now, what the real risk is, or what to say in lineup before service.",
    image: "/kitchenpulse-home-ask-ai-panel.png",
    alt: "KitchenPulse Ask AI panel showing an operator question and response",
    icon: Bot,
    points: [
      "Grounded in today’s recommendation",
      "Turns signals into manager talk tracks",
      "Supports owner, GM, and pre-shift workflows",
    ],
  },
  {
    eyebrow: "Movement intelligence",
    title: "See what changed since the last comparable run.",
    text: "KitchenPulse separates clean momentum from watch items and confirmation signals, so teams know what deserves action and what only needs monitoring.",
    image: "/kitchenpulse-what-changed-categories.png",
    alt: "KitchenPulse What Changed page showing needs confirmation, lean into, and recovery watch",
    icon: TrendingUp,
    points: [
      "Risks, recoveries, and opportunities",
      "Comparable-run movement logic",
      "Manager-readable item cards",
    ],
  },
  {
    eyebrow: "Sales and margin",
    title: "Track revenue without losing sight of margin.",
    text: "The sales dashboard shows latest verified performance, month-to-date health, margin movement, and owner-level risk scans.",
    image: "/kitchenpulse-sales-overview.png",
    alt: "KitchenPulse sales dashboard showing revenue, profit, margin, and top item",
    icon: LineChart,
    points: [
      "Verified-run safeguards",
      "Revenue, profit, and margin context",
      "Owner-facing performance read",
    ],
  },
  {
    eyebrow: "Demand pressure",
    title: "Plan around local events before they hit the floor.",
    text: "The events view surfaces local demand, traffic pressure, and upcoming booked demand so operators can plan timing, pacing, prep, and coverage.",
    image: "/kitchenpulse-events-overview.png",
    alt: "KitchenPulse events page showing local demand pressure and upcoming events",
    icon: CalendarDays,
    points: [
      "Needs-review event queue",
      "Today’s demand pressure",
      "Upcoming service impact",
    ],
  },
  {
    eyebrow: "Staffing coverage",
    title: "Spot floor coverage issues before service.",
    text: "KitchenPulse brings shift coverage, staffing warnings, managers on duty, and upcoming roles into the same operating picture as demand and menu movement.",
    image: "/kitchenpulse-staffing-overview.png",
    alt: "KitchenPulse staffing page showing coverage warnings and today's shifts",
    icon: Users,
    points: [
      "Department coverage view",
      "Coverage warnings",
      "Today and upcoming shifts",
    ],
  },
  {
    eyebrow: "Booked demand",
    title: "Connect private events to the daily operating plan.",
    text: "Tripleseat-style booked demand can be staged, reviewed, and promoted into decision-driving context for prep, staffing, room timing, and service pressure.",
    image: "/kitchenpulse-tripleseat-board.png",
    alt: "KitchenPulse Tripleseat booked demand board",
    icon: CalendarDays,
    points: [
      "Private event intake",
      "Decision-driver detection",
      "Upcoming booked demand pipeline",
    ],
  },
  {
    eyebrow: "Receipt intake",
    title: "Stage vendor costs safely before they affect margins.",
    text: "Receipt Intake lets operators upload vendor invoices, parse line items, review extracted costs, and approve pricing updates before anything touches operating data.",
    image: "/kitchenpulse-receipt-intake-pricing-review.png",
    alt: "KitchenPulse receipt intake pricing update review",
    icon: ReceiptText,
    points: [
      "Upload-first receipt workflow",
      "Human approval before parsing",
      "Cost proposals before pricing changes",
    ],
  },
];

const receiptSteps = [
  {
    title: "Upload safely",
    text: "Staff can submit receipts, invoices, PDFs, or photos without changing cost or inventory data.",
    image: "/kitchenpulse-receipt-intake-upload.png",
  },
  {
    title: "Review parsed lines",
    text: "AI-extracted receipt lines are staged for review before downstream use.",
    image: "/kitchenpulse-receipt-intake-parsed-lines.png",
  },
  {
    title: "Approve cost proposals",
    text: "Cost changes are proposed, explained, and approved before they update KitchenPulse pricing data.",
    image: "/kitchenpulse-receipt-intake-pricing-review.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(32,211,238,0.12),_transparent_34%),radial-gradient(circle_at_top_left,_rgba(15,118,140,0.10),_transparent_30%),linear-gradient(180deg,#020817_0%,#03111f_52%,#020817_100%)] text-white">
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
              KitchenPulse turns POS sales, private events, receipts, weather,
              local demand, menu movement, and staffing signals into clear daily
              recommendations for independent restaurant operators.
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

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur">
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
                src="/kitchenpulse-home-decision.png"
                alt="KitchenPulse operator portal showing restaurant operating intelligence"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <section className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/10"
            >
              <card.icon className="mb-5 text-cyan-200" size={30} />
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{card.text}</p>
            </div>
          ))}
        </section>

        <section
          id="kitchenpulse"
          className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10"
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <Sparkles size={16} /> KitchenPulse product tour
            </div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              One operating layer for the decisions restaurants make before service.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              KitchenPulse connects daily sales movement, event pressure, staffing
              coverage, vendor receipts, and margin signals into a practical
              decision layer for operators.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Daily decisions", "What to protect, push, or review before the next rush."],
              ["Human approval", "Receipt and cost changes are staged before they affect operating data."],
              ["Read-first access", "Built for minimum required access and partner trust."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-slate-950/30 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 space-y-16">
            {tourSections.map((section, index) => (
              <article
                key={section.title}
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  index % 2 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                    <section.icon size={15} /> {section.eyebrow}
                  </div>
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {section.title}
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-slate-300">
                    {section.text}
                  </p>
                  <div className="mt-6 grid gap-3">
                    {section.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-200"
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-pulse shadow-[0_0_18px_rgba(32,211,238,0.55)]" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/20">
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="h-auto w-full rounded-[1.55rem] border border-white/10"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2.25rem] border border-cyan-300/15 bg-cyan-300/[0.055] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
                <LockKeyhole size={16} /> Review-first receipt workflow
              </div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Vendor costs are staged, parsed, and approved before they change the business.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Receipt Intake is intentionally conservative. Uploads land in a
                review queue first, parsed line items require human approval, and
                pricing proposals are reviewed before KitchenPulse updates cost data.
              </p>
            </div>

            <div className="grid gap-5">
              {receiptSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/35 p-4"
                >
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {step.text}
                  </p>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="mt-4 rounded-2xl border border-white/10"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="integration" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-9">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
                <ShieldCheck size={16} /> Read-first integration design
              </div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Built for partner trust and restaurant safety.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                KitchenPulse requests the minimum access needed to analyze sales,
                menu, reservation/event, receipt, and operating signals. It does
                not process payments, alter transactions, or interfere with POS workflows.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2 lg:w-[28rem]">
              {signals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3"
                >
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 text-center sm:p-9">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready for read-first restaurant intelligence.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            SynthoPulse helps operators see what changed, understand why it
            matters, and make a cleaner decision before service begins.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://portal.synthopulse.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-pulse px-6 py-3 font-semibold text-slate-950 shadow-[0_0_35px_rgba(32,211,238,0.35)] transition hover:scale-[1.02]"
            >
              Client Login <ArrowRight size={18} />
            </a>
            <a
              href="mailto:info@synthopulse.ai"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white/90 transition hover:border-cyan-300/60"
            >
              Contact SynthoPulse
            </a>
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