"use client";


export default function CoupleUs() {

    return (

            <div className="bg-[url('/assets/res_bg_two.webp')] md:bg-[url('/assets/bg_two.webp')] bg-cover bg-no-repeat">
                <div className="flex flex-col items-center h-118 md:h-176 lg:h-318 3xl:h-403">
                  <h2 className="font-playfair-display font-medium italic text-2xl md:text-4xl lg:text-7xl text-center pt-10 md:pt-6 lg:pt-14 3xl:pt-24 text-[#B35800]">
                    With <br /> Love From Us
                  </h2>
                  <div className="flex gap-2"> 
                    <hr className="w-10 lg:w-20 md:border my-3 lg:my-6 border-[#B35800]" />
                    <img src="/assets/icon.webp" alt="icon" className="w-6 h-6 lg:w-6 lg:h-6 lg:mt-3" />
                    <hr className="w-10 lg:w-20 md:border my-3 lg:my-6 border-[#B35800]" />
                   </div>
                  <h2 className="font-eb-garamond font-medium text-xs md:text-2xl lg:text-3xl text-center leading-3 md:leading-5 lg:leading-9 pt-0 md:pt-2 lg:pt-2 text-[#B35800] md:px-0 px-20">
                   {/* Thank you for being part of our journey. <br /> Your presence makes this celebration truly <br /> 
                   meaningful, and we look forward to sharing <br /> these cherished moments with you. */}
                   All our favourite people are going to be in one place for one <br className="hidden md:block" /> very special weekend, and we couldn’t ask for more! <br /><br />
                   Come ready for lots of love, and memories we’ll be talking about for years❤️
                  </h2>
                </div>
            </div>

    );
}