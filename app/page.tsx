"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import CoupleIntro from "@/app/components/CoupleIntro";
import CoupleUs from "@/app/components/CoupleUs";
import CoupleMessage from "@/app/components/CoupleMessage";
import CoupleLogo from "@/app/components/CoupleLogo";
import FlyingBird from "@/app/components/FlyingBird";
import RoseHeroTemp from "@/app/components/RoseHeroTemp";

export default function Home() {

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);


  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/back_song.mp3" loop preload="auto" playsInline />
      <RoseHeroTemp />
      <FlyingBird delay={0} top="15%" size={70} duration={18} />
      <FlyingBird delay={1} top="22%" size={50} duration={20} />
      <FlyingBird delay={2} top="10%" size={60} duration={17} />
      <FlyingBird delay={2} top="30%" size={40} duration={20} />
      <FlyingBird delay={2} top="18%" size={55} duration={19} />

      <CoupleIntro />



      <CoupleUs />

      <CoupleMessage />

      <CoupleLogo />
    </>
  );
}
