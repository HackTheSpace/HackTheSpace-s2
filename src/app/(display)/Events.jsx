// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import "./stepper.css";
// import { scheduleConfig } from "@/config/schedule";

// const Events = () => {
//   // Create a ref for the scrollable container
//   const scrollContainerRef = useRef(null);

//   // Function to scroll the container by a specific distance
//   const scrollByDistance = (distance) => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({
//         top: distance, // Scroll vertically
//         behavior: "smooth", // Smooth scrolling effect
//       });
//     }
//   };

//   // Auto scroll down by 100 pixels every 2 seconds
//   useEffect(() => {
//     // scrollByDistance(100); // Scroll down by 100 pixels
//     // setInterval(() => scrollByDistance(100), 1000);
//   }, []);
//   return (
//     <div
//       className="scheduleBox"
//       ref={scrollContainerRef}
//       style={{ overflowY: "auto", maxHeight: "100vh" }}
//     >
//       {scheduleConfig.map((e) => (
//         <div className="timeline" key={e.id}>
//           <div className="container right" id={e.time}>
//             <div className="timelineIcon ">
//               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEyElEQVR4nO1ba2gcVRS+adX6foAVrWIxRsRI02zO2TWKWsXSH4KiPyKojf7yCWoFX/RHI4ig+CibzD3TLULBP0oUfEJ90Gr1j7YVtSbOObON0UIVUZFKq7VaR+5k10zW3c1mO7szmd0Pzr+7u/c7955zz/3OXaXaaKONNtpoI7YYzvB5GuQ+Qh7WyFkrLXdke93FKul44TLnJALeqIH/JhQvaBrlT438xNCKD45SySUv20uJl7FXPOV1qKSBgHPTq83/EMprGpy7NToPlDrGhIdKEux+OXvGtge5vXSMRh4JhMP3Odh5tEoKCOXOALl3yo0xsU8gPxTHbUjnL1VJgUZ+dnr1+dGK44BfCoTJapUUEMpT0zHOQxXHAb857Sj3FpUUaOTVgRBwRrvHjqmQJ/4ojrMzslwlBTmYOIWA9wWS4Mvrl0+eGiRPyJ8FwmRMJQ0W8IMzz3v+lZDfJeD3Ncqh4BGpwV2lkgZPeR2EbFcvgvgwgdyvkgw77dxKyPky5D+xwblKtQI85XXoFPfYabmR0LneSo0vjXpObYQJU8Zaaek1q+tfe4HvMdWgBr6BUDoTedmx0mNnEvIaP7Oj7K+a7EB+1sgbqE+uUPMdVlqu1MBvlbvj12TA26jP7VfzDdTn9mvkj+oi/T8xxJz9sr5chRg7UM/uMwh4U+FOf8TkS3SAHSaUVFyhwV1l7uphEy/JD98YzVDFLavTlIBZw6rzQQLZbCo6K83XWKl815QAOqe8MBEbkTTb6y4m4A9rWTlzCmQz7snlvqeOnfNxtstdpKIEoXRq5N3VE5j8ZLS90QFvYaXvsYAvr++U4OHmMg7ASucvJpS9s0zydVq26zRVAvuS8Qs08COE/PZsDpztdCCUlarZIHQu1Mg/zjrBlFw083OyUiO/F+rJgPxdDvYe3zTyVmp8KQHvqXFy9059Jt9lVjtM4iW/s65pzQsN8tVctqgGcQnkr0aRL9j+HHx9VkPJDylvgQZ5o8okvvXJNpZoNXu6oQ4g4McqrjTwq6YWMJmeULZG4gDgfUEdsQF1vRyq8MPbNq2YPLY41nRzo9sFvCZ08tkud5EG4Qo/eNDU/sWxRqrWIL9FGAa7QneARl5XcesjH3im54sTzLgcuOcHW1dR2Qjk+0Ijn8245xDw77PE3uemIjMiRtTk/UUBfjI0BxDwxqgJzdnCapqMpJwlFRNfzC0HE+cesQM0yONRE6nXTG8hDAfsiJpIvWYE1ZAKHz4cNZm6DGS7Ci0PgNymQV5suNQV7g44YEp3FTbsjNttpCz/oUKwnR1P61SNxKip+/scME9aTAvbrwqjJ/2fmX6Eaias7rETbZBrCeV5QvmyEbL4nBwAcrOKgVg6YN7/aZDJZjugKMbEBoTSWXgON6pBfmm8A+QhFVeMDngLbZAMoazVKFsalD/WqvmC5/r3HGcE08JzuZ1h1B/mzZGar8gBn26n+Sb//TDwRD0OsEHuUknBSMpZUkyoNfQiCjnAvU4lEUPKW0DopgjlYfPYwlR95RwwAs4y1QrI+pKdc7URQjTyp36LDWRzIp/Z1IKWJd7G3BMJDxYuMq1jyIP+Ndnc8Ztdm8fHeFD5qx/5RKIxbf5p4jc6p/6kYErPljHD2YTAv1Z2KGaeyzKuAAAAAElFTkSuQmCC" />
//             </div>
//             <div className="content">
//               <h2>
//                 {e.time}
//                 <div>{e.period}</div>
//                 {e.day}
//               </h2>
//               <p>{e.content}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

"use client";
import React, { useRef } from "react";
import "./stepper.css";
import { timeconfig } from "./timeconfig.js";
import Image from "next/image";

const Events = () => {
  const scrollContainerRef = useRef(null);
  // const [currentTime, setCurrentTime] = useState("");

  // Function to scroll the container by a specific distance
  const scrollByDistance = (distance) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: distance,
        behavior: "smooth",
      });
    }
  };

  // Auto scroll down by 100 pixels every 2 seconds

  const intervalId = setInterval(() => {
    scrollByDistance(100); // Scroll down by 100 pixels
  }, 2000);

  return (
    <div
      className="scheduleBox"
      ref={scrollContainerRef}
      style={{ overflowY: "auto", maxHeight: "100vh" }}
    >
      {timeconfig.map((e) => {
        return (
          <div className="timeline" key={e.id}>
            <div className="container right">
              <div className={`timelineIcon`}>
                <Image
                  width={100}
                  height={100}
                  alt="{harsh}"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEyElEQVR4nO1ba2gcVRS+adX6foAVrWIxRsRI02zO2TWKWsXSH4KiPyKojf7yCWoFX/RHI4ig+CibzD3TLULBP0oUfEJ90Gr1j7YVtSbOObON0UIVUZFKq7VaR+5k10zW3c1mO7szmd0Pzr+7u/c7955zz/3OXaXaaKONNtpoI7YYzvB5GuQ+Qh7WyFkrLXdke93FKul44TLnJALeqIH/JhQvaBrlT438xNCKD45SySUv20uJl7FXPOV1qKSBgHPTq83/EMprGpy7NToPlDrGhIdKEux+OXvGtge5vXSMRh4JhMP3Odh5tEoKCOXOALl3yo0xsU8gPxTHbUjnL1VJgUZ+dnr1+dGK44BfCoTJapUUEMpT0zHOQxXHAb857Sj3FpUUaOTVgRBwRrvHjqmQJ/4ojrMzslwlBTmYOIWA9wWS4Mvrl0+eGiRPyJ8FwmRMJQ0W8IMzz3v+lZDfJeD3Ncqh4BGpwV2lkgZPeR2EbFcvgvgwgdyvkgw77dxKyPky5D+xwblKtQI85XXoFPfYabmR0LneSo0vjXpObYQJU8Zaaek1q+tfe4HvMdWgBr6BUDoTedmx0mNnEvIaP7Oj7K+a7EB+1sgbqE+uUPMdVlqu1MBvlbvj12TA26jP7VfzDdTn9mvkj+oi/T8xxJz9sr5chRg7UM/uMwh4U+FOf8TkS3SAHSaUVFyhwV1l7uphEy/JD98YzVDFLavTlIBZw6rzQQLZbCo6K83XWKl815QAOqe8MBEbkTTb6y4m4A9rWTlzCmQz7snlvqeOnfNxtstdpKIEoXRq5N3VE5j8ZLS90QFvYaXvsYAvr++U4OHmMg7ASucvJpS9s0zydVq26zRVAvuS8Qs08COE/PZsDpztdCCUlarZIHQu1Mg/zjrBlFw083OyUiO/F+rJgPxdDvYe3zTyVmp8KQHvqXFy9059Jt9lVjtM4iW/s65pzQsN8tVctqgGcQnkr0aRL9j+HHx9VkPJDylvgQZ5o8okvvXJNpZoNXu6oQ4g4McqrjTwq6YWMJmeULZG4gDgfUEdsQF1vRyq8MPbNq2YPLY41nRzo9sFvCZ08tkud5EG4Qo/eNDU/sWxRqrWIL9FGAa7QneARl5XcesjH3im54sTzLgcuOcHW1dR2Qjk+0Ijn8245xDw77PE3uemIjMiRtTk/UUBfjI0BxDwxqgJzdnCapqMpJwlFRNfzC0HE+cesQM0yONRE6nXTG8hDAfsiJpIvWYE1ZAKHz4cNZm6DGS7Ci0PgNymQV5suNQV7g44YEp3FTbsjNttpCz/oUKwnR1P61SNxKip+/scME9aTAvbrwqjJ/2fmX6Eaias7rETbZBrCeV5QvmyEbL4nBwAcrOKgVg6YN7/aZDJZjugKMbEBoTSWXgON6pBfmm8A+QhFVeMDngLbZAMoazVKFsalD/WqvmC5/r3HGcE08JzuZ1h1B/mzZGar8gBn26n+Sb//TDwRD0OsEHuUknBSMpZUkyoNfQiCjnAvU4lEUPKW0DopgjlYfPYwlR95RwwAs4y1QrI+pKdc7URQjTyp36LDWRzIp/Z1IKWJd7G3BMJDxYuMq1jyIP+Ndnc8Ztdm8fHeFD5qx/5RKIxbf5p4jc6p/6kYErPljHD2YTAv1Z2KGaeyzKuAAAAAElFTkSuQmCC"
                />
              </div>
              <div className="content">
                <h2>
                  {e.time}
                  <div>{e.period}</div>
                  {e.day}
                </h2>
                <p>{e.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
