import React from 'react';
import { Link } from 'react-router-dom';

const Slide = ({ image, currentSlide }) => {
  return (
    <div
      key={image.id}
      style={{ backgroundImage: `url(${image.src})`, transform: `translateX(-${100 * currentSlide}vw` }}
      className="slide flex items-center">
      <div className='container mx-auto  flex flex-col gap-3 items-start'>
        <h2 className='image-title space-font uppercase text-5xl text-slate-50'>{image.title}</h2>
        <p className='image-text text-slate-50 w-3/5'>{image.body}</p>
        <Link
          to={`/products/${image.category}`}
          className='slide-btn border border-slate-50 w-64 h-10 mt-5 duration-300 relative'>
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-[2] text-center text-slate-50 hover:text-cyan-50 hover:border-cyan-50'>{image.cta}</span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;