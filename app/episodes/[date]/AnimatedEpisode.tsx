"use client";

import { Player } from "@remotion/player";
import type { EpisodeTimeline } from "@/types/episode";
import { YukkuriWeb } from "./remotion/YukkuriWeb";
import type { TimingData } from "./remotion/types";

type AnimationProps = {
  audioUrl: string;
  title: string;
  markdownSource?: string;
  timeline: EpisodeTimeline;
};

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
  return (
    <div style={{ marginTop: 8 }}>
      <Player
        component={YukkuriWeb}
        inputProps={{ timingData, audioUrl: props.audioUrl }}
        durationInFrames={timingData.totalFrames}
        compositionWidth={1280}
        compositionHeight={720}
        fps={timingData.fps}
        controls
        style={{ width: "100%", aspectRatio: "16 / 9", borderRadius: 10, overflow: "hidden" }}
      />
      <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between", gap: 12, color: "var(--muted)", fontSize: 12 }}>
        <span>動画プレビュー共通画面・音声同期Web版（2026-07-31限定）</span>
        <a href={props.audioUrl}>音声ファイルを直接開く</a>
      </div>
    </div>
  );
}
