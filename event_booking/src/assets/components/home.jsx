import myImg from '../image/bg1.png'
import wedding from '../image/wed_day.png'
import music  from '../image/concert.png'
import corporate from '../image/cor.png'
import dinning from '../image/din_day.png'
import trend1 from '../image/trend1.png'
import trend2 from '../image/trend2.png'
import trend3 from '../image/trend3.png'
import up1 from '../image/up1.png'
import up2 from '../image/up2.png'
import up3 from '../image/up3.png'
import g1 from '../image/girl1.jpg'
import g2 from '../image/girl2.jpg'
import b1 from '../image/boy1.jpg'
import sports1 from '../image/sports1.png'



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
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { GiDrumKit } from "react-icons/gi";
import { HiOutlineTicket } from "react-icons/hi2";
import { RiSearchAi3Line } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { TbHandClick } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";
import { TbUserHeart } from "react-icons/tb";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GiRunningShoe } from "react-icons/gi";


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
     icon:<GiRunningShoe/>,
     category:"Sports",
     title:"Marathon with your city people.",
     image:sports1,
     
    },

    {
      number:'02',
      icon:<FaMusic/>,
      category:"Music",
      title:"Live the rhythm. Feel the moment.",
      image:music
    },

    {
      number:'03',
      icon:<MdBusinessCenter/>,
      category:"Workshop",
      title:"Inspire ideas. Drive the future.",
      image:corporate
    },

    {
      number:'04',
      icon:< GiHotMeal/>,
      category:"Food & Drinks",
      title:"The Culinary Experience.",
      image:dinning
    }
  ]

  let trending=[
    {
      title:"Midnight Glow",
      category:"Music",
      date:"Sat, 12 SEP",
      time:"7:00 PM Onwards",
      venue:"Bhopal",
      image:trend1
    },
    {
      title:"After Dark Sessions",
      category:"Nightlife",
      date:"Fri, 18 SEP",
      time:"9:00 PM Onwards",
      venue:"Indore",
      icon:<FaGlassMartiniAlt/>,
      image:trend2
    },
    {
              
              title:"Indie Rock Nights",
              category:"Music",
              date:"TUE, 20 Oct",
              time:"7:30 PM Onwards",
              venue:"Bhopal",
              icon:<GiDrumKit/>,
              image:trend3
            }
  ]
 
  let steps=[
    {
      number: '01',
      icon:<RiSearchAi3Line/>,
      title:"Discover",
      description:"Explore curated events that match your interests and mood."

    },
    {
      number: '02',
      icon:<HiOutlineTicket/>,
      title:"Book",
      description:"Choose your perfect event and reserve your spot effortlessly."

    },
    {
      number: '03',
      icon:<BsStars/>,
      title:"Experience",
      description:"Sow up, enjoy the moment, and create unforgettable memories."

    }
  ]

  let choose=[
    {
      title:"Curated Experiences",
      description:"Handpicked events designed around quality, atmosphere and memorable moments.",
      icon:<LiaUserFriendsSolid/>
    },
    {
      title:"Effortless Booking",
      description:"A seamless experience from descovering an event to securing your place.",
      icon:<TbHandClick/>
    },
    {
      title:"Trusted & Transparent",
      description:"Clear event information, reliable details and a booking experience you can trust.",
      icon:<GoShieldCheck/>
    },
    {
      title:"Moments That Matter",
      description:"Find experiences that become stories worth remembering.",
      icon:<TbUserHeart/>
    }
  ]

  let upcoming=[
    {
      image:up1,
      category:"Music",
      title:"Midnight Music Festival",
      description:"Experience an unforgettable night of live music, art installations, and premium hospitality under the stars.",
      location:'Bhopal',
      date:"12",
      month:"SEP"
    },
    {
      image:up2,
      category:"Workshop",
      title:"Creative Art Workshop",
      description:"Ignite your creativity with hands-on sessions led by renowned contemporary artists in an inspiring setting.",
      location:'Indore',
      date:"02",
      month:"SEP"   
    },
    {
      image:up3,
      category:"Adventure",
      title:" Weekend Escape",
      description:"Embark on curated outdoor experiences, including guided treks, exclusive camping, and wellness activities.",
      location:'Pachmarhi',
      date:"15",
      month:"SEP"
    }
 ]

 let test=[
  {
    id:'2',
    name:'Arav Sharma',
    role:'Adventure Seeker',
    image:b1,
    review:"From start to finish, everything was smooth and professional. I'll definitely be using Evora for all my future plqns. "

  },
  {
    id:'1',
    name:'Ananya Mishra',
    role:'Music Enthusiast',
    image:g1,
    review:"Evora made finding and booking events so seamless. The experience was absolutely incredible!"

  },
  {
    id:'3',
    name:'Meera Iyer',
    role:'Art & Culture Lover',
    image:g2,
    review:"I discovered amazing events I never knew about. Evora truly brings people closer to experiences."

  }
 ]

  return (
    <>
      {/* Hero Section */}
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

      {/* Browse By Category */}
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

      {/* Featured Experiences */}
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
        
        {/* Trending */}
        <div className='bg-zinc-950 pb-20 w-full'>

          <h1 className='text-center text-pink-400  text-2xl'>What's Hot Right Now</h1>
          <div class="flex items-center justify-center gap-3 my-2 ml-157 w-3xs">
              <div class=" h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#db2777]"></div>
              
              <span class="text-[#db2777] text-xs">✦</span>
              
              <div class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#db2777]"></div>
            </div>

          <h1 className='text-center  text-4xl  text-pink-400'> <span className='text-white mb-3'>Trending Events</span>  Near You</h1>


          <div className="pl-20 pr-15 pt-15 grid grid-cols-2 gap-6">

  
      {trending.slice(0, 1).map((e) => (
        <div className="relative h-[620px] rounded-3xl overflow-hidden group" >
          <img src={e.image} alt={e.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />


          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>

          
          <div className="absolute inset-0 flex flex-col justify-end p-8">

            <p className="text-[#E07BA8] items-center gap-2 flex text-lg  mb-2">
              <FaMusic/>{e.category}
            </p>

            <h2 className="text-white text-5xl flex  mb-4">
              {e.title}
            </h2>

            <p className="text-white/70 flex  items-center gap-2 text-sm">
              <IoCalendarOutline/> {e.date}  | <IoMdTime />{e.time}
            </p>

            <p className="text-white/60 flex gap-2 pt-2 text-sm mt-1">
            <IoLocationOutline/>  {e.venue}
            </p>

            <button className="text-[#E07BA8] flex items-center gap-2 mt-5 w-fit">
              View Experience
              <FaArrowRight />
            </button>

          </div>
        </div>
      ))}

      <div className="grid grid-rows-2 gap-6">

        {trending.slice(1).map((e) => (
          <div className="grid grid-cols-2 h-[297px] rounded-3xl overflow-hidden bg-[#111114] group">

          
            <div className="relative overflow-hidden">
              <img  src={e.image}  alt={e.title}  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"  />
            </div>


            <div className="relative flex flex-col justify-center p-7">

              <p className="text-[#E07BA8] items-center flex gap-2 text-lg mb-3">
              {e.icon} {e.category}
              </p>

              <h2 className="text-white text-3xl font-serif leading-tight mb-4">
                {e.title}
              </h2>

              <p className="text-white/70 flex gap-2 items-center text-xs mb-1">
              <IoCalendarOutline/>  {e.date} | <IoMdTime /> {e.time}
              </p>

              <p className="text-white/50 flex gap-2 items-center text-xs mb-5">
              <IoLocationOutline/>   {e.venue}
              </p>

              <button className="text-[#E07BA8] flex items-center gap-2 text-sm w-fit">
                View Experience  <FaArrowRight />
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>


        </div>

        {/* Work Flow */}
        <div className='bg-zinc-950 pb-20 w-full'>

          <h1 className='text-center text-pink-400  text-2xl'>How IT Works</h1>
          <div class="flex items-center justify-center gap-3 my-2 ml-157 w-3xs">
              <div class=" h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#db2777]"></div>
              
              <span class="text-[#db2777] text-xs">✦</span>
              
              <div class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#db2777]"></div>
            </div>

          <h1 className='text-center  text-4xl  text-pink-400'> <span className='text-white mb-3'>Your Event Experience,</span>  Simplified</h1>

          <div className=' relative pt-10'>
            <div className='absolute  top-32 left-[20%] h-px right-[21%] bg-white/10'></div>

            <div className='relative z-10 flex justify-between'>
              {
                steps.map((e)=>(
                  <div className='flex-1 text-center '>

                    <p className=' text-9xl font-semibold mb-[-75px] text-[#E07BA8]/60
             [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]
             [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]'>{e.number}</p>

                    <div className='relative mx-auto w-16 h-16    flex items-center justify-center mb-7' > <span className='text-[#E07BA8] text-4xl'> {e.icon}</span>
                    </div>

                    <h3 className='text-white text-2xl font-semibold mb-3'>{e.title}</h3>

                    <p className='text-zinc-400 texr-sm leading-6 max-w-[250px] mx-auto'> {e.description}</p>

                  </div>
                ))
              }
            </div>
            
          </div>


        </div>

        {/* Choose */}
        <div className='bg-zinc-950 pb-20 w-full'>

          <h1 className='text-center text-pink-400  text-2xl'>Why Evora</h1>
          <div class="flex items-center justify-center gap-3 my-2 ml-157 w-3xs">
              <div class=" h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#db2777]"></div>
              
              <span class="text-[#db2777] text-xs">✦</span>
              
              <div class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#db2777]"></div>
            </div>

          <h1 className='text-center  text-4xl  text-pink-400'> <span className='text-white mb-3'>More Than Just a </span>  Booking</h1>
          <div className='grid pt-15 pl-20 grid-cols-2 gap-20'>

            <div className='flex flex-col justify-center'>

              <p className='text-zinc-400 leading-7 text-lg leading-5 max-w-md'>
                Thoughtfully curated experiences, <br /> effortless booking, and <br /> moments worth remembering.
              </p>

              <h3 className='text-white text-6xl font-serif leading-tight mt-16'>
                DISCOVER <br /> THE <br />
                <span className='text-[#E07BA8]'>
                  EXTRAORDINARY
                
                </span> 

              </h3>

            </div>

            <div className='pr-15 pt-5'>
              {
              choose.map((e,index)=>(
                <div className='group border-b  border-white/10 py-5 first:border-t'>
                  <div className='flex items-start gap-6'>

                    <span className='text-[#E07BA8]/40 text-lg font-medium pt-1'>
                      0{index+1}
                    </span>

                    <div className='w-px h-10 bg-white/10 mt-0.5'></div>

                    <div className='text-[#E07BA8] text-4xl pt-1 transition-transform duration-300 group-hover:scale-110'>
                      {e.icon}
                    </div>

                    <div>
                      <h4 className='text-white text-xl font-medium mb-2'>
                        {e.title}
                      </h4>

                      <p className='text-zinc-500 text-sm leading-6 max-w-md'>
                        {e.description}
                      </p>
                    </div>

                  </div>
                  

                </div>
              ))
            }
            </div>
          </div>


        </div>

        {/* Upcoming */}
        <div className='bg-zinc-950 pb-20 w-full '>
          <h1 className='text-center text-pink-400  text-2xl'>Upcoming Events</h1>
          <div class="flex items-center justify-center gap-3 my-2 ml-157 w-3xs">
              <div class=" h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#db2777]"></div>
              
              <span class="text-[#db2777] text-xs">✦</span>
              
              <div class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#db2777]"></div>
            </div>

          <h1 className='text-center  text-4xl  text-pink-400'> <span className='text-white mb-3'>Events Worth Waiting For </span>  </h1>

          <div className=' pl-20 pr-15 pt-10 border-white/10'>
            {
              upcoming.map((e)=>(
                <div className='group flex gap-10   py-3 border-b last:border-b-0 border-white/10'>

                  <div className='w-110 h-40 overflow-hidden rounded-xl'>
                    <img src={e.image} alt={e.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
                  </div>

                  <div className='flex flex-col justify-center pl-8'>
                    <p className='text-lg text-[#B65C75] mb-2'>
                      {e.category}
                    </p>

                    <h3 className='text-3xl font-serif text-white mb-3'>
                      {e.title}
                    </h3>

                    <p className='text-sm text-white/50 mb-2 max-w-lg'> 
                      {e.description}
                    </p>

                    <p className='text-sm flex justify-between items-center text-white/90 mb-2'>
                      <span className='flex gap-1 items-center'>
                        <IoLocationOutline className='text-[#B65C75]'/> {e.location}
                      </span>
                      <span className='text-[#B65C75] border-b  flex gap-2 items-center '>View Details <FaArrowRight/></span>
                    </p>
                  </div>

                  <div className='pl-20 flex flex-col items-center justify-center border-l border-white/10'>
                    <span className='text-6xl  text-[#B65C75]'>
                      {e.date}
                    </span>

                    <span className='text-lg text-white'>
                      {e.month}
                    </span>

                  </div>
                  
                </div>
              ))
            }

          </div>

          <div className='flex justify-center mt-10'>
            <button className='border border-[#B65C75] text-[#B65C75] px-8 py-3 rounded-2xl hover:bg-[#B65C75] hover:text-black transition duration-300'>View All Events</button>
          </div>
        </div>

        {/* Testimonial */}
        <div className='bg-zinc-950 pb-20 w-full'>
          <h1 className='text-center text-pink-400  text-2xl'>Testimonials</h1>
          <div class="flex items-center justify-center gap-3 my-2 ml-157 w-3xs">
              <div class=" h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#db2777]"></div>
              
              <span class="text-[#db2777] text-xs">✦</span>
              
              <div class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#db2777]"></div>
            </div>

          <h1 className='text-center  text-4xl  text-pink-400'> <span className='text-white mb-3'>Loved by </span> Thousands,<span className='text-white mb-3'> Trusted for </span> Moments.  </h1>

          <p className='text-sm text-white/50 text-center pt-5 tracking-wider'>Real stories from real people who've discovered unforgettable <br />experiences with Evora.</p>

          <div className='grid grid-cols-3 gap-8 pt-10 pl-20 pr-15'>
            {
              test.map((e)=>(
                <div className='bg-[#21191D]  border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#E07BA8] hover:shadow-[0_8px_25px_rgba(224,123,168,0.25)]'>

                  <div className='text-[#E07BA8] text-6xl  mb-6'><RiDoubleQuotesL/></div>

                  <p className='h-18 text-white/80 max-w-sm text-base leading-7 mb-8'>{e.review}</p>

                  <div className='border-b border-white/10'></div>

                  <div className='flex items-center pt-6 gap-4'>
                    <img src={e.image} alt={e.name} className='w-12 h-12 rounded-full object cover' />

                    <div className=''>
                      <h4 className='text-white font-medium'>{e.name}</h4>
                      <p className='text-[#E07BA8] text-sm'>{e.role}</p>
                    </div>
                    
                  </div>
                  <div className='flex pl-16 text-2xl gap-1 '>
                      <span className="text-[#E07BA8]">★</span>
                      <span className="text-[#E07BA8]">★</span>
                      <span className="text-[#E07BA8]">★</span>
                      <span className="text-[#E07BA8]">★</span>
                      <span className="text-[#E07BA8]">★</span>
                    </div>



                </div>
              ))
            }
          </div>

        </div>

        {/* cta */}
        <div className='bg-zinc-950 pb-20 w-full'>

          <div className='relative p-5 max-w-5xl pb-13 mx-auto overflow-hidden rounded-3xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#E07BA8]/70 hover:shadow-[0_12px_35px_rgba(224,123,168,0.15)] border-white/10 bg-[#111114]'>
            <h1 className='text-6xl text-white text-center leading-tight'> Ready to Create <br /> <span className='text-[#E07BA8]'>Unforgettable</span>Moments?</h1>
             <div class="flex items-center justify-center gap-3 my-2 ml-90 w-3xs">
              <div class=" h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#db2777]"></div>
              
              <span class="text-[#db2777] text-xs">✦</span>
              
              <div class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#db2777]"></div>
            </div>

            <p className='text-white/60  text-center text-lg leading-7 tracking-wider pt-2'> Explore handpicked events and unique experiences <br /> crafted to make every moments extraordinary.</p>

            <button className='bg-[#c43475] mt-9 rounded-2xl border border-white/20 mx-auto pl-8 pr-8 pt-3 pb-3 gap-2 justify-center text-white text-2xl  flex items-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E07BA8]/50 hover:shadow-[0_8px_25px_rgba(224,123,168,0.1)]'>Explore Events <FaArrowRight/></button>
            
          </div>
        </div>


      

    </>
  )
}
 