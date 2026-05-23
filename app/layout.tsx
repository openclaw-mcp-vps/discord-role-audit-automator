import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Role Audit Automator",
  description: "Automate Discord role cleanup and audit logs. Scan servers for unused roles, permission conflicts, and generate compliance audit reports."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9cdea325-9bd2-4f25-8017-851cc3f381ed"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
