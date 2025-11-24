import { FaInfo, FaUsers } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { TfiTarget } from "react-icons/tfi";

const InfoCardsSection = () => {
  const cards = [
    { title: "About KAU", icon: <FaInfo />, link: "#" },
    { title: "Administration", icon: <FaUsers />, link: "#" },
    { title: "Mission & Vision", icon: <TfiTarget />, link: "#" },
    { title: "APA", icon: <FaCircleCheck />, link: "#" },
  ];

  return (
    <section className="relative px-6 py-20 explore-section">
      <div className="mx-auto max-w-7xl">
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
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              className="relative flex flex-col items-center p-8 overflow-hidden text-center transition-all duration-500 rounded-lg shadow-lg cursor-pointer group bg-white/20 backdrop-blur-md hover:shadow-2xl"
            >
              {/* Gradient Icon */}
              <div className="relative z-10 flex items-center justify-center w-20 h-20 mb-6 text-4xl text-white rounded-full bg-gradient-to-tr from-[#438ABA] to-[#346f96] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="relative z-10 text-white font-bold text-lg md:text-xl group-hover:text-[#fffc] transition-colors duration-300">
                {card.title}
              </h3>

              {/* Hover Glow */}
              <span className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#438ABA]/20 to-[#346f96]/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></span>

              {/* Floating Glow */}
              <span className="absolute -bottom-10 w-32 h-32 bg-gradient-to-tr from-[#438ABA] to-[#346f96] opacity-20 rounded-full blur-3xl animate-pulse-slow"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
