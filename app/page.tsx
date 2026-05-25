"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  ChevronDown,
  ClipboardCheck,
  Database,
  DollarSign,
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
    shortTitle: "Home",
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
    shortTitle: "Review Brief",
    text: "The review brief gives operators a deeper explanation of the current call, including immediate action, the biggest risk, and the biggest opportunity.",
    image: "/kitchenpulse-review-brief-action.png",
    alt: "KitchenPulse review brief explaining the recommended action",
    icon: FileText,
    points: [
      "Action-first recommendation",
      "Reasoning behind the call",
      "Owner-ready context for pre-service review",
    ],
  },
  {
    eyebrow: "Operator copilot",
    title: "Ask follow-up questions in service language.",
    shortTitle: "Ask AI",
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
    shortTitle: "What Changed",
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
    shortTitle: "Sales Dashboard",
    text: "The sales dashboard shows latest captured performance, month-to-date health, margin movement, and owner-level risk scans.",
    image: "/kitchenpulse-sales-overview.png",
    alt: "KitchenPulse sales dashboard showing revenue, profit, margin, and top item",
    icon: LineChart,
    points: [
      "Captured-run safeguards",
      "Revenue, profit, and margin context",
      "Owner-facing performance read",
    ],
  },
  {
    eyebrow: "Demand pressure",
    title: "Plan around local events before they hit the floor.",
    shortTitle: "Events",
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
    shortTitle: "Staffing",
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
    shortTitle: "Tripleseat",
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
    shortTitle: "Receipt Intake",
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
    title: "Apply approved cost changes",
    text: "Approved cost proposals update KitchenPulse pricing data only after the match and change are confirmed.",
    image: "/kitchenpulse-receipt-intake-cost-applied.png",
  },
];

const costCenterSections = [
  {
    eyebrow: "Cost center",
    title: "Turn approved receipt data into margin decisions.",
    text: "Cost Center turns reviewed receipt lines into cost movement intelligence, showing where vendor costs are rising, where costs are easing, and which matched signals still need approval.",
    image: "/kitchenpulse-cost-center-home.png",
    alt: "KitchenPulse Cost Center overview showing food cost intelligence and margin signals",
    points: [
      "Approved receipt signals become cost movement",
      "Cost pressure and cost relief are separated",
      "Owners can see what needs review before it affects margin",
    ],
  },
  {
    eyebrow: "Margin watch",
    title: "See vendor cost pressure and relief in one place.",
    text: "KitchenPulse separates cost increases, cost decreases, and tracked items so operators can review pricing, portions, vendors, or feature strategy before hidden margin leaks build up.",
    image: "/kitchenpulse-cost-center-watch.png",
    alt: "KitchenPulse Cost Center margin pressure and cost relief watch sections",
    points: [
      "Margin pressure watch",
      "Cost relief and opportunity view",
      "Item-level cost movement cards",
    ],
  },
  {
    eyebrow: "Cost movement",
    title: "Track approved cost changes as an ongoing signal.",
    text: "The active cost movement log keeps approved receipt-driven changes visible, searchable, and ready for owner review instead of burying them in invoice history.",
    image: "/kitchenpulse-cost-center-cost-movement.png",
    alt: "KitchenPulse active cost movement log showing vendor cost changes",
    points: [
      "Approved cost movement history",
      "Searchable item and vendor context",
      "Suggested actions for margin review",
    ],
  },
  {
    eyebrow: "Cost signal review",
    title: "Keep cost intelligence approval-backed.",
    text: "Cost Links Needing Setup shows which receipt signals are matched, blocked, or ready for review before they become active Cost Movement.",
    image: "/kitchenpulse-cost-center-cost-links.png",
    alt: "KitchenPulse Cost Links Needing Setup and Cost Signals Awaiting Review sections",
    points: [
      "Matched signals ready for approval",
      "Unlinked receipt lines stay blocked",
      "Cost changes remain review-first",
    ],
  },
];

const workflow = [
  {
    title: "Capture",
    text: "Sales, events, staffing, weather, and receipts enter KitchenPulse through controlled intake lanes.",
  },
  {
    title: "Normalize",
    text: "The system cleans noisy vendor, POS, and operating data into consistent restaurant signals.",
  },
  {
    title: "Compare",
    text: "Runs and signals are compared against the right prior context instead of generic averages.",
  },
  {
    title: "Recommend",
    text: "KitchenPulse surfaces practical actions for owners, GMs, and managers before service.",
  },
];

const integrations = [
  "POS and sales reports",
  "Private event systems",
  "Vendor receipts and invoices",
  "Weather and local context",
  "Staffing/scheduler feeds",
  "Manual manager inputs",
];

const proofPoints = [
  "Review-first design before sensitive updates",
  "Designed for independent restaurant operators",
  "Built around explainable decisions, not raw dashboards",
  "Multi-tenant foundation for future restaurant onboarding",
];

function ScreenshotFrame({
  image,
  alt,
  label,
}: {
  image: string;
  alt: string;
  label?: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/20">
      {label ? (
        <div className="mb-3 flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
          <span className="h-2 w-2 rounded-full bg-pulse shadow-[0_0_18px_rgba(32,211,238,0.65)]" />
          {label}
        </div>
      ) : null}
      <img
        src={image}
        alt={alt}
        className="h-auto w-full rounded-[1.55rem] border border-white/10"
      />
    </div>
  );
}

function PointList({ points }: { points: string[] }) {
  return (
    <div className="mt-6 grid gap-3">
      {points.map((point) => (
        <div
          key={point}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-200"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-pulse shadow-[0_0_18px_rgba(32,211,238,0.55)]" />
          {point}
        </div>
      ))}
    </div>
  );
}

function SectionIntro({
  eyebrow,
  icon: Icon,
  title,
  text,
}: {
  eyebrow: string;
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
        <Icon size={16} /> {eyebrow}
      </div>
      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>
    </div>
  );
}

function CompactFeatureExplorer({
  items,
  activeIndex,
  setActiveIndex,
  accentIcon,
}: {
  items: typeof receiptSteps;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  accentIcon: any;
}) {
  const active = items[activeIndex];
  const Icon = accentIcon;

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
      <div className="grid gap-3">
        {items.map((item, index) => {
          const selected = activeIndex === index;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-3xl border p-5 text-left transition ${
                selected
                  ? "border-cyan-300/45 bg-cyan-300/[0.10] shadow-[0_0_28px_rgba(32,211,238,0.13)]"
                  : "border-white/10 bg-slate-950/30 hover:border-cyan-300/30 hover:bg-white/[0.055]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-2xl ${
                    selected ? "bg-pulse text-slate-950" : "bg-white/10 text-cyan-100"
                  }`}
                >
                  <Icon size={17} />
                </span>
                <span className="text-base font-semibold text-white">
                  {item.title}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {item.text}
              </p>
            </button>
          );
        })}
      </div>

      <ScreenshotFrame image={active.image} alt={active.title} label={active.title} />
    </div>
  );
}

export default function Home() {
  const [activeTourIndex, setActiveTourIndex] = useState(0);
  const [openMobileTourIndex, setOpenMobileTourIndex] = useState(0);
  const [activeReceiptIndex, setActiveReceiptIndex] = useState(0);
  const [activeCostIndex, setActiveCostIndex] = useState(0);

  const activeTour = tourSections[activeTourIndex];
  const ActiveTourIcon = activeTour.icon;

  const signalText = useMemo(() => signals.join(" • "), []);

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
              href="/get-started"
              className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/85 transition hover:border-cyan-300/60 hover:text-white md:inline-flex"
            >
              Get Started
            </a>

            <a
              href="https://portal.synthopulse.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-pulse px-3 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_25px_rgba(32,211,238,0.25)] transition hover:scale-[1.02] sm:px-5 sm:text-sm"
            >
              Client Login
            </a>

            <a
              href="mailto:info@synthopulse.ai"
              className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/85 transition hover:border-cyan-300/60 hover:text-white sm:inline-flex"
            >
              Contact
            </a>
          </div>
        </header>

        <section className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
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
                href="/get-started"
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/10 px-6 py-3 font-semibold text-cyan-50 transition hover:border-cyan-200 hover:bg-cyan-300/15"
              >
                Get Started
              </a>

              <a
                href="#integration"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white/90 transition hover:border-cyan-300/60"
              >
                Integration Approach
              </a>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.035] p-4 text-sm text-slate-300">
              <span className="font-semibold text-cyan-100">Signals connected:</span>{" "}
              {signalText}
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
                src="/kitchenpulse-home.png"
                alt="KitchenPulse operator portal showing restaurant operating intelligence"
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

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
          <SectionIntro
            eyebrow="KitchenPulse product tour"
            icon={Sparkles}
            title="One operating layer for the decisions restaurants make before service."
            text="KitchenPulse connects daily sales movement, event pressure, staffing coverage, vendor receipts, and margin signals into a practical decision layer for operators."
          />

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

          <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="grid gap-2">
              {tourSections.map((section, index) => {
                const selected = activeTourIndex === index;
                const Icon = section.icon;

                return (
                  <button
                    key={section.title}
                    type="button"
                    onClick={() => setActiveTourIndex(index)}
                    className={`rounded-2xl border px-4 py-3 text-left transition ${
                      selected
                        ? "border-cyan-300/45 bg-cyan-300/[0.10] shadow-[0_0_28px_rgba(32,211,238,0.13)]"
                        : "border-white/10 bg-slate-950/25 hover:border-cyan-300/30 hover:bg-white/[0.055]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl ${
                          selected
                            ? "bg-pulse text-slate-950"
                            : "bg-white/10 text-cyan-100"
                        }`}
                      >
                        <Icon size={17} />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {section.shortTitle}
                        </div>
                        <div className="mt-0.5 text-xs uppercase tracking-[0.16em] text-slate-400">
                          {section.eyebrow}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/30 p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                <ActiveTourIcon size={15} /> {activeTour.eyebrow}
              </div>

              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {activeTour.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                {activeTour.text}
              </p>

              <PointList points={activeTour.points} />

              <div className="mt-7">
                <ScreenshotFrame
                  image={activeTour.image}
                  alt={activeTour.alt}
                  label={activeTour.shortTitle}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 lg:hidden">
            {tourSections.map((section, index) => {
              const open = openMobileTourIndex === index;
              const Icon = section.icon;

              return (
                <div
                  key={section.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/30"
                >
                  <button
                    type="button"
                    onClick={() => setOpenMobileTourIndex(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">
                        <Icon size={18} />
                      </span>
                      <div>
                        <div className="font-semibold text-white">
                          {section.shortTitle}
                        </div>
                        <div className="mt-0.5 text-xs uppercase tracking-[0.16em] text-slate-400">
                          {section.eyebrow}
                        </div>
                      </div>
                    </div>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-cyan-100 transition ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {open ? (
                    <div className="border-t border-white/10 p-5 pt-0">
                      <h3 className="pt-5 text-2xl font-semibold tracking-tight">
                        {section.title}
                      </h3>
                      <p className="mt-4 leading-7 text-slate-300">
                        {section.text}
                      </p>
                      <PointList points={section.points} />
                      <div className="mt-6">
                        <ScreenshotFrame image={section.image} alt={section.alt} />
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-[2.25rem] border border-cyan-300/15 bg-cyan-300/[0.055] p-6 sm:p-8 lg:p-10">
          <SectionIntro
            eyebrow="Review-first receipt workflow"
            icon={LockKeyhole}
            title="Vendor costs are staged, parsed, and approved before they change the business."
            text="Receipt Intake is intentionally conservative. Uploads land in a review queue first, parsed line items require human approval, and pricing proposals are reviewed before KitchenPulse updates cost data."
          />

          <CompactFeatureExplorer
            items={receiptSteps}
            activeIndex={activeReceiptIndex}
            setActiveIndex={setActiveReceiptIndex}
            accentIcon={ReceiptText}
          />
        </section>

        <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
          <SectionIntro
            eyebrow="Cost Center"
            icon={DollarSign}
            title="Approved receipt data becomes margin intelligence."
            text="Once receipt lines are reviewed, KitchenPulse turns them into cost movement signals operators can actually act on."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="grid gap-3">
              {costCenterSections.map((section, index) => {
                const selected = activeCostIndex === index;

                return (
                  <button
                    key={section.title}
                    type="button"
                    onClick={() => setActiveCostIndex(index)}
                    className={`rounded-3xl border p-5 text-left transition ${
                      selected
                        ? "border-cyan-300/45 bg-cyan-300/[0.10] shadow-[0_0_28px_rgba(32,211,238,0.13)]"
                        : "border-white/10 bg-slate-950/30 hover:border-cyan-300/30 hover:bg-white/[0.055]"
                    }`}
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                      {section.eyebrow}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      {section.title}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {section.text}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/30 p-6">
              <h3 className="text-3xl font-semibold tracking-tight">
                {costCenterSections[activeCostIndex].title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                {costCenterSections[activeCostIndex].text}
              </p>

              <PointList points={costCenterSections[activeCostIndex].points} />

              <div className="mt-7">
                <ScreenshotFrame
                  image={costCenterSections[activeCostIndex].image}
                  alt={costCenterSections[activeCostIndex].alt}
                  label={costCenterSections[activeCostIndex].eyebrow}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="integration"
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-9"
        >
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
                menu, reservation/event, receipt, and operating signals. It is
                designed to read, stage, explain, and recommend before changing
                sensitive operating data.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:w-[470px]">
              {integrations.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-9">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <Sparkles size={16} /> Operating workflow
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">
              From raw signal to manager action.
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              KitchenPulse is not meant to be another dashboard that waits for
              someone to interpret it. The system is designed to turn signals
              into a daily operating read.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {workflow.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-slate-950/30 p-5"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-2xl bg-pulse text-sm font-bold text-slate-950">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <ShieldCheck size={16} /> Why operators can trust it
              </div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Practical intelligence, not generic BI.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                KitchenPulse is built around the work restaurant teams actually do:
                reviewing service, preparing for demand, checking staffing,
                controlling costs, and explaining what changed.
              </p>
            </div>

            <div className="grid gap-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-200"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.55)]" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2.25rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_top,_rgba(32,211,238,0.18),_transparent_40%),rgba(255,255,255,0.045)] p-8 text-center shadow-2xl shadow-cyan-950/25 sm:p-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <Bot size={16} /> SynthoPulse for restaurant operators
            </div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Give managers one place to understand what matters before service.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              KitchenPulse is built for independent restaurant teams that need
              clear daily recommendations, safer cost workflows, and a better way
              to connect sales, events, staffing, and vendor signals.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pulse px-6 py-3 font-semibold text-slate-950 shadow-[0_0_35px_rgba(32,211,238,0.35)] transition hover:scale-[1.02]"
              >
                Get Started <ArrowRight size={18} />
              </a>

              <a
                href="mailto:info@synthopulse.ai"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white/90 transition hover:border-cyan-300/60"
              >
                Contact SynthoPulse
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