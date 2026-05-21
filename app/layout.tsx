import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CourseTracker – Unified Learning Progress Dashboard",
  description: "Track student progress across Udemy, Coursera, Pluralsight and more. Unified analytics and AI-powered learning path recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8b0e9064-9919-4f4b-b388-1a5116aff4db"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
