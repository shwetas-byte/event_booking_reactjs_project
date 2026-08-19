import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import myImg from '../image/evora.png'
import { Link } from "react-router-dom";


export function Footer(){
    return(
        
    <footer className="bg-[#09090B] text-white pt-8 pl-15">

      <div className="max-w-7xl mx-auto">

        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          
          <div>
            <div className="flex items-center gap-2">

              <div className="text-[#E07BA8] text-3xl font-serif">
                 <img className='w-[150px]' src={myImg} alt="" />
                
              </div>
            </div>

            <p className="text-zinc-500 text-sm leading-6 mt-4 max-w-xs">
              Discover experiences worth remembering and moments
              made extraordinary.
            </p>


            
            <div className="flex gap-4 mt-6">

              <FaInstagram className="text-zinc-500 hover:text-[#E07BA8] cursor-pointer" size={18} />

              <FaFacebookF  className="text-zinc-500 hover:text-[#E07BA8] cursor-pointer"  size={18}/>

              <FaTwitter  className="text-zinc-500 hover:text-[#E07BA8] cursor-pointer"  size={18}/>

            </div>

          </div>


          
          <div>

            <h3 className="text-sm font-medium mb-5">
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-zinc-500">

              <li >
                <Link to='/explore' className="hover:text-[#E07BA8] cursor-pointer">
                     Explore Events
                </Link>
               
              </li>

              <li className="hover:text-[#E07BA8] cursor-pointer">
                <Link to='/explore' className="hover:text-[#E07BA8] cursor-pointer">
                     Categories
                </Link>
              </li>

              <li className="hover:text-[#E07BA8] cursor-pointer">
                <Link to='/' className="hover:text-[#E07BA8] cursor-pointer">
                     Upcoming Events
                </Link>            
              </li>

            </ul>

          </div>


          
          <div>

            <h3 className="text-sm font-medium mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-zinc-500">

              <li className="hover:text-[#E07BA8] cursor-pointer">
                <Link to='/about' className="hover:text-[#E07BA8] cursor-pointer">
                     About Evora
                </Link>
              </li>

              <li className="hover:text-[#E07BA8] cursor-pointer">
                <Link to='/' className="hover:text-[#E07BA8] cursor-pointer">
                     How It Works
                </Link>
              </li>

              <li className="hover:text-[#E07BA8] cursor-pointer">
                <Link to='/contact' className="hover:text-[#E07BA8] cursor-pointer">
                     Contact
                </Link>
                
              </li>

              <li className="hover:text-[#E07BA8] cursor-pointer">
                FAQs
              </li>

            </ul>

          </div>


          {/* SUPPORT */}
          <div>

            <h3 className="text-sm font-medium mb-5">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-zinc-500">

              <li className="hover:text-[#E07BA8] cursor-pointer">
                Help Center
              </li>

              <li className="hover:text-[#E07BA8] cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-[#E07BA8] cursor-pointer">
                Terms of Service
              </li>

            </ul>

          </div>

        </div>


        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6">

          <div className="flex flex-col md:flex-row justify-between gap-3 text-xs text-zinc-600">

            <p>
              © 2026 Évora. All rights reserved.
            </p>

            <p>
              Privacy Policy · Terms of Service
            </p>

          </div>

        </div>

      </div>

    </footer>



        
    )
}