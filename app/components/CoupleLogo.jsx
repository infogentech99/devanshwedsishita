"use client";


export default function CoupleLogo() {

    return (
        <> 
            <div className="hidden md:block md:bg-[url('/assets/bg_four.webp')] bg-cover bg-no-repeat">
                <div className="flex flex-col items-center md:h-178 lg:h-327 3xl:h-413">
                    <img src="/assets/couple_logo.png" alt="logo" className="md:w-27 md:h-23 md:mt-38 lg:w-53 lg:h-45 lg:mt-66 3xl:mt-92" />
                </div>
            </div>

            
            <div className="md:hidden bg-[url('/assets/respo_four.webp')] bg-cover bg-no-repeat">
                <div className="flex flex-col items-center h-220">
                    <img src="/assets/couple_logo.png" alt="logo" width={250} height={300} className="w-30 h-28 mt-37" />
                </div>
            </div>   
        </>
    );
}