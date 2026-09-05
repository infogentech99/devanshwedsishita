import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CoupleMessage() {
  const TARGET_DATE = new Date("2026-11-26").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 12,
    minutes: 28,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = [
    {
      img: "/assets/devansh_couple.webp",
    },
  ];

  return (
    <div className="bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center h-290 md:h-550 lg:h-800 3xl:h-580">
       

        <div className="relative w-full flex justify-center items-center mt-6 md:mt-8">
         
        </div>

        
        <div className="relative bg-[url('/assets/rsvp.webp')] bg-cover bg-center bg-no-repeat overflow-hidden w-66 h-96 md:w-94 md:h-135 lg:w-187 lg:h-269 md:mt:40 mt-20">
          <div className="absolute inset-0 flex flex-col items-center justify-center top-26 md:top-33 lg:top-45">
            <h2 className="font-playfair-display font-medium italic text-center text-2xl md:text-3xl lg:text-[46px] leading-5 md:leading-8 lg:leading-11 text-[#B35800]">
              Awaiting the <br /> Pleasure of <br /> Your Company
            </h2>
            <p className="font-eb-garamond font-semibold text-center text-xs md:text-sm lg:text-xl mt-2 lg:mt-4 text-[#B35800]">
              Click the link to RSVP
            </p>
            <a
              href="https://wa.me/919412386468"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center md:gap-4 gap-2"
            >
              <img
                src="/assets/whatsapp.webp"
                alt="WhatsApp"
                className="w-7.5 h-7.5 md:w-11.25 md:h-11.25 lg:w-15 lg:h-15 mt-2 lg:mt-3"
              />{" "}
              <span className="font-eb-garamond font-semibold text-center text-xs md:text-sm lg:text-2xl mt-2 lg:mt-4 text-[#B35800]">
                Dr. TC Agarwal
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center h-80 md:h-100 lg:h-110 md:gap-2">
          <img
            src="/assets/couple_logo.png"
            alt="logo"
            className="w-32 h-32 md:w-27 md:h-23 lg:w-53 lg:h-45 mt-14"
          />
          <h2 className="font-playfair-display font-medium italic text-2xl md:text-2xl lg:text-[40px] text-center pt-8 lg:pt-14 mt-4 text-[#B35800]">
            #DevgothisIshq
          </h2>
          <h2 className="font-playfair-display font-medium italic text-4xl md:text-6xl lg:text-[100px] text-center mt-4 text-[#B35800]">
            The Countdown <br /> Begins
          </h2>
          <div className="flex gap-2 mt-4">
            <hr className="w-10 lg:w-20 md:border my-3 md:my-6 border-[#B35800]" />
            <img
              src="/assets/icon.webp"
              alt="icon"
              className="w-6 h-6 lg:w-6 lg:h-6 md:mt-3"
            />
            <hr className="w-10 lg:w-20 md:border my-3 md:my-6 border-[#B35800]" />
          </div>
          <div className="flex gap-10 mt-8 md:mt-0">
            <h2 className="font-playfair-display font-medium text-4xl md:text-3xl lg:text-[52px] text-center text-[#B35800]">
              {timeLeft.days}
              <p className="font-eb-garamond font-medium text-xs md:text-sm lg:text-base mb-8">
                DAYS
              </p>
            </h2>

            <h2 className="font-playfair-display font-medium text-4xl md:text-3xl lg:text-[52px] text-center text-[#B35800]">
              {timeLeft.hours}
              <p className="font-eb-garamond font-medium text-xs md:text-sm lg:text-base">
                HOURS
              </p>
            </h2>

            <h2 className="font-playfair-display font-medium text-4xl md:text-3xl lg:text-[52px] text-center text-[#B35800]">
              {timeLeft.minutes}
              <p className="font-eb-garamond font-medium text-xs md:text-sm lg:text-base">
                MINUTES
              </p>
            </h2>

            <h2 className="font-playfair-display font-medium text-4xl md:text-3xl lg:text-[52px] text-center text-[#B35800]">
              {timeLeft.seconds}
              <p className="font-eb-garamond font-medium text-xs md:text-sm lg:text-base">
                SECONDS
              </p>
            </h2>
          </div>
          <img
            src="/assets/heart.webp"
            alt="heart"
            className="w-7 h-7 lg:w-7 lg:h-7 mt-3"
          />
          <p className="font-eb-garamond font-medium text-base md:text-xl lg:text-[28px] text-center mt-4 px-6 md:px-0 text-[#B35800]">
            We are excited to celebrate <br className="hidden md:block" />
            the happiest day of our life with you.
          </p>
          {/* <div className="flex gap-3 justify-center items-center mt-4">
            <a href="https://www.instagram.com/theinvitearc/" target="_blank">
              <img
                src="/assets/instagram.webp"
                alt="instagram"
                className="w-7 h-7 md:w-10 md:h-10 lg:w-5.5 lg:h-5.5 mt-4"
              />
            </a>
            <p className="font-eb-garamond font-medium text-sm md:text-base lg:text-lg text-center mt-4 text-[#B35800]">
              <a href="https://invitearc.com/" target="_blank">
                Follow InviteArc on Instagram
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
