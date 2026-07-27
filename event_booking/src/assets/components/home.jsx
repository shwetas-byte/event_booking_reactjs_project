import myImg from '../image/bg1.png'

export function Home() {
  return (
    <>
      <section className='relative min-h-screen w-full overflow-hidden bg-[#0B030A]'>
        <img 
          src={myImg} 
          alt="Évora Luxury Event" 
          className='absolute inset-0 w-full h-full object-cover object-right md:object-[85%_center]' 
        />
        
        
      </section>
    </>
  )
}