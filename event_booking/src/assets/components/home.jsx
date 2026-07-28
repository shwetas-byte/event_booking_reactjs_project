import myImg from '../image/bg1.png'

export function Home() {
  return (
    <>
      <section className='relative min-h-screen w-full overflow-hidden bg-[#0B030A]'>
        <img 
          src={myImg} 
          alt="Évora Luxury Event" 
          className='absolute inset-0 w-full h-full object-cover ' 
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent backdrop-brightness-90'>


        </div>
        <div className='relative z-10  flex-col justify-start pt-50 pl-20 min-h-screen'>
          <h1 className='flex items-center gap-2 text-pink-500 font-medium  '>
            <span 
              className="inline-block filter hue-rotate-[290deg] saturate-[250%] contrast-[110%]"
            >
              ✨
            </span>
            <span>Discover. Book. Celebrate</span>
          </h1>

          <div className='text-white font-semibold text-6xl pt-6 leading-tight'>
            <h1>
              Where Extraordinary 
            </h1>
            <h1 className='pb-4 bg-linear-to-r from-pink-700 via-pink-500 to-pink-400 bg-clip-text text-transparent text-8xl'>
              Moments Begin
            </h1>
            <div class="flex items-center gap-3 my-4 max-w-xs">
              <div class="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#db2777]"></div>
              
              <span class="text-[#db2777] text-xs">✦</span>
              
              <div class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#db2777]"></div>
            </div>

            <h1 className='text-[24px] text-gray-300 font-light leading-relaxed'>
              Crafting unforgettable experiences through <br /> handpicked weddings, concerts, corporate events, and <br /> celebrations designed to create memories that last a lifetime.
            </h1>
          </div>
        </div>

        
        
        
      </section>
    </>
  )
}