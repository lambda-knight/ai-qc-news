"use client";

import { Player } from "@remotion/player";
import { AbsoluteFill, Audio, Img, useCurrentFrame } from "remotion";
import type { EpisodeTimeline } from "@/types/episode";

type AnimationProps = {
  audioUrl: string;
  title: string;
  markdown?: string;
  timeline: EpisodeTimeline;
};

const ASSET_ROOT = "https://lambda-knight.github.io/ai-qc-news";

type Slide = { title: string; html: string; plainLength: number };

function plainText(html: string) {
  return html.replace(/<[^>]+>/g, " ").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim();
}

function normalizeHeading(value: string) {
  return value.replace(/[\s　:：―—・\-]/g, "").toLowerCase();
}

function splitIntoSlides(markdown = ""): Slide[] {
  const starts = [...markdown.matchAll(/<h2[^>]*>/g)].map((match) => match.index ?? 0);
  if (!starts.length) {
    return [{ title: "解説", html: markdown, plainLength: plainText(markdown).length }];
  }
  return starts.map((start, index) => {
    const html = markdown.slice(start, starts[index + 1] ?? markdown.length);
    const heading = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1] ?? "解説";
    return { title: plainText(heading), html, plainLength: plainText(html).length };
  });
}

function Character({
  side,
  speaking,
  frame,
}: {
  side: "left" | "right";
  speaking: boolean;
  frame: number;
}) {
  const isLeft = side === "left";
  const mouthOpen = speaking && Math.floor(frame / 4) % 2 === 0;
  const image = isLeft
    ? `${ASSET_ROOT}/${mouthOpen ? "zundamon_open.png" : "zundamon_close.png"}`
    : `${ASSET_ROOT}/${mouthOpen ? "metan_open.png" : "metan.png"}`;
  const bounce = speaking ? Math.sin(frame / 3) * 7 : Math.sin(frame / 24) * 2;
  return (
    <div style={{
      width: 265,
      height: 265,
      transform: `translateY(${bounce}px)`,
      filter: speaking ? "drop-shadow(0 0 18px rgba(255,255,210,.9))" : "none",
      opacity: speaking ? 1 : 0.74,
    }}>
      <Img src={image} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
    </div>
  );
}

function TalkingComposition({ audioUrl, title, markdown, timeline }: AnimationProps) {
  const frame = useCurrentFrame();
  const cue = timeline.cues.find((item) => frame >= item.startFrame && frame < item.endFrame)
    ?? timeline.cues[timeline.cues.length - 1];
  const progress = Math.min(100, (frame / timeline.totalFrames) * 100);
  const slides = splitIntoSlides(markdown);
  const sectionKey = normalizeHeading(cue?.section ?? "");
  const matchedSlide = slides.find((item) => {
    const titleKey = normalizeHeading(item.title);
    return titleKey === sectionKey || titleKey.includes(sectionKey) || sectionKey.includes(titleKey);
  });
  const fallbackHtml = `<h2>${cue?.section ?? "解説"}</h2><p>${cue?.text ?? ""}</p>`;
  const slide = matchedSlide ?? {
    title: cue?.section ?? "解説",
    html: fallbackHtml,
    plainLength: plainText(fallbackHtml).length,
  };
  const sectionCues = timeline.cues.filter((item) => item.section === cue?.section);
  const sectionStart = sectionCues[0]?.startFrame ?? 0;
  const sectionEnd = sectionCues[sectionCues.length - 1]?.endFrame ?? timeline.totalFrames;
  const sectionProgress = Math.max(0, Math.min(1, (frame - sectionStart) / Math.max(1, sectionEnd - sectionStart)));
  const estimatedRows = Math.ceil(slide.plainLength / 52) + (slide.html.match(/<(h2|h3|li|tr)/g)?.length ?? 0);
  const maxScroll = Math.max(0, estimatedRows * 31 - 340);
  const scrollY = maxScroll * sectionProgress;

  return (
    <AbsoluteFill style={{
      background: "linear-gradient(145deg,#070b1b 0%,#12172d 52%,#171028 100%)",
      color: "white",
      fontFamily: '"Hiragino Sans","Noto Sans JP",sans-serif',
      overflow: "hidden",
    }}>
      <Audio src={audioUrl} />
      <div style={{
        height: 74,
        padding: "0 34px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(0,0,0,.36)",
        borderBottom: "1px solid rgba(255,255,255,.12)",
      }}>
        <div style={{ fontSize: 25, fontWeight: 800 }}>{title}</div>
        <div style={{ fontSize: 18, color: "#a78bfa", whiteSpace: "nowrap" }}>{cue?.section}</div>
      </div>

      <div style={{ position: "absolute", inset: "74px 0 174px", padding: "22px 48px", overflow: "hidden" }}>
        <div style={{
          background: "rgba(255,255,255,.97)",
          color: "#182033",
          borderRadius: 18,
          height: "100%",
          padding: "24px 36px",
          boxSizing: "border-box",
          overflow: "hidden",
          boxShadow: "0 18px 42px rgba(0,0,0,.24)",
        }}>
          <div
            className="remotion-slide-content"
            style={{ transform: `translateY(-${scrollY}px)` }}
            dangerouslySetInnerHTML={{ __html: slide.html }}
          />
        </div>
        {maxScroll > 0 && (
          <div style={{ position: "absolute", right: 55, top: 40, bottom: 40, width: 5, borderRadius: 5, background: "rgba(20,28,48,.12)" }}>
            <div style={{ height: "18%", transform: `translateY(${sectionProgress * 360}px)`, borderRadius: 5, background: "#7c6af7" }} />
          </div>
        )}
      </div>

      <div style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 184,
        background: "linear-gradient(180deg,rgba(6,8,20,.15),rgba(6,8,20,.98) 26%)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: "0 18px",
      }}>
        <Character side="left" speaking={cue?.speaker === "A"} frame={frame} />
        <div style={{
          position: "absolute",
          left: 246,
          right: 246,
          bottom: 34,
          minHeight: 104,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "14px 24px",
          boxSizing: "border-box",
          borderRadius: 16,
          background: "rgba(12,16,34,.94)",
          border: `2px solid ${cue?.speaker === "A" ? "#67d987" : "#f080ba"}`,
          boxShadow: "0 10px 30px rgba(0,0,0,.38)",
          fontSize: cue && cue.text.length > 55 ? 25 : 30,
          fontWeight: 800,
          lineHeight: 1.42,
          textAlign: "center",
          textShadow: "0 2px 5px #000",
        }}>
          {cue?.text}
        </div>
        <Character side="right" speaking={cue?.speaker === "B"} frame={frame} />
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 7, background: "#292b3e" }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "linear-gradient(90deg,#67e8f9,#a78bfa)" }} />
      </div>
    </AbsoluteFill>
  );
}

export function AnimatedEpisode(props: AnimationProps) {
  return (
    <div style={{ marginTop: 8 }}>
      <Player
        component={TalkingComposition}
        inputProps={props}
        durationInFrames={props.timeline.totalFrames}
        compositionWidth={1280}
        compositionHeight={720}
        fps={props.timeline.fps}
        controls
        style={{ width: "100%", aspectRatio: "16 / 9", borderRadius: 10, overflow: "hidden" }}
      />
      <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between", gap: 12, color: "var(--muted)", fontSize: 12 }}>
        <span>Remotion Player音声同期版（2026-07-31限定）</span>
        <a href={props.audioUrl}>音声ファイルを直接開く</a>
      </div>
    </div>
  );
}
