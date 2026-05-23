export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Discord Server Management
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Automate Discord Role Cleanup &amp; Audit Logs
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Scan your Discord servers for unused roles, permission conflicts, and generate compliance audit reports automatically. Built for admins who care about security.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Auditing — $15/mo
        </a>
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">500+</div>
            <div className="text-[#8b949e] text-sm">Servers Scanned</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">12k+</div>
            <div className="text-[#8b949e] text-sm">Roles Audited</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">99%</div>
            <div className="text-[#8b949e] text-sm">Uptime</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited server scans",
              "Automated role conflict detection",
              "Weekly audit reports via email",
              "Permission risk scoring",
              "Historical audit log storage",
              "Discord OAuth integration"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">How does it connect to my Discord server?</h3>
            <p className="text-[#8b949e] text-sm">You authorize via Discord OAuth. We request read-only permissions to scan roles and members — we never modify your server without explicit action.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">What counts as an unused or conflicting role?</h3>
            <p className="text-[#8b949e] text-sm">Unused roles have zero members assigned. Conflicting roles have overlapping permissions that could create security gaps or unintended access escalation.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing dashboard. Your access continues until the end of the billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Discord Role Audit Automator. All rights reserved.
      </footer>
    </main>
  );
}
