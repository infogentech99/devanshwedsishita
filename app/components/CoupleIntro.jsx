"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import RoseHeroTemp from "@/app/components/RoseHeroTemp";

export default function CoupleIntro() {
  const events = [
    {
      title_ceremony: "Mehendi",
      image: "/assets/mehendi.webp",
      date: "Friday, November 20th 2026",
      time: "Join Us at 12:30 PM",
      venue: "The Marriott, Jim Corbett",
      link: "https://maps.app.goo.gl/6wAY9hsmkpHv2gLd7",
    },

    {
      title_ceremony: "Sangeet",
      image: "/assets/sangeet.webp",
      date: "Friday, November 20th 2026",
      time: "Join Us at 8:00 PM",
      venue: "The Marriott, Jim Corbett",
      link: "https://maps.app.goo.gl/6wAY9hsmkpHv2gLd7",
    },

    {
      title_ceremony: "Haldi & Chooda",
      image: "/assets/haldi.webp",
      date: "Friday, November 21st 2026",
      time: "Join Us at 9:30 AM",
      venue: "The Marriott, Jim Corbett",
      link: "https://maps.app.goo.gl/6wAY9hsmkpHv2gLd7",
    },

    {
      title_ceremony: "Wedding",
      image: "/assets/wedding.webp",
      date: "Friday, November 21st 2026",
      time: "Join Us at 4:30 PM",
      venue: "The Marriott, Jim Corbett",
      link: "https://maps.app.goo.gl/6wAY9hsmkpHv2gLd7",
    },
  ];

  return (
    <>
      <div
        className="bg-[url('/assets/respo_bg.webp')] md:bg-[url('/assets/background.webp')] bg-cover
                            md:bg-cover bg-top bg-no-repeat w-full relative overflow-hidden md:min-h-screen"
      >
        <RoseHeroTemp />
        <div className="relative pt-5 md:pt-30 3xl:pt-34 pb-20 z-10">
          <h2
            className="flex flex-col items-center text-center leading-tight text-3xl md:text-5xl lg:text-7xl
                               pb-0 md:pb-260 lg:pb-200 3xl:pb-270 text-[#B35800]"
          >
            <span className="font-playfair-display font-medium italic">
              Shivangani
            </span>
            <span className="font-playfair-display font-medium italic text-xl md:text-3xl lg:text-[38px]">
              Weds
            </span>
            <span className="font-playfair-display font-medium italic">
              Ashanka
            </span>
          </h2>
          <div className="flex flex-col items-center text-center md:gap-6 mt-0 pt-80 lg:pt-150">
            <h2 className="font-eb-garamond font-bold text-base md:text-2xl lg:text-3xl text-center text-[#B35800]">
              ॐ श्री गणेशाय नम
            </h2>
            <img
              src="/assets/aum.webp"
              alt="ganesh"
              className="w-16 h-16 md:w-25 md:h-24 lg:w-49 lg:h-47 mt-2 lg:mt-4"
            />
            <h2 className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl mt-2 md:mt-0 text-[#B35800]">
              With the heavenly blessings of
            </h2>
            <hr className="w-20 lg:w-26 lg:border-2 my-3 lg:my-4 border-[#B35800]" />
            <h2 className="font-eb-garamond font-medium text-xl md:text-3xl lg:text-[42px] text-[#B35800]">
              The Anands and Sahas
            </h2>
          </div>
          <div className="text-center mt-8">
            <h2 className="font-playfair-display font-semibold text-3xl md:text-4xl lg:text-6xl leading-tight lg:tracking-wide tracking-wider text-[#B35800]">
              INVITE
            </h2>
            <p className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 text-[#B35800]">
              you to join us in the wedding celebrations of
            </p>
            <h2 className="font-eb-garamond font-medium text-center text-5xl md:text-6xl lg:text-[100px] mt-6 leading-8 md:leading-tight text-[#B35800]">
              Shivangani
            </h2>
            <h2 className="font-playfair-display font-medium text-5xl md:text-6xl lg:text-[100px] text-center mt-4 leading-tight text-[#B35800]">
              <span className="text-center mt-4 lg:mt-10 text-5xl md:text-6xl lg:text-[100px] leading-tight text-[#B35800] font-playfair-display">
                &
              </span>
              <br />
              Ashanka
            </h2>
            <p className="font-eb-garamond font-medium text-base md:text-xl lg:text-3xl mt-12 text-[#B35800]">
              On the following events
            </p>
            
          </div>

          <div className="flex justify-center mt-15 md:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 md:gap-x-26 lg:gap-x-60">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.venue}
                    className="w-95 h-auto md:w-76 lg:w-80"
                  />

                  <h2 className="font-playfair-display font-medium text-[36px] md:text-3xl lg:text-[42px] mt-2 md:mt-4 text-[#B35800]">
                    {event.title_ceremony}
                  </h2>
                  <p className="font-eb-garamond font-medium md:mt-2 text-[#B35800]">
                    <span className="text-base">{event.date}</span> <br />
                    <span className="text-base"> {event.time} </span> <br />
                    <span className="text-base uppercase"> {event.venue} </span>
                  </p>

                  <a
                    href={event.link}
                    className="font-eb-garamond font-medium underline text-sm md:mt-2 text-[#B35800]"
                    target="_blank"
                  >
                    View Directions
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
