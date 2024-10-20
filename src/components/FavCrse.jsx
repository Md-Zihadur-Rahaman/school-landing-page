import marketing from '../assets/marketing-image.svg'
import marketingMobile from '../assets/marketing-mobile.svg'
import design from '../assets/design-image.svg'
import programming from '../assets/programming-image.svg'
import technology from '../assets/technology-image.svg'
import technologyMobile from '../assets/technology-mobile.svg'
import photography from '../assets/photography-mobile.svg'
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'

const FavCrse = () => {
  return (
    <section className='max-w-7xl m-4 lg:mx-auto mb-8 lg:mb-24 p-4 md:p-0'>
      {/* heading */}
      <div className='flex justify-between items-start gap-6 mb-4 lg:mb-16'>
        <h1 className='font-Poppins font-medium md:font-semibold text-base md:text-3xl text-gary_text'>
          Choose favourate course from top categories
        </h1>
        <a
          className='text-nowrap font-Poppins font-normal text-sm md:text-2xl text-gary_text'
          href='#'
        >
          See all
        </a>
      </div>
      {/* course and image desktop section */}
      <div className='hidden md:flex justify-between gap-8 relative'>
        <figure className=''>
          <img src={marketing} alt='' />
        </figure>
        <figure className=''>
          <img src={design} alt='' />
        </figure>
        <figure className=''>
          <img src={programming} alt='' />
        </figure>
        <figure className=''>
          <img src={technology} alt='' />
        </figure>
        {/* arrow left */}
        <figure className='absolute left-[3%] top-[40%] cursor-pointer'>
          <img src={arrowLeft} alt='' />
        </figure>
        {/* right left */}
        <figure className='absolute right-[3%] top-[40%] cursor-pointer'>
          <img src={arrowRight} alt='' />
        </figure>
      </div>

      {/* course and image mobile section */}
      <div className='md:hidden flex justify-between gap-4 relative'>
        <figure className=''>
          <img src={marketingMobile} alt='' />
        </figure>

        <figure className=''>
          <img src={technologyMobile} alt='' />
        </figure>
        <figure className=''>
          <img src={photography} alt='' />
        </figure>
      </div>
    </section>
  )
}

export default FavCrse
