import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CoupleMessage() {
  const TARGET_DATE = new Date("2026-11-21").getTime();

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
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
      (diff % (1000 * 60)) / 1000
    );

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
      img: "/assets/shiv_couple1.webp",
    },

    {
      img: "/assets/shiv_couple2.webp",
    },

    {
      img: "/assets/shiv_couple4.webp",
    },

    {
      img: "/assets/shiv_couple5.webp",
    },

    {
      img: "/assets/shiv_couple6.webp",
    },
    {
      img: "/assets/shiv_couple3.webp",
    },
  ];

  return (
    <div className="bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center h-670 md:h-770 lg:h-1230 3xl:h-1250">
        <h2 className="font-playfair-display font-semibold text-base md:text-xl lg:text-[38px] text-center pt-12 md:pt-18 lg:pt-32 text-[#B35800]">
          INTRODUCING
        </h2>
        <h2
          className="font-playfair-display font-medium italic text-5xl md:text-6xl lg:text-[100px] text-center 
                               mt-12 md:mt-16 lg:mt-28 leading-7 md:leading-8 lg:leading-8 text-[#B35800]"
        >
          The Couple
        </h2>
        <div className="flex gap-2 mt-6 md:mt-8 lg:mt-12">
          <hr className="w-10 lg:w-20 md:border my-3 md:my-6 border-[#B35800]" />
          <img
            src="/assets/icon.webp"
            alt="icon"
            className="w-6 h-6 lg:w-6 lg:h-6 md:mt-3"
          />
          <hr className="w-10 lg:w-20 md:border my-3 md:my-6 border-[#B35800]" />
        </div>

    <div className="relative w-full flex justify-center items-center mt-6 md:mt-8">

  {/* IMAGE WINDOW / CLIPPING AREA */}
  <div
    className="
      absolute
      z-0
      flex
      justify-center
      items-center
      overflow-hidden

      w-50
      h-65
      mt-[-2px]
      mr-15

      md:w-65
      md:h-95
      md:mt-[-5px]
      md:mr-25

      lg:w-150
      lg:h-180
      lg:mt-0
      lg:mr-40

      rounded-t-[50%]
      rounded-b-[18%]
    "
  >
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      centeredSlides={true}
      slidesPerView={1}
      spaceBetween={0}
      pagination={{ clickable: true }}

      className="w-full h-full"
    >
      {testimonial.map((item, index) => (
        <SwiperSlide
          key={index}
          className="!flex !items-center !justify-center"
        >
          <img
            src={item.img}
            alt=""
            className="
              w-full
              h-full
              object-cover
              select-none
              pointer-events-none
            "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* FRAME - ALWAYS ON TOP */}
  <img
    src="/assets/couple_img_n.webp"
    alt="couple_img"
    className="
      relative
      z-10
      pointer-events-none
      w-100
      h-97
      md:w-150
      md:h-145
      lg:w-300
      lg:h-290
      mt-2
      md:mt-4
      lg:mt-0
      object-contain
    "
  />

</div>



        <h2
          className="font-playfair-display font-medium italic text-3xl md:text-5xl lg:text-[100px] text-center pt-15 
                               md:pt-30 lg:pt-35 text-[#B35800]"
        >
          A Guide for Guests
        </h2>
        <div className="flex gap-2 mt-3 lg:mt-6">
          <hr className="w-10 lg:w-20 md:border my-3 md:my-6 border-[#B35800]" />
          <img
            src="/assets/icon.webp"
            alt="icon"
            className="w-6 h-6 lg:w-6 lg:h-6 md:mt-3"
          />
          <hr className="w-10 lg:w-20 md:border my-3 md:my-6 border-[#B35800]" />
        </div>

        <div className="flex justify-center mt-10 md:mt-20 pb-15 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-0">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/assets/weather.webp"
                alt="weather"
                className="h-26 w-32 md:w-25 md:h-20 lg:w-42 lg:h-42"
              />
              <h2 className="font-playfair-display font-semibold text-xl md:text-xl lg:text-2xl mt-2 text-[#B35800]">
                Weather
              </h2>
              <p className="font-eb-garamond font-medium text-sm md:text-base lg:text-xl mt-1 md:leading-6 text-[#B35800]">
                November in Jim Corbett is pleasantly <br /> cool, with slightly
                nippy mornings and <br />
                evenings. We recommend carrying a <br /> light jacket or shawl.
              </p>
            </div>
            <hr className="hidden lg:block lg:rotate-90 lg:w-93 lg:border lg:my-40 border-[#735C004D]" />
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/assets/parking.webp"
                alt="parking"
                className="w-32 h-26 md:w-25 md:h-20 lg:w-42 lg:h-42"
              />
              <h2 className="font-playfair-display font-semibold text-xl md:text-xl lg:text-2xl mt-2 text-[#B35800]">
                Parking
              </h2>
              <p className="font-eb-garamond font-medium text-sm md:text-base lg:text-xl mt-1 md:leading-6 text-[#B35800]">
                Valet parking for all our guests will be <br /> available at the
                venue, ensuring a <br />
                smooth and hassle-free arrival.
              </p>
            </div>
          </div>
        </div>
        <hr className="hidden lg:block lg:w-222 lg:border border-[#735C004D]" />

        <h2
          className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-3xl text-center md:pt-2 lg:pt-15 lg:mt-4 
                               lg:leading-tight px-3 md:px-0 text-[#B35800]"
        >
          Your presence means the world to us. To make your experience{" "}
          <br className="hidden md:block" />
          effortless and enjoyable, we've gathered a few useful details below.
        </h2>
        <div className="relative bg-[url('/assets/rsvp.webp')] bg-cover bg-center bg-no-repeat overflow-hidden w-66 h-96 md:w-94 md:h-135 lg:w-187 lg:h-269 mt-40">
          <div className="absolute inset-0 flex flex-col items-center justify-center top-26 md:top-33 lg:top-45">
            <h2 className="font-playfair-display font-medium italic text-center text-2xl md:text-3xl lg:text-[46px] leading-5 md:leading-8 lg:leading-11 text-[#B35800]">
              Awaiting the <br /> Pleasure of <br /> Your Company
            </h2>
            <p className="font-eb-garamond font-semibold text-center text-xs md:text-sm lg:text-xl mt-2 lg:mt-4 text-[#B35800]">
              Click the link to RSVP
            </p>
            <a
              href="https://wa.me/919818185550"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/whatsapp.webp"
                alt="WhatsApp"
                className="w-7.5 h-7.5 md:w-11.25 md:h-11.25 lg:w-15 lg:h-15 mt-2 lg:mt-3"
              />
            </a>
            
          </div>
        </div>
        <div className="flex flex-col items-center h-80 md:h-100 lg:h-110 md:gap-2">
          <h2 className="font-playfair-display font-medium italic text-4xl md:text-6xl lg:text-[100px] text-center pt-35 lg:pt-60 mt-4 text-[#B35800]">
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
            Our families are excited that you are able to join us in celebrating
            what we <br className="hidden md:block" />
            hope will be one of the happiest days of our lives.
          </p>
          <div className="flex gap-3 justify-center items-center mt-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
