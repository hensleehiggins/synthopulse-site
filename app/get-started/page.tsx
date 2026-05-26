import {
  ArrowLeft,
  Bot,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  DollarSign,
  FileText,
  HelpCircle,
  LineChart,
  ReceiptText,
  Search,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const quickStart = [
  {
    title: "Start on Home",
    text: "Use the Home page as the daily operating brief. It tells you the main recommendation, why it surfaced, what to do now, and what to watch.",
    icon: ClipboardCheck,
  },
  {
    title: "Check What Changed",
    text: "Use What Changed when you want to understand what rose, fell, recovered, or needs attention compared with the prior run.",
    icon: TrendingUp,
  },
  {
    title: "Use Ask SynthoPulse",
    text: "Ask follow-up questions in plain language when you need a quick explanation, pre-shift talking point, or action recommendation.",
    icon: Bot,
  },
];

const pageGuides = [
  {
    title: "Home",
    icon: ClipboardCheck,
    purpose:
      "Your daily starting point. Home summarizes the most important current recommendation and the context behind it.",
    useWhen: [
      "You want to know what matters before service.",
      "You need the primary recommendation for the day.",
      "You want a quick owner/GM-level explanation.",
    ],
    ask: [
      "Why did this surface?",
      "What should we do before service?",
      "What is the risk if we ignore this?",
    ],
  },
  {
    title: "What Changed",
    icon: TrendingUp,
    purpose:
      "Shows item movement between runs so you can see what improved, dropped, recovered, or needs confirmation.",
    useWhen: [
      "You want to know what changed since the last comparable service.",
      "You need to review rising items, low sellers, or recovery signals.",
      "You want the reason behind the Home recommendation.",
    ],
    ask: [
      "Which items need attention?",
      "What should we lean into today?",
      "Is this a one-time movement or something to watch?",
    ],
  },
  {
    title: "Sales Dashboard",
    icon: LineChart,
    purpose:
      "Shows captured sales performance, margin, profit, month-to-date health, and owner-level business context.",
    useWhen: [
      "You want revenue, profit, and margin context.",
      "You need an owner-level performance read.",
      "You want to compare the latest dinner run to prior dinner performance.",
    ],
    ask: [
      "Was the last run healthy?",
      "Did revenue improve without hurting margin?",
      "What should the owner care about here?",
    ],
  },
  {
    title: "Events",
    icon: CalendarDays,
    purpose:
      "Tracks local demand signals, in-house events, private events, holidays, and upcoming service pressure.",
    useWhen: [
      "There is a local event that may affect traffic.",
      "Chloe’s has an in-house or private event coming up.",
      "You want to review today’s service pressure.",
    ],
    ask: [
      "Will this event affect service?",
      "Should this be promoted to service pressure?",
      "What should we prep differently?",
    ],
  },
  {
    title: "Staffing",
    icon: Users,
    purpose:
      "Shows scheduled shifts and coverage context so managers can catch staffing gaps before service.",
    useWhen: [
      "You want to verify who is on today.",
      "You need to check FOH, BOH, Bar, or Management coverage.",
      "You want staffing context alongside demand pressure.",
    ],
    ask: [
      "Do we have enough coverage today?",
      "What department looks thin?",
      "Does staffing match expected demand?",
    ],
  },
  {
    title: "Receipt Intake",
    icon: ReceiptText,
    purpose:
      "Uploads vendor receipts and invoices so KitchenPulse can parse line items, stage cost signals, and route them for review.",
    useWhen: [
      "A vendor receipt or invoice needs to be uploaded.",
      "You want to review parsed line items.",
      "You want new vendor costs to become trackable over time.",
    ],
    ask: [
      "Did this receipt parse correctly?",
      "Which cost changes need review?",
      "Did the system create a readable item name?",
    ],
  },
  {
    title: "Cost Center",
    icon: DollarSign,
    purpose:
      "Turns approved receipt data into cost movement, margin pressure, and vendor cost intelligence.",
    useWhen: [
      "You want to see which costs are rising.",
      "You want to spot cost relief or vendor opportunities.",
      "You need to review active cost signals before they affect margins.",
    ],
    ask: [
      "Which vendor items are getting more expensive?",
      "What cost movement should the owner review?",
      "Is this a pricing, vendor, or portioning issue?",
    ],
  },
];

const commonQuestions = [
  {
    question: "Where should I start each day?",
    answer:
      "Start on Home. It gives you the primary recommendation and explains the action, risk, and context. Then use What Changed if you want the item-level detail behind the recommendation.",
  },
  {
    question: "What if a page looks empty?",
    answer:
      "An empty page usually means there is no current signal that qualifies for that section. For example, Today’s Service Pressure only shows events intentionally flagged to affect today’s service window.",
  },
  {
    question: "What should I manually add?",
    answer:
      "Add events or local demand signals that KitchenPulse would not know automatically: school games, local festivals, downtown events, private parties, catering-heavy days, or unusual traffic patterns.",
  },
  {
    question: "Can I trust receipt cost changes automatically?",
    answer:
      "Receipt data is review-first. Uploads and parsed lines are staged before they become active cost movement. The system is designed to keep humans in control of cost updates.",
  },
  {
    question: "What should I ask SynthoPulse?",
    answer:
      "Ask practical operating questions: why something surfaced, what to do before service, what to watch, what to say in lineup, or what happens if the team ignores the signal.",
  },
];

const demoFlow = [
  "Open Home and read the primary recommendation.",
  "Open What Changed to show what moved.",
  "Open Sales Dashboard for captured revenue, profit, and margin context.",
  "Open Events and show how to add or review a local demand signal.",
  "Open Staffing to verify schedule coverage.",
  "Open Receipt Intake and explain the upload → review → cost signal workflow.",
  "Open Cost Center to show margin pressure and cost movement.",
  "Use Ask SynthoPulse for a follow-up question.",
];

function HeaderPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
      {children}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <HeaderPill>
        <Sparkles size={16} />
        {eyebrow}
      </HeaderPill>
      <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-slate-300">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
      <span>{children}</span>
    </li>
  );
}

export default function GetStartedPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(32,211,238,0.12),_transparent_34%),radial-gradient(circle_at_top_left,_rgba(15,118,140,0.10),_transparent_30%),linear-gradient(180deg,#020817_0%,#03111f_52%,#020817_100%)] text-white">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-4">
          <a href="/" className="flex items-center">
            <img
              src="/synthopulse-logo.png"
              alt="SynthoPulse"
              className="h-10 w-auto sm:h-12"
            />
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/85 transition hover:border-cyan-300/60 hover:text-white"
            >
              <ArrowLeft size={16} />
              Home
            </a>

            <a
              href="https://portal.synthopulse.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-pulse px-3 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_25px_rgba(32,211,238,0.25)] transition hover:scale-[1.02] sm:px-5 sm:text-sm"
            >
              Client Login
            </a>
          </div>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <HeaderPill>
              <HelpCircle size={16} />
              KitchenPulse onboarding guide
            </HeaderPill>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              How to use KitchenPulse without remembering the whole demo.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              This guide explains where to start, what each page is for, and
              what questions to ask when KitchenPulse surfaces a signal.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quick-start"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pulse px-6 py-3 font-semibold text-slate-950 shadow-[0_0_35px_rgba(32,211,238,0.35)] transition hover:scale-[1.02]"
              >
                Start here
              </a>

              <a
                href="#page-guide"
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/10 px-6 py-3 font-semibold text-cyan-50 transition hover:border-cyan-200 hover:bg-cyan-300/15"
              >
                Page-by-page guide
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
              Daily manager loop
            </div>

            <div className="grid gap-4">
              {[
                ["1", "Read Home", "Start with the primary recommendation."],
                ["2", "Check What Changed", "Review the item-level movement."],
                ["3", "Confirm pressure", "Look at events, staffing, and receipts."],
                ["4", "Ask SynthoPulse", "Get a plain-English action plan."],
              ].map(([number, title, text]) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-slate-950/30 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-pulse text-sm font-bold text-slate-950">
                    {number}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-300">
                      {text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quick-start" className="grid gap-5 md:grid-cols-3">
          {quickStart.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/10"
              >
                <Icon className="mb-5 text-cyan-200" size={30} />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            );
          })}
        </section>

        <section
          id="page-guide"
          className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10"
        >
          <SectionTitle
            eyebrow="Page-by-page guide"
            title="What each KitchenPulse page is for."
            text="Use this as the reference when a manager forgets where to go or what a signal means."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {pageGuides.map((page) => {
              const Icon = page.icon;

              return (
                <div
                  key={page.title}
                  className="rounded-[2rem] border border-white/10 bg-slate-950/30 p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">
                      <Icon size={21} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {page.title}
                    </h3>
                  </div>

                  <p className="mt-5 leading-7 text-slate-300">
                    {page.purpose}
                  </p>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <div>
                      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                        Use when
                      </div>
                      <ul className="grid gap-2">
                        {page.useWhen.map((item) => (
                          <CheckItem key={item}>{item}</CheckItem>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                        Ask SynthoPulse
                      </div>
                      <ul className="grid gap-2">
                        {page.ask.map((item) => (
                          <CheckItem key={item}>{item}</CheckItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.055] p-7 sm:p-9">
            <HeaderPill>
              <Search size={16} />
              Demo review flow
            </HeaderPill>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              A simple path for training new staff.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              When someone is new to KitchenPulse, walk them through this flow.
              It shows the system as an operating guide, not a pile of pages.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-9">
            <ol className="grid gap-3">
              {demoFlow.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/30 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-pulse text-xs font-bold text-slate-950">
                    {index + 1}
                  </div>
                  <div className="text-sm leading-6 text-slate-300">{step}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
          <SectionTitle
            eyebrow="Common questions"
            title="What to remember after the demo."
            text="KitchenPulse is designed to be used in quick operating loops. Start with the recommendation, then dig into the page that explains the signal."
          />

          <div className="mt-12 grid gap-4">
            {commonQuestions.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-white/10 bg-slate-950/30 p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2.25rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_top,_rgba(32,211,238,0.18),_transparent_40%),rgba(255,255,255,0.045)] p-8 text-center shadow-2xl shadow-cyan-950/25 sm:p-12">
          <div className="mx-auto max-w-3xl">
            <HeaderPill>
              <Bot size={16} />
              Still not sure?
            </HeaderPill>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Ask SynthoPulse what to do next.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              The best questions are practical: what changed, why it matters,
              what to do before service, and what happens if the team ignores it.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://portal.synthopulse.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-pulse px-6 py-3 font-semibold text-slate-950 shadow-[0_0_35px_rgba(32,211,238,0.35)] transition hover:scale-[1.02]"
              >
                Open KitchenPulse
              </a>

              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white/90 transition hover:border-cyan-300/60"
              >
                Back to SynthoPulse
              </a>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} SynthoPulse. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="mailto:info@synthopulse.ai" className="hover:text-white">
              info@synthopulse.ai
            </a>
            <a
              href="https://portal.synthopulse.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Client Portal
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
