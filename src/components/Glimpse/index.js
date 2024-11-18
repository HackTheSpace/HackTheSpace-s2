import Image from "next/image";
import { glimpseConfig } from "../../config/glimpse";
import Heading from "../Heading";

const ImageCard = ({ src1, src2, src3, className, content, content2 }) => {
  const numbers = content.match(/\d+/g);
  const text = content.replace(numbers, "");
  content = (
    <div className="content">
      <h2>{numbers[0]}+</h2>
      <p>{text}</p>
    </div>
  );

  const numbers2 = content2.match(/\d+/g);
  const text2 = content2.replace(numbers2, "");
  content2 = (
    <div className="content">
      <h2>{numbers2[0]}+</h2>
      <p>{text2}</p>
    </div>
  );

  return (
    <div className="image-card" style={{ flexFlow: `${className}` }}>
      <div
        className="left-container"
        style={{ flexFlow: `${className ? "column-reverse" : ""}` }}
      >
        <div className="image-container">
          <div className="container-border">
            <Image
              src={src1}
              height={270}
              width={570}
              quality={100}
              alt="HTS"
            />
          </div>
          {content}
        </div>
        <div className="image-container">
          {content2}
          <div className="container-border">
            <Image
              src={src3}
              height={270}
              width={570}
              quality={100}
              alt="HTS"
            />
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="container-border">
          <Image src={src2} height={600} width={262} quality={100} alt="HTS" />
        </div>
      </div>
    </div>
  );
};

const Glimpse = () => {
  return (
    <section
      className="section wow animate__animated animate__fadeInUp"
      id="events"
    >
      <Image
        src="/images/backgrounds/bg_1.jpg"
        alt="Background"
        fill
        quality={100}
        className="glimpse-section__background"
      />
      <div className="heading-container">
        <h1 className="title-shadow">EVENTS</h1>
        <Heading className="section-title">EVENTS</Heading>
      </div>
      <div className="glimpse-container">
        {glimpseConfig.map((item) => (
          <ImageCard
            key={item.id}
            src1={item.src1}
            src2={item.src2}
            src3={item.src3}
            content={item.content}
            content2={item.content2}
            className={item.className}
          />
        ))}
        <div className="bottom-container">
          <div className="container-border">
            <Image
              src={"/images/glimpse/glimpse_6.jpg"}
              width={850}
              height={270}
              quality={100}
              alt="HTS"
            />
          </div>
          <div className="content">
            <h2>30+</h2>
            <p>Successful Events</p>
          </div>
          <div className="container-border">
            <Image
              src={"/images/glimpse/glimpse_1.jpg"}
              width={450}
              height={270}
              quality={100}
              alt="HTS"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glimpse;
