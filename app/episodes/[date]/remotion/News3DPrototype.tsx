import React from "react";
import {ThreeCanvas} from "@remotion/three";
import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";
import type {TimingData, Segment} from "./types";
import {MarkdownPanel} from "./components/MarkdownPanel";
import {CharacterFace} from "./components/CharacterFace";
import {ZundamonVrm} from "./components/ZundamonVrm";

type Props = {
  timingData: TimingData;
  audioUrl: string;
  timingOffsetFrames?: number;
  showSubtitles?: boolean;
  mode?: string;
};

const TITLE_H = 54;
const BOTTOM_H = 160;
const CHARACTER_SIZE = 315;
const SUBTITLE_LEFT_INSET = 240;
const SUBTITLE_RIGHT_INSET = 280;
const clamp = {extrapolateLeft: "clamp", extrapolateRight: "clamp"} as const;

export const News3DPrototype: React.FC<Props> = ({
  timingData,
  timingOffsetFrames = 0,
  showSubtitles = true,
  mode = "news",
}) => {
  const frame = useCurrentFrame();
  const syncFrame = Math.max(0, Math.min(timingData.totalFrames - 1, frame + timingOffsetFrames));
  const current: Segment | undefined = timingData.segments.find((cue) => syncFrame >= cue.startFrame && syncFrame < cue.endFrame);
  const previous = [...timingData.segments].reverse().find((cue) => cue.startFrame <= syncFrame);
  const segmentIndex = previous ? timingData.segments.indexOf(previous) : 0;
  const sectionName = previous?.sectionName ?? "";
  let sectionStartIndex = segmentIndex;
  let sectionEndIndex = segmentIndex + 1;
  while (sectionStartIndex > 0 && timingData.segments[sectionStartIndex - 1].sectionName === sectionName) sectionStartIndex--;
  while (sectionEndIndex < timingData.segments.length && timingData.segments[sectionEndIndex].sectionName === sectionName) sectionEndIndex++;

  const sectionStartFrame = timingData.segments[sectionStartIndex]?.startFrame ?? 0;
  const intro = interpolate(syncFrame - sectionStartFrame, [0, 24], [0, 1], clamp);
  const tilt = interpolate(intro, [0, 1], [-2.2, 0], clamp) + Math.sin(frame / 110) * 0.18;
  const scale = interpolate(intro, [0, 1], [0.975, 1], clamp);
  const subtitle = current?.text ?? "";
  const multiline = subtitle.length > 28;
  const speakingA = current?.speaker === "A";
  const speakingB = current?.speaker === "B";
  const color = current?.speaker === "A" ? "#4caf50" : "#e91e8c";
  const name = current?.speaker === "A" ? "ずんだもん" : "四国めたん";

  return (
    <AbsoluteFill style={{background: "#f0f2f5", fontFamily: '"Hiragino Sans", "Noto Sans JP", sans-serif', overflow: "hidden"}}>
      <div style={{position: "absolute", top: 0, left: 0, width: 1280, height: TITLE_H, background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", display: "flex", alignItems: "center", padding: "0 24px", boxSizing: "border-box", zIndex: 3}}>
        <span style={{color: "#fff", fontSize: 22, fontWeight: 700, letterSpacing: 1}}>{timingData.title}</span>
        <span style={{marginLeft: "auto", color: "#9ec5ff", fontSize: 14, fontWeight: 700}}>3D VIEW</span>
      </div>

      <div className="news-3d-match-panel" style={{transform: `perspective(1500px) rotateY(${tilt}deg) scale(${scale})`}}>
        <MarkdownPanel
          markdown={timingData.markdown}
          currentSegmentIndex={segmentIndex}
          totalSegments={timingData.segments.length}
          currentSectionName={sectionName}
          sectionStartIndex={sectionStartIndex}
          sectionEndIndex={sectionEndIndex}
        />
      </div>

      <div className="news-3d-vrm-character left">
        <ThreeCanvas width={360} height={410} camera={{fov: 30, near: 0.1, far: 20, position: [0, 0.82, 2.18]}}>
          <ambientLight intensity={2.2} />
          <directionalLight position={[2, 4, 3]} intensity={3.2} />
          <ZundamonVrm src={`${process.env.NODE_ENV === "production" ? "/ai-qc-news" : ""}/models/Zundamon_2025_VRM10A.vrm?instance=${mode}`} isSpeaking={speakingA} />
        </ThreeCanvas>
      </div>
      <div className="news-3d-match-character right"><CharacterFace character="B" isSpeaking={speakingB} side="right" size={CHARACTER_SIZE} /></div>

      {showSubtitles && <div style={{position: "absolute", zIndex: 5, bottom: 12, left: SUBTITLE_LEFT_INSET, right: SUBTITLE_RIGHT_INSET, textAlign: multiline ? "left" : "center"}}>
        <span style={{display: "inline-block", padding: "4px 20px", color: "#fff", fontSize: multiline ? 28 : 34, fontWeight: 700, lineHeight: 1.5, textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 3px 8px rgba(0,0,0,0.9)"}}>{subtitle}</span>
      </div>}

      {current && <div style={{position: "absolute", zIndex: 6, bottom: BOTTOM_H - 2, left: current.speaker === "A" ? 4 : undefined, right: current.speaker === "B" ? 4 : undefined, background: color, color: "#fff", fontSize: 16, fontWeight: 700, padding: "3px 12px", borderRadius: "4px 4px 0 0"}}>{name}</div>}
    </AbsoluteFill>
  );
};
