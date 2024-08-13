import React from 'react';
import { sponsorConfig } from '../../config/sponsors';
import Link from 'next/link';
import Image from 'next/image';
import SponsorsCards from './SponsorsCards';

const Sponsors = () => {
  const { poweredBy } = sponsorConfig;

  return (
    <>
    <section className='sponsors--section'>
        <div className='sponsors--heading'>
          <div className='sponsors--heading__container'>
              <h2 className='sponsors--heading__shadow'>SPONSORS</h2>
              <h4 className='sponsors--heading__main'>SPONSORS</h4>
          </div>
          {/* <div className='sponsors--heading__waiting'>
            <h2 className='sponsors--heading__shadow2'>Coming Soon..</h2>
          </div> */}
        </div>
        <div className='sponsors--container'>
              <div className='sponsors--div__1'> 
                <h5 className='sponsors--powered__text'>{poweredBy.Name}</h5>
                {poweredBy.Sponsor.map((e) => (
                  <div className="sponsors--poweredBy" key={e.id}>
                      <div className='text'>
                          <h2 className='sponsors--powered__title'>{e.Name}</h2>
                          <p className='sponsors--powered__para'>{e.para}</p>
                      </div>
                      <div className='image'>
                        <Link href={e.Link} target='_blank'>
                          <Image className='sponsors--powered__img' alt={e.Name} src={e.Img} width={300} height={130}/>
                        </Link>
                      </div>
                  </div>
                ))}
              </div>
          
            <SponsorsCards/>
        </div>
    </section>
    </>
  )
}

export default Sponsors;