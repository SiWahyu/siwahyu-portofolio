import { useEffect, useRef } from "react";
import bgMusic from "../assets/bg-music.mp3";

export default function PlayMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.2;

    const playAudio = () => {
      audio.play().catch(() => {});
    };

    playAudio();

    const startOnInteraction = () => {
      playAudio();
      document.removeEventListener("pointerdown", startOnInteraction);
      document.removeEventListener("keydown", startOnInteraction);
    };

    document.addEventListener("pointerdown", startOnInteraction);
    document.addEventListener("keydown", startOnInteraction);

    return () => {
      document.removeEventListener("pointerdown", startOnInteraction);
      document.removeEventListener("keydown", startOnInteraction);
    };
  }, []);

  return <audio ref={audioRef} src={bgMusic} autoPlay loop />;
}
