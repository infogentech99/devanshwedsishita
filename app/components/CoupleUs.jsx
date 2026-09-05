"use client";


export default function CoupleUs() {

    return (

            <div className="bg-[url('/assets/res_bg_twon33.webp')] md:bg-[url('/assets/bg_two_n3.webp')] bg-cover bg-no-repeat">
                <div className="flex flex-col items-center h-165 md:h-220 lg:h-430 3xl:h-500">
                  <h2 className="font-playfair-display font-medium italic text-2xl md:text-4xl lg:text-7xl text-center pt-10 md:pt-6 lg:pt-14 3xl:pt-24 text-[#B35800]">
                    With <br /> Best Compliments From
                  </h2>
                  <div className="flex gap-2"> 
                    <hr className="w-10 lg:w-20 md:border my-3 lg:my-6 border-[#B35800]" />
                    <img src="/assets/icon.webp" alt="icon" className="w-6 h-6 lg:w-6 lg:h-6 lg:mt-3" />
                    <hr className="w-10 lg:w-20 md:border my-3 lg:my-6 border-[#B35800]" />
                   </div>
                  <h2 className="font-eb-garamond font-medium text-[14px] md:text-2xl lg:text-3xl text-center leading-4.5 md:leading-5 lg:leading-9 pt-4 md:pt-2 lg:pt-2 text-[#B35800] md:px-0 px-20">
                   
                    Dr. TC Agarwal<br/>
                    Dr. Preeti Agarwal <br/>
                    Mr. Binod Agarwal<br/>
                    Mrs. Sangeeta Agarwal <br/>
                   & Entire Agarwal Family

                  </h2>
                </div>
            </div>

    );
}