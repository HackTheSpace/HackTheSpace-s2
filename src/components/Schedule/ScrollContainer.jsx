"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const ScrollContainer = () => {
  const scrollContainerRef = useRef(null);

  // Use useEffect to add the event listener when the component mounts
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const handleWheel = (event) => {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally on vertical wheel action
      };

      // Attach the event listener
      scrollContainer.addEventListener('wheel', handleWheel);

      // Cleanup the event listener on component unmount
      return () => {
        scrollContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <div ref={scrollContainerRef} className='schedule--container__box'>
    <div className='schedule--outer__container'>
        <div className='schedule--inner__container'>
          <Image src="/images/backgrounds/bg_2.jpg" alt='background' width={1000} height={300}/>
        </div>
        <div className='schedule--inner__container'>
        <Image src="/images/backgrounds/bg_2.jpg" alt='background' width={1000} height={300} />
        </div>
        <div className='schedule--inner__container'>
        <Image src="/images/backgrounds/bg_2.jpg" alt='background' width={1000} height={300}  />
        </div>
        
    </div>
</div>
  );
};

export default ScrollContainer;
