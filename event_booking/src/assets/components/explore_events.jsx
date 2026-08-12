import myimg from '../image/explore.png' 
export function Explore_events(){
    return(
        <>
              {/* Hero Section */}
              <section className='relative h-[450px] overflow-hidden w-full pb-9 bg-[#0B030A]'>
                <img 
                          src={myimg} 
                          alt="Explore Events" 
                          className='absolute inset-0 w-full h-full object-cover ' 
                        />
                
                <div className='relative z-10 py-30 px-20 '>
                    <div className='w-full  '>
                        <h1 className='font-serif text-8xl md:text-7xl text-[#FAF8F6] leading-tight'>
                            Explore
                            <span className='block text-[#dc2276] italic'>
                                Experiences
                            </span>
                        </h1>
                     <div class="flex items-center gap-3 my-2 max-w-xs">
                        <div class="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#db2777]"></div>
                        
                            <span class="text-[#db2777] text-xs">✦</span>
                        
                        <div class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#db2777]"></div>
                        </div>
                    </div>

                    <p className='text-white/60 pl-15 pt-1 tracking-wider scale-x-110 text-base '>Find something worth remembering.</p>

                    <div className="mt-7 mb-16 flex w-full max-w-lg border border-white/20 bg-black/30">

                         <input
                            type="text"
                            placeholder="Search events, artists, places..."
                            className="flex-1 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-zinc-500"
                            />

                            <button className="px-6 bg-[#E07BA8] text-4xl text-black">
                            →
                            </button>

                        </div>

                </div>

                

              </section>
        </>
    )
}