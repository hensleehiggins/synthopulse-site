import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SynthoPulse",
  description:
    "Privacy Policy for KitchenPulse, a restaurant operations application operated by SynthoPulse LLC.",
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(36, 214, 255, 0.14), transparent 34%), #06111f",
        color: "#f8fbff",
        padding: "64px 22px",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <article
        style={{
          width: "100%",
          maxWidth: 860,
          margin: "0 auto",
          background: "rgba(12, 29, 49, 0.82)",
          border: "1px solid rgba(109, 228, 255, 0.22)",
          borderRadius: 28,
          padding: "42px 34px",
          boxShadow: "0 24px 70px rgba(0, 0, 0, 0.28)",
        }}
      >
        <p
          style={{
            color: "#65def5",
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          SynthoPulse LLC
        </p>

        <h1
          style={{
            fontSize: "clamp(38px, 6vw, 64px)",
            lineHeight: 0.95,
            margin: "0 0 18px",
            letterSpacing: "-0.05em",
          }}
        >
          Privacy Policy
        </h1>

        <p style={leadStyle}>Effective Date: June 2026</p>

        <p style={bodyStyle}>
          SynthoPulse LLC operates KitchenPulse, a restaurant operations
          application used for receipt intake, stock counts, item setup, and
          ordering intelligence.
        </p>

        <Section title="Information We Collect">
          <p style={bodyStyle}>
            KitchenPulse may collect information submitted by authorized
            restaurant operators and staff, including receipt photos, receipt
            details, vendor information, stock count entries, item names,
            storage areas, notes, item setup details, and ordering-related
            operational records.
          </p>

          <p style={bodyStyle}>
            KitchenPulse may also collect optional staff-entered names or
            identifiers when a user chooses to include them with a stock count,
            review action, or operational note.
          </p>
        </Section>

        <Section title="How We Use Information">
          <p style={bodyStyle}>
            We use this information to provide KitchenPulse features, including
            receipt processing, stock count review, item setup, order
            intelligence, vendor context, operational reporting,
            troubleshooting, and service improvement.
          </p>
        </Section>

        <Section title="Photos and Camera Access">
          <p style={bodyStyle}>
            KitchenPulse uses camera and photo library access so authorized
            users can submit receipt photos and related operational records.
            Photos are used for receipt processing and restaurant workflow
            support.
          </p>
        </Section>

        <Section title="Data Sharing">
          <p style={bodyStyle}>We do not sell personal information.</p>

          <p style={bodyStyle}>
            KitchenPulse data may be processed by service providers used to
            operate the platform, including hosting, database, automation,
            analytics, and AI-processing infrastructure. These providers are
            used only to deliver, maintain, secure, and improve KitchenPulse
            functionality.
          </p>

          <p style={bodyStyle}>
            We may disclose information if required by law or to protect the
            security, rights, or integrity of SynthoPulse, KitchenPulse, our
            customers, or our services.
          </p>
        </Section>

        <Section title="Tracking and Advertising">
          <p style={bodyStyle}>
            KitchenPulse does not use submitted app data for third-party
            advertising or cross-app tracking.
          </p>
        </Section>

        <Section title="Data Retention">
          <p style={bodyStyle}>
            We retain operational records as needed to provide the KitchenPulse
            service, maintain business records, support audits, improve
            accuracy, and troubleshoot customer issues.
          </p>
        </Section>

        <Section title="Security">
          <p style={bodyStyle}>
            We use reasonable technical and organizational measures to protect
            KitchenPulse data. No system can be guaranteed to be completely
            secure.
          </p>
        </Section>

        <Section title="Contact">
          <p style={bodyStyle}>
            For privacy questions, contact SynthoPulse LLC at{" "}
            <a style={linkStyle} href="mailto:hank.higgins@synthopulse.ai">
              hank.higgins@synthopulse.ai
            </a>
            .
          </p>
        </Section>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: 34 }}>
      <h2
        style={{
          fontSize: 24,
          margin: "0 0 12px",
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

const leadStyle: React.CSSProperties = {
  color: "#aebbd0",
  fontSize: 18,
  lineHeight: 1.7,
  margin: "0 0 28px",
};

const bodyStyle: React.CSSProperties = {
  color: "#c8d3e4",
  fontSize: 17,
  lineHeight: 1.75,
  margin: "0 0 14px",
};

const linkStyle: React.CSSProperties = {
  color: "#65def5",
  fontWeight: 800,
  textDecoration: "none",
};
