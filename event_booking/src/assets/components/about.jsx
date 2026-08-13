export function About(){
    return(
        <>
           <section className="relative h-[490px] overflow-hidden pb-9 bg-zinc-950">

                <div className="relative z-10 justify-center items-center py-25 ">
                    <div className="w-full">
                        <h1 className=' text-center  text-lg md:text-2xl text-[#dc2276] leading-tight'>About Evora</h1>
                        <h1 className="tracking-wider font-serif text-center text-5xl leading-tight text-white pt-4 ">More than just an event. <br /> A way to <span className="text-[#dc2276]">experience</span> <br /> something <span className="text-[#dc2276]"> meaningful.</span> </h1>
                        <div className="border-b-2  mx-auto pt-3  border-[#dc2276] w-40 "></div>

                        <p className="text-center text-white/40 pt-3 text-base tracking-wide"> Discover experiences that bring people together <br /> and create moments worth remembering.</p>
                    </div>
                    
                </div>
            
           </section> 
        </>
    )
}