import { FiMail, FiPhone, FiMapPin} from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn,} from "react-icons/fa";

export function Contact() {
  return (
    <div className="bg-zinc-950 text-white">

      {/* Hero */}
      <section className="text-center py-24 px-6 border-b border-white/10">

        <p className="text-[#B65C7A] text-3xl  font-medium">
          Get In Touch
        </p>

        <h1 className="text-4xl md:text-6xl font-serif text-[#FAF8F6] mt-5">
          We’d love to hear from you.
        </h1>

        <p className="text-zinc-400 mt-5 max-w-xl mx-auto leading-7">
          Have a question, idea, or just want to say hello?
          <br />
          We’re here and happy to help.
        </p>

        <div className="w-10 h-px bg-[#B65C7A] mx-auto mt-7"></div>

      </section>


      {/* Contact Section */}
      <section className="py-20 px-6 ">

        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">


          
          <div className="border-r border-white/10 pr-12">

            <h2 className="text-3xl font-serif text-[#FAF8F6]">
              Let’s talk.
            </h2>

            <p className="text-zinc-400 mt-4 max-w-md leading-7">
              Whether you’re planning an event, looking for
              collaboration, or have a query — we’d love to connect.
            </p>


            
            <div className="flex items-center gap-4 mt-10 pb-6 border-b border-white/10">

              <div className="w-12 h-12 rounded-full border border-[#B65C7A] flex items-center justify-center">
                <FiMail className="text-[#B65C7A] text-xl" />
              </div>

              <div>
                <p className="text-[#B65C7A] text-xs uppercase tracking-wider">
                  Email
                </p>

                <p className="text-[#FAF8F6] mt-1">
                  hello@evora.com
                </p>
              </div>

            </div>



            <div className="flex items-center gap-4 py-6 border-b border-white/10">

              <div className="w-12 h-12 rounded-full border border-[#B65C7A] flex items-center justify-center">
                <FiPhone className="text-[#B65C7A] text-xl" />
              </div>

              <div>
                <p className="text-[#B65C7A] text-xs uppercase tracking-wider">
                  Phone
                </p>

                <p className="text-[#FAF8F6] mt-1">
                  +91 12345 67890
                </p>
              </div>

            </div>


            
            <div className="flex items-center gap-4 py-6">

              <div className="w-12 h-12 rounded-full border border-[#B65C7A] flex items-center justify-center">
                <FiMapPin className="text-[#B65C7A] text-xl" />
              </div>

              <div>
                <p className="text-[#B65C7A] text-xs uppercase tracking-wider">
                  Location
                </p>

                <p className="text-[#FAF8F6] mt-1">
                  Bhopal, Madhya Pradesh, India
                </p>
              </div>

            </div>



            <div className="flex gap-4 mt-6">

              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#B65C7A] hover:text-[#B65C7A] transition">
                <FaInstagram />
              </div>

              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#B65C7A] hover:text-[#B65C7A] transition">
                <FaFacebookF />
              </div>

              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#B65C7A] hover:text-[#B65C7A] transition">
                <FaTwitter />
              </div>

              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#B65C7A] hover:text-[#B65C7A] transition">
                <FaLinkedinIn />
              </div>

            </div>

          </div>



          <div>

            <form className="space-y-6">


              <div className="grid grid-cols-2 gap-5">

                <div>
                  <label className="text-xs uppercase tracking-wider text-zinc-400">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full mt-2 bg-transparent border border-white/10 px-4 py-3 rounded-sm outline-none text-white placeholder:text-zinc-600 focus:border-[#B65C7A]"
                  />
                </div>


                <div>
                  <label className="text-xs uppercase tracking-wider text-zinc-400">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full mt-2 bg-transparent border border-white/10 px-4 py-3 rounded-sm outline-none text-white placeholder:text-zinc-600 focus:border-[#B65C7A]"
                  />
                </div>

              </div>


              
              <div>

                <label className="text-xs uppercase tracking-wider text-zinc-400">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full mt-2 bg-transparent border border-white/10 px-4 py-3 rounded-sm outline-none text-white placeholder:text-zinc-600 focus:border-[#B65C7A]"
                />

              </div>


              <div>

                <label className="text-xs uppercase tracking-wider text-zinc-400">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full mt-2 bg-transparent border border-white/10 px-4 py-3 rounded-sm outline-none text-white placeholder:text-zinc-600 resize-none focus:border-[#B65C7A]"
                ></textarea>

              </div>



              <button
                type="submit"
                className="w-full bg-[#B65C7A] text-white py-3 rounded-sm hover:bg-[#8F3F5D] transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}

