import { Target } from "lucide-react";
import Link from "next/link";
import { FaInfo, FaUniversity, FaUsers } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { TfiTarget } from "react-icons/tfi";

const InfoCardsSection = () => {
 const cards = [
    {
      title: "About KAU",
      icon: <FaInfo className="w-12 h-12" />,
      link: "/about",
    },
    {
      title: "Administration",
      icon: <FaUsers className="w-12 h-12" />,
      link: "/vc-office",
    },
    {
      title: "Mission & Vision",
      icon: <Target className="w-12 h-12" />,
      link: "/mission-vission",
    },
    {
      title: "Academic Policy Agreement",
      icon: <FaCircleCheck className="w-12 h-12" />,
      link: "/apa",
    },
    {
      title: "Admission",
      icon: <FaUniversity className="w-12 h-12" />,
      link: "/register-office",
    },
  ];

  return (
    <section className="relative px-6 py-20 explore-section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="relative inline-block text-5xl font-extrabold text-white">
            Explore KAU
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-gradient-to-r from-[#fff] to-[#438ABA]" />
          </h2>
          <p className="mt-4 text-lg text-white md:text-xl">
            Discover the different aspects of Khulna Agriculture University.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {cards.map((card, index) => (
              <Link
                key={index}
                href={card.link}
                className="relative flex flex-col items-center p-0 overflow-hidden text-center transition-all duration-500 rounded-lg cursor-pointer bg-white/20 backdrop-blur-md group"
              >
                <div className="relative flex flex-col items-center justify-center w-full h-48 text-center transition-all duration-300 border rounded-lg border-white/30 hover:bg-white hover:scale-105">
                  <div className="mb-4 text-white group-hover:text-[#438ABA] transition-colors duration-300">
                    {card.icon}
                  </div>

                  <h3 className="text-white font-semibold text-sm md:text-base tracking-wide group-hover:text-[#438ABA] transition-colors duration-300 uppercase mb-2">
                    {card.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
