import episodesData from "@/data/episodes.json";
import type { Episode } from "@/types/episode";
import { MathContent } from "./MathContent";

const episodes = episodesData as Episode[];

export function generateStaticParams() {
  return episodes.map((ep) => ({ date: ep.date }));
}

export async function generateMetadata({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  return { title: `${date} のニュース` };
}

const MODE_LABEL: Record<string, string> = {
  ai: "生成AI ニュース",
  arxiv_ai: "arxiv AI 論文解説",
  arxiv_qc: "arxiv 量子コンピュータ論文解説",
  domestic: "国内メディア比較",
};

export default async function EpisodePage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const episode = episodes.find((ep) => ep.date === date);
  if (!episode) return <p style={{ color: "var(--muted)" }}>エピソードが見つかりません</p>;

  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 32, color: "var(--text)" }}>
        {date}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {episode.segments.map((seg) => (
          <section key={seg.mode}>
            <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, color: "var(--accent2)" }}>
              {MODE_LABEL[seg.mode] ?? seg.label}
            </h3>
            {seg.videoUrl && (
              <video controls style={{ width: "100%" }} src={seg.videoUrl} />
            )}
            {seg.audioUrl && (
              <audio controls style={{ width: "100%", marginTop: seg.videoUrl ? 8 : 0 }} src={seg.audioUrl} />
            )}
            {seg.markdown && (
              <details style={{ marginTop: 12 }}>
                <summary>スライド（クリックで展開）</summary>
                <MathContent html={seg.markdown} />
              </details>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
