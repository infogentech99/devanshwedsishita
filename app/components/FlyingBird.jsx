// "use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const frames = [
//   "/assets/bird/bird-1.png",
//   "/assets/bird/bird-2.png",
//   "/assets/bird/bird-3.png",
//   "/assets/bird/bird-4.png",
// ];

// export default function FlyingBird({
//   delay = 0,
//   top = "20%",
//   size = 90,
//   duration = 18,
// }) {
//   const birdRef = useRef(null);
//   const [frame, setFrame] = useState(0);

//  useEffect(() => {
//   const bird = birdRef.current;

//   gsap.set(bird, {
//     x: "-150px",
//     y: 0,
//     rotation: 0,
//     autoAlpha: 0,
//   });

//   // =========================
//   // WING FLAPPING
//   // =========================

//   const flapInterval = setInterval(() => {
//     setFrame((prev) => (prev + 1) % frames.length);
//   }, 140);

//   // =========================
//   // FLYING
//   // =========================

//   const flight = gsap.timeline({
//     repeat: -1,
//     delay: delay,
//     repeatDelay: 0,
//   });

//   flight
//     // Start completely outside screen
//     .set(bird, {
//       x: "-150px",
//       y: 0,
//       rotation: 0,
//       autoAlpha: 1,
//     })

//     // Fly continuously across screen
//     // .to(bird, {
//     //   x: "115vw",
//     //   duration: duration,
//     //   ease: "none",
//     // })
//     .to(bird, {
//   x: () => window.innerWidth + size + 50,
//   duration: duration,
//   ease: "none",
// })

//     // Immediately hide after leaving screen
//     .set(bird, {
//       autoAlpha: 0,
//     });

//   // =========================
//   // UP / DOWN MOVEMENT
//   // =========================

//   const verticalMovement = gsap.to(bird, {
//     y: -60,
//     duration: duration / 2,
//     ease: "sine.inOut",
//     yoyo: true,
//     repeat: -1,
//   });

//   const rotationMovement = gsap.to(bird, {
//     rotation: -4,
//     duration: duration / 2,
//     ease: "sine.inOut",
//     yoyo: true,
//     repeat: -1,
//   });

//   return () => {
//     clearInterval(flapInterval);

//     flight.kill();
//     verticalMovement.kill();
//     rotationMovement.kill();
//   };
// }, [delay, duration]);

//   return (

// <div
//   ref={birdRef}
//   className="absolute left-0 z-50 pointer-events-none w-7 md:w-15"
//   style={{
//     top: top,
//     left: "-150px",
//   }}
// >
  
//       <img
//         src={frames[frame]}
//         alt="Flying bird"
//         className="w-full h-auto"
//         draggable="false"
//       />
//     </div>
//   );
// }



// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const frames = [
//   "/assets/bird/bird-1.png",
//   "/assets/bird/bird-2.png",
//   "/assets/bird/bird-3.png",
//   "/assets/bird/bird-4.png",
// ];

// export default function FlyingBird({
//   delay = 0,
//   top = "20%",
//   mobileTop = "15%",
//   size = 90,
//   duration = 18,
// }) {
//   const birdRef = useRef(null);
//   const [frame, setFrame] = useState(0);

//   useEffect(() => {
//     const bird = birdRef.current;

//     const isMobile = window.innerWidth < 768;

//     // Mobile aur desktop ke liye alag top
//     const currentTop = isMobile ? mobileTop : top;

//     // Mobile par movement kam
//     const verticalDistance = isMobile ? -25 : -60;

//     gsap.set(bird, {
//       x: "-150px",
//       y: 0,
//       rotation: 0,
//       autoAlpha: 0,
//       top: currentTop,
//     });

//     // =========================
//     // WING FLAPPING
//     // =========================

//     const flapInterval = setInterval(() => {
//       setFrame((prev) => (prev + 1) % frames.length);
//     }, 140);

//     // =========================
//     // FLYING
//     // =========================

//     const flight = gsap.timeline({
//       repeat: -1,
//       delay: delay,
//       repeatDelay: 0,
//     });

//     flight
//       .set(bird, {
//         x: "-150px",
//         y: 0,
//         rotation: 0,
//         autoAlpha: 1,
//       })
//       .to(bird, {
//         x: () => window.innerWidth + size + 50,
//         duration: duration,
//         ease: "none",
//       })
//       .set(bird, {
//         autoAlpha: 0,
//       });

//     // =========================
//     // UP / DOWN MOVEMENT
//     // =========================

//     const verticalMovement = gsap.to(bird, {
//       y: verticalDistance,
//       duration: duration / 2,
//       ease: "sine.inOut",
//       yoyo: true,
//       repeat: -1,
//     });

//     // =========================
//     // ROTATION
//     // =========================

//     const rotationMovement = gsap.to(bird, {
//       rotation: -4,
//       duration: duration / 2,
//       ease: "sine.inOut",
//       yoyo: true,
//       repeat: -1,
//     });

//     return () => {
//       clearInterval(flapInterval);

//       flight.kill();
//       verticalMovement.kill();
//       rotationMovement.kill();
//     };
//   }, [delay, duration, top, mobileTop, size]);

//   return (
//     <div
//       ref={birdRef}
//       className="absolute left-0 z-50 pointer-events-none w-7 md:w-15"
//       style={{
//         left: "-150px",
//       }}
//     >
//       <img
//         src={frames[frame]}
//         alt="Flying bird"
//         className="w-full h-auto"
//         draggable="false"
//       />
//     </div>
//   );
// }


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
  mobileTop = "15%",
  size = 90,
  duration = 18,
}) {
  const birdRef = useRef(null);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const bird = birdRef.current;

    if (!bird) return;

    // =========================
    // DEVICE CHECK
    // =========================

    const isMobile = window.innerWidth < 768;

    // Desktop / Mobile top position
    const currentTop = isMobile ? mobileTop : top;

    // Mobile par up/down movement kam
    const verticalDistance = isMobile ? -25 : -60;

    // Mobile par flight thodi slow
    const flightDuration = isMobile ? duration * 1.5 : duration;

    // =========================
    // INITIAL POSITION
    // =========================

    gsap.set(bird, {
      x: "-150px",
      y: 0,
      rotation: 0,
      autoAlpha: 0,
      top: currentTop,
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
      // Start outside screen
      .set(bird, {
        x: "-150px",
        y: 0,
        rotation: 0,
        autoAlpha: 1,
      })

      // Fly across the complete screen
      .to(bird, {
        x: () => window.innerWidth + size + 100,
        duration: flightDuration,
        ease: "none",
      })

      // Hide after leaving screen
      .set(bird, {
        autoAlpha: 0,
      });

    // =========================
    // UP / DOWN MOVEMENT
    // =========================

    const verticalMovement = gsap.to(bird, {
      y: verticalDistance,
      duration: flightDuration / 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // =========================
    // ROTATION
    // =========================

    const rotationMovement = gsap.to(bird, {
      rotation: -4,
      duration: flightDuration / 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // =========================
    // CLEANUP
    // =========================

    return () => {
      clearInterval(flapInterval);

      flight.kill();
      verticalMovement.kill();
      rotationMovement.kill();
    };
  }, [delay, duration, top, mobileTop, size]);

  return (
    <div
      ref={birdRef}
      className="absolute left-0 z-50 pointer-events-none w-7 md:w-15"
      style={{
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