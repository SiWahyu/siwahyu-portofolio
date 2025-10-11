import { useEffect, useRef } from "react";
import amongus from "../assets/among-us.mp3";

export default function PlayMusic() {
  const audioRef = useRef(null);

  // useEffect(() => {
  //   const audio = audioRef.current;
  //   audio.volume = 0.2;
  //   const playAudio = async () => {
  //     try {
  //       await audioRef.current.play();
  //       console.log("Musik diputar ");
  //     } catch (err) {
  //       console.warn("Autoplay diblokir browser : ", err);
  //       document.addEventListener(
  //         "click",
  //         () => {
  //           audioRef.current.play();
  //         },
  //         { once: true }
  //       );
  //     }
  //   };
  //   playAudio();
  // }, []);

  // return <audio ref={audioRef} src={amongus} autoPlay loop />;
}
