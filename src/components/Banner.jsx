import volunteer1 from '../assets/volunteer-1.webp'
import volunteer2 from '../assets/volunteer-2.webp'
import volunteer3 from '../assets/volunteer-6.webp'
import volunteer4 from '../assets/volunteer-8.webp'

export default function Banner() {
  return (
  <div className='w-[300px] md:w-[500px] lg:w-[900px] mx-auto'>
  <div className="carousel carousel-vertical rounded-box h-[200px] md:h-[300px] lg:h-[400px]">
  <div className="carousel-item h-full w-full">
    <img src={volunteer3} className='w-[300px] md:w-[500px] lg:w-[900px]'/>
  </div>
  <div className="carousel-item h-full w-full">
    <img src={volunteer1} className='w-[300px] md:w-[500px] lg:w-[900px]' />
  </div>
  <div className="carousel-item h-full w-full">
    <img src={volunteer2} className='w-[300px] md:w-[500px] lg:w-[900px]'/>
  </div>
  <div className="carousel-item h-full w-full">
    <img src={volunteer4} className='w-[300px] md:w-[500px] lg:w-[900px]'/>
  </div>
  </div>
  </div>
  )
}
