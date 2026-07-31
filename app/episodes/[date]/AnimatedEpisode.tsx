"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Player, type PlayerRef } from "@remotion/player";
import type { EpisodeTimeline } from "@/types/episode";
import { YukkuriWeb } from "./remotion/YukkuriWeb";
import type { TimingData } from "./remotion/types";

type AnimationProps = {
  audioUrl: string;
  title: string;
  mode: string;
  markdownSource?: string;
  timeline: EpisodeTimeline;
};

type Adjustments = {
  timingOffsetFrames: number;
  scrollOffsetPx: number;
  manualSectionName?: string;
};

const DEFAULT_ADJUSTMENTS: Adjustments = { timingOffsetFrames: 0, scrollOffsetPx: 0 };

function toTimingData(props: AnimationProps): TimingData {
  return {
    title: props.title,
    markdown: props.markdownSource ?? "",
    fps: props.timeline.fps,
    totalFrames: props.timeline.totalFrames,
    youtubeScreens: true,
    segments: props.timeline.cues.map((cue, id) => ({
      id,
      speaker: cue.speaker,
      text: cue.text,
      section: /オープニング/.test(cue.section)
        ? "opening"
        : /エンディング/.test(cue.section)
          ? "ending"
          : "main",
      sectionName: cue.section,
      startFrame: cue.startFrame,
      endFrame: cue.endFrame,
      audioFile: "",
    })),
  };
}

export function AnimatedEpisode(props: AnimationProps) {
  const timingData = toTimingData(props);
  const playerRef = useRef<PlayerRef>(null);
  const storageKey = `ai-qc-news:adjustment:2026-07-31:${props.mode}`;
  const [adjustments, setAdjustments] = useState<Adjustments>(DEFAULT_ADJUSTMENTS);
  const sections = useMemo(
    () => [...new Set(timingData.segments.map((segment) => segment.sectionName))],
    [timingData.segments],
  );

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) setAdjustments(JSON.parse(saved) as Adjustments);
  }, [storageKey]);

  const currentSection = () => {
    if (adjustments.manualSectionName) return adjustments.manualSectionName;
    const frame = (playerRef.current?.getCurrentFrame() ?? 0) + adjustments.timingOffsetFrames;
    return [...timingData.segments].reverse().find((segment) => segment.startFrame <= frame)?.sectionName
      ?? sections[0];
  };

  const moveSection = (direction: number) => {
    const index = Math.max(0, sections.indexOf(currentSection()));
    const next = sections[Math.max(0, Math.min(sections.length - 1, index + direction))];
    setAdjustments((value) => ({ ...value, manualSectionName: next, scrollOffsetPx: 0 }));
  };

  const save = () => window.localStorage.setItem(storageKey, JSON.stringify(adjustments));
  const reset = () => {
    window.localStorage.removeItem(storageKey);
    setAdjustments(DEFAULT_ADJUSTMENTS);
  };
  const exportJson = () => {
    const blob = new Blob([JSON.stringify({ date: "2026-07-31", mode: props.mode, ...adjustments }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `2026-07-31_${props.mode}_adjustment.json`;
    link.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div style={{ marginTop: 8 }}>
      <Player
        ref={playerRef}
        component={YukkuriWeb}
        inputProps={{ timingData, audioUrl: props.audioUrl, ...adjustments }}
        durationInFrames={timingData.totalFrames}
        compositionWidth={1280}
        compositionHeight={720}
        fps={timingData.fps}
        controls
        style={{ width: "100%", aspectRatio: "16 / 9", borderRadius: 10, overflow: "hidden" }}
      />
      <div className="remotion-adjuster">
        <button type="button" onClick={() => moveSection(-1)}>← 前の章</button>
        <button type="button" onClick={() => moveSection(1)}>次の章 →</button>
        <button type="button" onClick={() => setAdjustments((v) => ({ ...v, manualSectionName: undefined }))}>音声追従</button>
        <button type="button" onClick={() => setAdjustments((v) => ({ ...v, scrollOffsetPx: v.scrollOffsetPx - 80 }))}>画面 ↑</button>
        <button type="button" onClick={() => setAdjustments((v) => ({ ...v, scrollOffsetPx: v.scrollOffsetPx + 80 }))}>画面 ↓</button>
        <button type="button" onClick={() => setAdjustments((v) => ({ ...v, timingOffsetFrames: v.timingOffsetFrames - 3 }))}>同期 −0.1秒</button>
        <button type="button" onClick={() => setAdjustments((v) => ({ ...v, timingOffsetFrames: v.timingOffsetFrames + 3 }))}>同期 ＋0.1秒</button>
        <button type="button" onClick={save}>保存</button>
        <button type="button" onClick={exportJson}>JSON出力</button>
        <button type="button" onClick={reset}>リセット</button>
        <span>時刻 {adjustments.timingOffsetFrames / 30 >= 0 ? "+" : ""}{(adjustments.timingOffsetFrames / 30).toFixed(1)}秒 / 画面 {adjustments.scrollOffsetPx}px</span>
      </div>
      <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between", gap: 12, color: "var(--muted)", fontSize: 12 }}>
        <span>動画プレビュー共通画面・音声同期Web版（2026-07-31限定）</span>
        <a href={props.audioUrl}>音声ファイルを直接開く</a>
      </div>
    </div>
  );
}
