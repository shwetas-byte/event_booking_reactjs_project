import myImg from '../image/bg1.png'
import wedding from '../image/wed_day.png'
import music  from '../image/concert.png'
import corporate from '../image/cor.png'
import dinning from '../image/din_day.png'
import { NavLink } from 'react-router-dom'
import { GiDiamondRing } from "react-icons/gi";
import { PiCheersBold } from "react-icons/pi";
import { GiMicrophone } from "react-icons/gi";
import { GiHotMeal } from "react-icons/gi";
import { PiMaskHappyBold } from "react-icons/pi";
import { MdBusinessCenter } from "react-icons/md";
import { MdSportsSoccer } from "react-icons/md";
import { MdOutlineHiking } from "react-icons/md";
import { MdOutlineColorLens } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
export function Home() {
  let category=[
    {icons:<GiDiamondRing/>,value:'Weddings'},
    {icons:<PiCheersBold/>,value:'Parties'},
    {icons:<GiMicrophone/>,value:'Shows'},
    {icons:<GiHotMeal/>,value:'Dining'},
    {icons:<PiMaskHappyBold/>,value:'Comedy'},
    {icons:<MdBusinessCenter/>,value:'Corporate'}
    // {icons:<MdSportsSoccer/>,value:'Sports'},
    // {icons:<MdOutlineHiking/>,value:'Adventure'},
    // {icons:<MdOutlineColorLens/>,value:'Workshops'},
    // {icons:<FaPeopleGroup/>,value:'Family'},
  ]

  let experience=[
    {
      number:'01',
     icon:<GiDiamondRing/>,
     category:"Wedding Experience",
     title:"Make your dream wedding a timeless reality.",
     image:wedding
    },

    {
      number:'02',
      icon:<FaMusic/>,
      category:"Luxury Concert",
      title:"Live the rhythm. Feel the moment.",
      image:music
    },

    {
      number:'03',
      icon:<MdBusinessCenter/>,
      category:"Corporate Summit",
      title:"Inspire ideas. Drive the future.",
      image:corporate
    },

    {
      number:'04',
      icon:< GiHotMeal/>,
      category:"Fine Dining Experience",
      title:"Savor unforgettable gourmet evenings.",
      image:dinning
    }
  ]
 
  return (
    <>
      <section className='relative min-h-screen w-full  bg-[#0B030A]'>
        <img 
          src={myImg} 
          alt="Évora Luxury Event" 
          className='absolute inset-0 w-full h-full object-cover ' 
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent backdrop-brightness-90'>


        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#121219]"></div>
        <div className='relative z-10   flex-col justify-start pt-40 pl-20 min-h-screen'>
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

            <h1 className='mb-14 text-[24px] text-gray-300 font-light leading-relaxed'>
              Crafting unforgettable experiences through <br /> handpicked weddings, concerts, corporate events, and <br /> celebrations designed to create memories that last a lifetime.
            </h1>
          </div>
           <div>
            <NavLink className={'z-10 text-xl px-10 py-3.5  rounded-2xl bg-gradient-to-r from-[#450c50] via-[#831a54] to-[#d51e40] text-white text-sm font-medium transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_20px_rgba(247,82,112,0.4)] active:scale-95 cursor-pointer'} to={'/explore'}>Explore Events</NavLink>

            <NavLink to={'/'} className={'px-10 py-4 font-medium ml-7 text-white transition-all border rounded-2xl border-pink-500/40 bg-white/ hover:bg-white/10 hover:border-pink-700/80 backdrop-blur-sm'}>
              Book Experience
            </NavLink>
           </div>
        </div>

        {/* <div className='absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-20'>
          <div className='bg-[#fffdfa] rounded-2xl p-4 md:p-6 shadow-[0_15px_35px_rgba(0,0,0,0.6)] border border-[#e5e0d8]'>
            
            

          </div>
        </div> */}

       
        
      </section>
       <div className='bg-zinc-950 pb-10 w-full'>
          <h1 className='text-center text-pink-400 pt-10 text-2xl'>Browse By Category</h1>
          <div class="flex items-center justify-center gap-3 my-2 ml-157 w-3xs">
              <div class=" h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#db2777]"></div>
              
              <span class="text-[#db2777] text-xs">✦</span>
              
              <div class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#db2777]"></div>
            </div>

          <h1 className='text-center  text-4xl  text-pink-400'><span className='text-white mb-3'>Find The</span> Perfect Experience</h1>


          <div className='pl-20 flex gap-18'>{
            category.map((e)=> <div className="w-40  h-40 bg-[#111114] border border-white/10 rounded-3xl  mt-13  text-center gap-4 transition-all duration-300 hover:border-pink-300/50 hover:-translate-y-2 hover:bg-[#17171B] flex flex-col items-center justify-center ">
              <h1 className="text-[#E07BA8] text-5xl  transition-all duration-300 group-hover:scale-110">{e.icons}</h1>
              <h1 className='text-2xl text-[#E07BA8]'>{e.value}</h1>
              </div>)
              }
            

          </div>
          
        </div>


        <div className='bg-zinc-950 pb-20 w-full'>

          <h1 className='text-center text-pink-400 pt-10 text-2xl'>Featured Experiences</h1>
          <div class="flex items-center justify-center gap-3 my-2 ml-157 w-3xs">
              <div class=" h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#db2777]"></div>
              
              <span class="text-[#db2777] text-xs">✦</span>
              
              <div class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#db2777]"></div>
            </div>

          <h1 className='text-center  text-4xl  text-pink-400'> <span className='text-white mb-3'>Experience Life's</span>  Finest Ocassions</h1>

          <div className='pl-20 pt-15 pr-10 space-y-8'>
            {
              experience.map((e,index)=>(
                <div key={e.number}>
                  <div className={`grid grid-cols-2 gap-10 items-center ${index%2!==0?"[&>*:first-child]:order-2":""}`}>

                    <div className='h-[250px] group relative overflow-hidden rounded-3xl'>

                      <img src={e.image} alt={e.category} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ' />

                      <div className='absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>

                    </div>

                    <div className='relative'>

                      <div className='flex items-center gap-2 text-[#E07BA8] mb-5'>
                        <span className='text-2xl'>{e.icon}</span>
                        <span className='text-lg'>{e.category}</span>
                      </div>

                      <h2 className='text-white text-4xl font-semibold leading-tight max-w-md'> {e.title}</h2>

                      <button className='group flex items-center gap-2 mt-8 text-[#E07BA8]'> View Details <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1 group:hover:-translate-y-1'/></button>

                      <span className='absolute right-0 -bottom-6 text-8xl font-bold text-pink-500/20'> {e.number}</span>

                    </div>

                  </div>
                </div>
              ))
            }

          </div>
          
        </div>
      
    </>
  )
}
 