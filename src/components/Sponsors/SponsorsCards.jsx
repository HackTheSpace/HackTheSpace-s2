import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sponsorConfig } from "../../config/sponsors";

const SponsorsContainer = ({ Name, Img, linkS }) => {
  return (
    <>
      <Link href={linkS} target="_blank">
        <div className="sponsors--cards">
          <div className="glass-effect">
            <Image alt={Name} src={Img} width={184} height={82} />
          </div>
        </div>
      </Link>
    </>
  );
};

const SponsorsCards = () => {
  const { universe, planet, comet, galaxy, inkind, mainPartner } =
    sponsorConfig;

  return (
    <>
      <div className="sponsors--div__2">
        <h2 className="sponsors--head__title">{universe.Name}</h2>
        <div className="sponsors--cards__container">
          {universe.Sponsor.map((e) => (
            <SponsorsContainer
              key={e.id}
              Name={e.Name}
              linkS={e.Link}
              Img={e.Img}
            />
          ))}
        </div>
      </div>
      <div className="sponsors--div__2">
        <h2 className="sponsors--head__title">{galaxy.Name}</h2>
        <div className="sponsors--cards__container">
          {galaxy.Sponsor.map((e) => (
            <SponsorsContainer
              key={e.id}
              Name={e.Name}
              linkS={e.Link}
              Img={e.Img}
            />
          ))}
        </div>
      </div>
      <div className="sponsors--div__2">
        <h2 className="sponsors--head__title">{planet.Name}</h2>
        <div className="sponsors--cards__container">
          {planet.Sponsor.map((e) => (
            <SponsorsContainer
              key={e.id}
              Name={e.Name}
              linkS={e.Link}
              Img={e.Img}
            />
          ))}
        </div>
      </div>
      <div className="sponsors--div__2">
        <h2 className="sponsors--head__title">{comet.Name}</h2>
        <div className="sponsors--cards__container">
          {comet.Sponsor.map((e) => (
            <SponsorsContainer
              key={e.id}
              Name={e.Name}
              linkS={e.Link}
              Img={e.Img}
            />
          ))}
        </div>
      </div>
      <div className="sponsors--div__2 ruby__div">
        <h2 className="sponsors--head__title">{mainPartner.Name}</h2>
        <div className="sponsors--cards__container">
          {mainPartner.Sponsor.map((e) => (
            <SponsorsContainer
              key={e.id}
              Name={e.Name}
              linkS={e.Link}
              Img={e.Img}
            />
          ))}
        </div>
      </div>
      <div className="sponsors--div__2">
        <h2 className="sponsors--head__title">{inkind.Name}</h2>
        <div className="sponsors--cards__container wrap__div">
          {inkind.Sponsor.map((e) => (
            <SponsorsContainer
              key={e.id}
              Name={e.Name}
              linkS={e.Link}
              Img={e.Img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SponsorsCards;
