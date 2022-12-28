import { useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi'
import { HiOutlineArrowLeft } from 'react-icons/hi'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1787236/pexels-photo-1787236.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/6587838/pexels-photo-6587838.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      src: ' https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1);
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (nextSlide) => nextSlide + 1);
  }

  return (
    <div className='frame relative'>
      <div className="slider">
        {
          data.map(image => {
            return <div
              key={image.id}
              style={{ backgroundImage: `url(${image.src})`, transform: `translateX(-${100 * currentSlide}vw` }}
              className="slide"></div>
          })
        }
      </div>
      <div className='slider-btn absolute left-1/2 bottom-20 flex gap-20'>
        <button
          onClick={prevSlide}
          className="left bg-transparent/40 rounded-sm text-slate-50 w-10 h-8 flex justify-center items-center text-xl hover:bg-transparent/80 hover:text-slate-300"><HiOutlineArrowLeft /></button>
        <button
          onClick={nextSlide}
          className="right bg-transparent/40 rounded-sm text-slate-50 w-10 h-8 flex justify-center items-center text-xl hover:bg-transparent/80 hover:text-slate-300"><HiOutlineArrowRight /></button>
      </div>
    </div>
  );
};

export default Slider;
