import { useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Slide from './Slide';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyb25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      title: "Explore the Skies with a Drone",
      body: "Drones are devices that allow you to capture unique perspectives and breathtaking aerial footage. They are equipped with advanced technology and easy-to-use controls, making them accessible to people of all skill levels.",
      cta: "Fly a Drone Today",
      category: 'drone'
      // https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=600
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      title: "Enhance Your TV Experience with a Smart TV",
      body: "A smart TV is a television with internet connectivity and built-in apps for streaming online content. It offers convenient access to a wide range of shows, movies, and other online content.",
      cta: "Upgrade to a Smart TV",
      category: 'tv'
      // https://images.pexels.com/photos/6587838/pexels-photo-6587838.jpeg?auto=compress&cs=tinysrgb&w=600
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbnNvbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      title: "Step Up Your Gaming with a Console",
      body: "A gaming console is the ultimate device for gamers. With a powerful processor, stunning graphics, and a wide selection of games, a console lets you fully immerse yourself in your favorite virtual worlds. Whether you're a casual gamer or a hardcore enthusiast, a console is a must-have for any serious gamer.",
      cta: "Play on a Console Now",
      category: 'console'
      // https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=600
      // https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc29sZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1787236/pexels-photo-1787236.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: "Professional-Grade DSLR",
      body: 'DSLRs are high-quality cameras with advanced controls and interchangeable lenses. They enable you to capture professional-level photos and videos.',
      cta: 'Upgrade to DSLR',
      category: 'camera'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      title: 'Experience the Convenience of a Smartwatch',
      body: ' Smartwatches are the perfect blend of style and functionality. With a smartwatch, you can easily stay connected to your phone, receive notifications, track your fitness, and much more all from your wrist. These devices are convenient, stylish, and make life easier.',
      cta: 'Get a Smartwatch Today',
      category: 'smart watch'
      // https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600
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
          data.map(image => <Slide key={image.id} image={image} currentSlide={currentSlide} />)
        }
      </div>
      <div className='slider-btn absolute left-1/2 bottom-20 flex gap-20'>
        <button
          onClick={prevSlide}
          className="left bg-transparent/40 rounded-sm text-slate-50 w-10 h-8 flex justify-center items-center text-xl hover:bg-transparent/80 hover:text-slate-300 border border-slate-400"><HiOutlineArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="right bg-transparent/40 rounded-sm text-slate-50 w-10 h-8 flex justify-center items-center text-xl hover:bg-transparent/80 hover:text-slate-300 border border-slate-400"><HiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
