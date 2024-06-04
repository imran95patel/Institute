import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import img from "../assets/Designer10.png";
import img1 from "../assets/Designer11.png";

const InterestingCards = () => {
  const cards = [
    {
      icon: <FontAwesomeIcon icon={faTrophy} />,
      title: "10,000+ Students",
      description: "Join a community of over 10,000 students.",
    },
    {
      icon: img,
      title: "Award Winning",
      description: "Recognized as an award-winning platform.",
    },
    {
      icon: img1,
      title: "Certification",
      description: "Receive certificates for your achievements.",
    },
  ];

  return (
    <>
      <div className="mx-auto m-0 max-w-1920 w-auto relative ">
        <section className="py-12 xs:mt-[300vh] sm:mt-[310vh] md:mt-[80vh] lg:mt-[65vh] xl:-mt-32 xl:mb-28 2xl:-mt-96 ">
          <div className="container mx-auto px-8 xl:px-20">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cards.map((card, index) => (
                <div
                  className="bg-white rounded-lg border-2 overflow-hidden text-center p-8 hover:bg-sky-400 shadow-xl shadow-amber-500/50"
                  key={index}
                >
                  {typeof card.icon === "string" ? (
                    <img
                      src={card.icon}
                      className="w-20 h-20 mx-auto mb-6 rounded-full"
                      alt={card.title}
                    />
                  ) : (
                    card.icon
                  )}
                  <h5 className="text-lg font-bold mb-4">{card.title}</h5>
                  <p className="text-gray-700">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InterestingCards;
