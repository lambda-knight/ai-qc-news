import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ai-qc-news | AI・量子コンピュータ ニュース",
  description: "生成AI・量子コンピュータの最新ニュースをずんだもん＋四国めたんが解説",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `MathJax={tex:{inlineMath:[['$','$'],['\\\\(','\\\\)']],displayMath:[['$$','$$'],['\\\\[','\\\\]']],processEscapes:true}};`,
          }}
        />
        <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async />
      </head>
      <body>
        <header style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 11, fontFamily: "monospace", padding: "2px 8px", borderRadius: 4, background: "var(--accent)", color: "#fff" }}>
              ai-qc-news
            </span>
            <a href="/" style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>
              AI・量子コンピュータ ニュース
            </a>
          </div>
        </header>

        <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 20px" }}>
          {children}
        </main>

        <footer style={{ borderTop: "1px solid var(--border)", marginTop: 64, padding: "24px 20px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", fontSize: 12, color: "var(--muted)", lineHeight: 1.8 }}>
            <p>
              音声合成:{" "}
              <a href="https://voicevox.hiroshiba.jp/" target="_blank" rel="noopener">VOICEVOX</a>
              {" "}／ キャラクター: ずんだもん（© VOICEVOX）・四国めたん（© VOICEVOX）
            </p>
            <p style={{ marginTop: 4 }}>
              VOICEVOX{" "}
              <a href="https://github.com/VOICEVOX/voicevox/blob/main/LICENSE" target="_blank" rel="noopener">LICENSE</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
