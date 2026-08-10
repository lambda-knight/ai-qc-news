import React, {useEffect} from "react";
import {VRMHumanBoneName, VRMLoaderPlugin, VRMExpressionPresetName, type VRM} from "@pixiv/three-vrm";
import {useLoader} from "@react-three/fiber";
import {useCurrentFrame} from "remotion";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";

type Props = {src: string; isSpeaking: boolean};

export const ZundamonVrm: React.FC<Props> = ({src, isSpeaking}) => {
  const frame = useCurrentFrame();
  const gltf = useLoader(GLTFLoader, src, (loader) => {
    loader.register((parser) => new VRMLoaderPlugin(parser));
  });
  const vrm = gltf.userData.vrm as VRM;

  useEffect(() => {
    vrm.scene.rotation.y = 0;
    vrm.scene.position.set(0, -1.02, 0);
  }, [vrm]);

  const seconds = frame / 30;
  const mouthOpen = isSpeaking && Math.floor(frame / 3) % 2 === 0;
  const blink = frame % 96 < 4;
  vrm.scene.position.y = -1.02 + Math.sin(seconds * 1.4) * 0.012 + (isSpeaking ? Math.sin(seconds * 8) * 0.008 : 0);
  vrm.scene.rotation.z = Math.sin(seconds * (isSpeaking ? 3.4 : 0.8)) * (isSpeaking ? 0.018 : 0.006);
  vrm.expressionManager?.setValue(VRMExpressionPresetName.Aa, mouthOpen ? 0.72 : 0);
  vrm.expressionManager?.setValue(VRMExpressionPresetName.Blink, blink ? 1 : 0);
  vrm.update(0);
  const leftArm = vrm.humanoid?.getRawBoneNode(VRMHumanBoneName.LeftUpperArm);
  const rightArm = vrm.humanoid?.getRawBoneNode(VRMHumanBoneName.RightUpperArm);
  if (leftArm) leftArm.rotation.z = -1.08;
  if (rightArm) rightArm.rotation.z = 1.08;

  return <primitive object={vrm.scene} />;
};
