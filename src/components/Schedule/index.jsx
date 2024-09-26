import React from 'react'
import ScrollContainer from './ScrollContainer';

const index = () => {

  return (
    <>
    <section className='schedule--section'>
        <div className='schedule__container'>
            <div className='schedule--heading'>
                <h2 className="title-shadow">SCHEDULE</h2>
                <h4 className="sponsors--heading__main">SCHEDULE</h4>
            </div>
           <ScrollContainer />
        </div>
    </section>
    </>
  )
}

export default index