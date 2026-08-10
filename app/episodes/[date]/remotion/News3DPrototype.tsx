import React, {useMemo} from "react";
import {RoundedBox} from "@react-three/drei";
import {ThreeCanvas} from "@remotion/three";
import {useThree} from "@react-three/fiber";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {AbsoluteFill, Img, interpolate, useCurrentFrame} from "remotion";
import type {TimingData, Segment} from "./types";

type Props = {
  timingData: TimingData;
  audioUrl: string;
  timingOffsetFrames?: number;
  showSubtitles?: boolean;
};

const clamp = {extrapolateLeft: "clamp", extrapolateRight: "clamp"} as const;
const publicAsset = (name: string) => `${process.env.NODE_ENV === "production" ? "/ai-qc-news" : ""}/${name}`;

const sectionMarkdown = (markdown: string, section: string) => {
  if (!section) return markdown;
  const chunks = markdown.split(/(?=^##\s)/m);
  return chunks.find((chunk) => chunk.match(/^##\s+(.+)$/m)?.[1].trim() === section) ?? chunks.find((chunk) => chunk.startsWith("## ")) ?? markdown;
};

const CameraRig: React.FC<{sectionIndex: number; sectionFrame: number}> = ({sectionIndex, sectionFrame}) => {
  const frame = useCurrentFrame();
  const {camera} = useThree();
  const entrance = interpolate(sectionFrame, [0, 36], [1, 0], clamp);
  const drift = Math.sin((frame + sectionIndex * 29) / 75);
  camera.position.set(1.15 * drift + entrance * 3.5, 0.25 + Math.sin(frame / 110) * 0.18, 8.5 + entrance * 5);
  camera.lookAt(0, 0.15, 0);
  camera.updateProjectionMatrix();
  return null;
};

const StarField: React.FC = () => {
  const points = useMemo(() => Array.from({length: 72}, (_, i) => ({
    x: ((i * 47) % 101) / 8 - 6.3,
    y: ((i * 71) % 83) / 9 - 4.6,
    z: -2 - ((i * 31) % 53) / 5,
    size: 0.018 + (i % 5) * 0.008,
  })), []);
  return <group>{points.map((point, index) => (
    <mesh key={index} position={[point.x, point.y, point.z]}>
      <sphereGeometry args={[point.size, 8, 8]} />
      <meshBasicMaterial color={index % 3 === 0 ? "#a78bfa" : "#67e8f9"} />
    </mesh>
  ))}</group>;
};

const NewsBoard: React.FC<{sectionIndex: number; sectionFrame: number}> = ({sectionIndex, sectionFrame}) => {
  const appear = interpolate(sectionFrame, [0, 24], [0, 1], clamp);
  return (
    <group position={[0, interpolate(appear, [0, 1], [-0.25, 0], clamp), 0]} rotation={[0.02, interpolate(appear, [0, 1], [-0.08, 0], clamp), 0]} scale={interpolate(appear, [0, 1], [0.82, 1], clamp)}>
      <RoundedBox args={[10.4, 5.15, 0.22]} radius={0.16} smoothness={5}>
        <meshStandardMaterial color="#07152e" metalness={0.55} roughness={0.28} />
      </RoundedBox>
      <mesh position={[0, 2.42, 0.16]}>
        <boxGeometry args={[9.9, 0.07, 0.04]} />
        <meshBasicMaterial color={sectionIndex % 2 ? "#a78bfa" : "#22d3ee"} />
      </mesh>
    </group>
  );
};

export const News3DPrototype: React.FC<Props> = ({timingData, timingOffsetFrames = 0, showSubtitles = true}) => {
  const frame = useCurrentFrame();
  const syncFrame = Math.max(0, Math.min(timingData.totalFrames - 1, frame + timingOffsetFrames));
  const current: Segment | undefined = timingData.segments.find((cue) => syncFrame >= cue.startFrame && syncFrame < cue.endFrame);
  const previous = [...timingData.segments].reverse().find((cue) => cue.startFrame <= syncFrame) ?? timingData.segments[0];
  const sections = [...new Set(timingData.segments.map((cue) => cue.sectionName))];
  const sectionIndex = Math.max(0, sections.indexOf(previous?.sectionName ?? ""));
  const firstInSection = timingData.segments.find((cue) => cue.sectionName === previous?.sectionName);
  const sectionFrame = Math.max(0, syncFrame - (firstInSection?.startFrame ?? 0));
  const markdown = sectionMarkdown(timingData.markdown, previous?.sectionName ?? "");
  const speakerA = current?.speaker !== "B";
  const appear = interpolate(sectionFrame, [0, 24], [0, 1], clamp);
  const panelRotate = interpolate(appear, [0, 1], [-5, 0], clamp) + Math.sin(frame / 90) * 0.55;
  const panelScale = interpolate(appear, [0, 1], [0.92, 1], clamp);

  return (
    <AbsoluteFill className="news-3d-root">
      <ThreeCanvas width={1280} height={720} camera={{fov: 43, near: 0.1, far: 100, position: [0, 0, 9]}}>
        <color attach="background" args={["#020817"]} />
        <fog attach="fog" args={["#020817", 10, 24]} />
        <ambientLight intensity={1.3} />
        <directionalLight position={[4, 6, 5]} intensity={3.2} color="#c4b5fd" />
        <pointLight position={[-5, -1, 4]} intensity={35} color="#22d3ee" />
        <StarField />
        <CameraRig sectionIndex={sectionIndex} sectionFrame={sectionFrame} />
        <NewsBoard sectionIndex={sectionIndex} sectionFrame={sectionFrame} />
      </ThreeCanvas>
      <div className="news-3d-topline"><span>NEWS SPACE</span><span>3D PROTOTYPE</span></div>
      <div className="news-3d-content-frame" style={{transform: `perspective(1100px) rotateY(${panelRotate}deg) scale(${panelScale})`}}>
        <article className="news-3d-board">
          <div className="news-3d-kicker">LIVE / {String(sectionIndex + 1).padStart(2, "0")}</div>
          <div className="news-3d-program">{timingData.title}</div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>
      </div>
      <div className={`news-3d-character-rig left${speakerA ? " speaking" : ""}`}>
        <Img className="news-3d-character depth" src={publicAsset("zundamon_close.png")} />
        <Img className="news-3d-character front" src={publicAsset("zundamon_close.png")} />
      </div>
      <div className={`news-3d-character-rig right${!speakerA ? " speaking" : ""}`}>
        <Img className="news-3d-character depth" src={publicAsset("metan.png")} />
        <Img className="news-3d-character front" src={publicAsset("metan.png")} />
      </div>
      {showSubtitles && current && <div className={`news-3d-subtitle ${current.speaker === "A" ? "speaker-a" : "speaker-b"}`}>
        <b>{current.speaker === "A" ? "ずんだもん" : "四国めたん"}</b><span>{current.text}</span>
      </div>}
    </AbsoluteFill>
  );
};
