"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const frames = [
  "/assets/bird/bird-1.png",
  "/assets/bird/bird-2.png",
  "/assets/bird/bird-3.png",
  "/assets/bird/bird-4.png",
];

export default function FlyingBird({
  delay = 0,
  top = "20%",
  size = 90,
  duration = 18,
}) {
  const birdRef = useRef(null);
  const [frame, setFrame] = useState(0);

 useEffect(() => {
  const bird = birdRef.current;

  gsap.set(bird, {
    x: "-150px",
    y: 0,
    rotation: 0,
    autoAlpha: 0,
  });

  // =========================
  // WING FLAPPING
  // =========================

  const flapInterval = setInterval(() => {
    setFrame((prev) => (prev + 1) % frames.length);
  }, 140);

  // =========================
  // FLYING
  // =========================

  const flight = gsap.timeline({
    repeat: -1,
    delay: delay,
    repeatDelay: 0,
  });

  flight
    // Start completely outside screen
    .set(bird, {
      x: "-150px",
      y: 0,
      rotation: 0,
      autoAlpha: 1,
    })

    // Fly continuously across screen
    // .to(bird, {
    //   x: "115vw",
    //   duration: duration,
    //   ease: "none",
    // })
    .to(bird, {
  x: () => window.innerWidth + size + 50,
  duration: duration,
  ease: "none",
})

    // Immediately hide after leaving screen
    .set(bird, {
      autoAlpha: 0,
    });

  // =========================
  // UP / DOWN MOVEMENT
  // =========================

  const verticalMovement = gsap.to(bird, {
    y: -60,
    duration: duration / 2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });

  const rotationMovement = gsap.to(bird, {
    rotation: -4,
    duration: duration / 2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });

  return () => {
    clearInterval(flapInterval);

    flight.kill();
    verticalMovement.kill();
    rotationMovement.kill();
  };
}, [delay, duration]);

  return (

<div
  ref={birdRef}
  className="absolute left-0 z-50 pointer-events-none w-7.5 md:w-15"
  style={{
    top: top,
    left: "-150px",
  }}
>
      <img
        src={frames[frame]}
        alt="Flying bird"
        className="w-full h-auto"
        draggable="false"
      />
    </div>
  );
}