import React from 'react'
import Image from 'next/image'
import '../styles/WhatIsHTS.css'

const WhatIsHTS = () => {
  return (
    <section className='whatIs-section'>
        <div className='whatIs-content__div'>
            <div>
                <Image
                src="/moon.png"
                alt="moon"
                width={550}
                height={550}
                className="whatIs-main__image"
            />
            </div>
            <div className='whatIs-text__container'>
                <h1 className='whatIs-text__shadow'>WHAT?</h1>
                <h3 className='whatIs-text__heading'>WHAT IS HACKTHESPACE ?</h3>
                <p className='whatIs-text__para1'>Inspired by the famous painting, HackTheSpace 2023: A Starry Night will enable you to channel your creative persona, pushing the bounds of imagination and possibility to ideate, innovate, and develop something truly out of the world.</p>
                <p className='whatIs-text__para2'> Inspired by the famous painting, HackTheSpace 2023: A Starry Night will enable you to channel your creative persona, pushing the bounds of imagination and possibility to ideate, innovate, and develop something truly out of the world.Inspired by the famous painting, HackTheSpace 2023: A Starry Night will enable you to channel your creative persona, pushing the bounds of imagination and possibility to ideate, innovate, and develop something truly out of the world.</p>
            </div>
        </div>
    </section>
  )
}

export default WhatIsHTS