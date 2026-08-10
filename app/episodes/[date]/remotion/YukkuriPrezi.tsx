import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from "remotion";
import type {TimingData, Segment} from "./types";
import {CharacterFace} from "./components/CharacterFace";

type Props = {
  timingData: TimingData;
  audioUrl: string;
  timingOffsetFrames?: number;
  showSubtitles?: boolean;
  characterScale?: number;
};

type Board = {name: string; markdown: string; x: number; y: number; rotation: number};
const clamp = {extrapolateLeft: "clamp", extrapolateRight: "clamp"} as const;
const TITLE_H = 54;

const boardsFromMarkdown = (markdown: string): Board[] => {
  const chunks = markdown.split(/(?=^##\s)/m).filter((chunk) => chunk.trim());
  return chunks.map((chunk, index) => ({
    name: chunk.match(/^##\s+(.+)$/m)?.[1].trim() ?? (index === 0 ? "概要" : `トピック ${index + 1}`),
    markdown: chunk,
    x: (index % 3) * 1080,
    y: Math.floor(index / 3) * 650,
    rotation: [-1.4, 0.8, -0.5, 1.1][index % 4],
  }));
};

export const YukkuriPrezi: React.FC<Props> = ({
  timingData,
  timingOffsetFrames = 0,
  showSubtitles = true,
  characterScale = 1,
}) => {
  const frame = useCurrentFrame();
  const syncFrame = Math.max(0, Math.min(timingData.totalFrames - 1, frame + timingOffsetFrames));
  const current: Segment | undefined = timingData.segments.find((cue) => syncFrame >= cue.startFrame && syncFrame < cue.endFrame);
  const previousCue = [...timingData.segments].reverse().find((cue) => cue.startFrame <= syncFrame);
  const boards = boardsFromMarkdown(timingData.markdown);
  const activeIndex = Math.max(0, boards.findIndex((board) =>
    board.name === previousCue?.sectionName || board.name.includes(previousCue?.sectionName ?? "__none__") || (previousCue?.sectionName ?? "").includes(board.name),
  ));
  const active = boards[activeIndex] ?? boards[0];
  const prior = boards[Math.max(0, activeIndex - 1)] ?? active;
  const sectionStart = timingData.segments.find((cue) => cue.sectionName === previousCue?.sectionName)?.startFrame ?? 0;
  const move = interpolate(syncFrame - sectionStart, [0, 34], [0, 1], {...clamp, easing: Easing.inOut(Easing.cubic)});
  const cameraX = interpolate(move, [0, 1], [prior.x, active.x]);
  const cameraY = interpolate(move, [0, 1], [prior.y, active.y]);
  const zoom = interpolate(move, [0, 0.45, 1], [0.76, 0.88, 1]);
  const subtitle = current?.text ?? "";
  const isLong = subtitle.length > 28;

  return (
    <AbsoluteFill style={{background: "#dfe5ef", overflow: "hidden", fontFamily: '"Hiragino Sans", "Noto Sans JP", sans-serif'}}>
      <div className="prezi-grid" />
      <div className="prezi-camera" style={{transform: `translate(640px, 350px) scale(${zoom}) translate(${-cameraX - 450}px, ${-cameraY - 240}px)`}}>
        {boards.map((board, index) => <article
          key={`${board.name}-${index}`}
          className={`prezi-board${index === activeIndex ? " is-active" : ""}`}
          style={{left: board.x, top: board.y, transform: `rotate(${board.rotation}deg)`}}
        >
          <div className="prezi-board-number">{String(index + 1).padStart(2, "0")}</div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{board.markdown}</ReactMarkdown>
        </article>)}
      </div>

      <div style={{position: "absolute", zIndex: 5, top: 0, left: 0, width: 1280, height: TITLE_H, background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", display: "flex", alignItems: "center", padding: "0 24px", boxSizing: "border-box"}}>
        <span style={{color: "#fff", fontSize: 22, fontWeight: 700}}>{timingData.title}</span>
        <span style={{marginLeft: "auto", color: "#9ec5ff", fontSize: 14, fontWeight: 700}}>PREZI TEST 01</span>
      </div>
      <div style={{position: "absolute", zIndex: 6, bottom: 0, left: 0}}><CharacterFace character="A" isSpeaking={current?.speaker === "A"} side="left" size={315 * characterScale} /></div>
      <div style={{position: "absolute", zIndex: 6, bottom: 0, right: 0}}><CharacterFace character="B" isSpeaking={current?.speaker === "B"} side="right" size={315 * characterScale} /></div>
      {showSubtitles && <div style={{position: "absolute", zIndex: 7, bottom: 12, left: 240, right: 280, textAlign: isLong ? "left" : "center", color: "#fff", fontSize: isLong ? 28 : 34, fontWeight: 700, lineHeight: 1.5, textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 3px 8px rgba(0,0,0,.9)"}}>{subtitle}</div>}
    </AbsoluteFill>
  );
};
