import episodesData from "@/data/episodes.json";
import type { Episode } from "@/types/episode";
import Link from "next/link";

const episodes = episodesData as Episode[];

const MODE_LABEL: Record<string, string> = {
  ai: "生成AI ニュース",
  ai_gougai: "生成AI 号外",
  arxiv_ai: "arxiv AI 論文解説",
  arxiv_qc: "arxiv 量子コンピュータ論文解説",
  security: "セキュリティニュース",
  domestic: "国内メディア比較",
};

function allModes(): string[] {
  const seen = new Set<string>();
  for (const ep of episodes) {
    for (const seg of ep.segments) seen.add(seg.mode);
  }
  return Array.from(seen);
}

export function generateStaticParams() {
  return allModes().map((mode) => ({ mode }));
}

export async function generateMetadata({ params }: { params: Promise<{ mode: string }> }) {
  const { mode } = await params;
  return { title: `${MODE_LABEL[mode] ?? mode} | ai-qc-news` };
}

export default async function ModePage({ params }: { params: Promise<{ mode: string }> }) {
  const { mode } = await params;
  const label = MODE_LABEL[mode] ?? mode;

  const items = episodes
    .map((ep) => ({ date: ep.date, seg: ep.segments.find((s) => s.mode === mode) }))
    .filter((x): x is { date: string; seg: NonNullable<typeof x.seg> } => Boolean(x.seg));

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Link href="/" style={{ fontSize: 13, color: "var(--muted)" }}>
          ← 日付一覧に戻る
        </Link>
      </div>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--text)" }}>
        {label}
      </h2>
      <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 32 }}>
        新しい順に{items.length}件
      </p>

      {items.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>このカテゴリーのエピソードはまだありません</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {items.map(({ date, seg }) => (
            <section
              key={date}
              style={{ borderBottom: "1px solid var(--border)", paddingBottom: 24 }}
            >
              <Link
                href={`/episodes/${date}/`}
                style={{ fontSize: 14, fontWeight: 500, color: "var(--accent2)" }}
              >
                {date}
              </Link>
              {seg.title && (
                <p style={{ fontSize: 14, marginTop: 6, marginBottom: 10, color: "var(--text)" }}>
                  {seg.title}
                </p>
              )}
              {seg.videoUrl && (
                <video controls style={{ width: "100%" }} src={seg.videoUrl} />
              )}
              {seg.audioUrl && !seg.videoUrl && (
                <audio controls style={{ width: "100%" }} src={seg.audioUrl} />
              )}
              <div style={{ marginTop: 8 }}>
                <Link
                  href={`/episodes/${date}/`}
                  style={{ fontSize: 12, color: "var(--muted)" }}
                >
                  この日の詳細（アニメーション・スライド）を見る →
                </Link>
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
