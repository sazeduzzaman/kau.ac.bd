import { FaInfo, FaUsers } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { TfiTarget } from "react-icons/tfi";

const InfoCardsSection = () => {
  const cards = [
    {
      title: "About KAU",
      icon: <FaInfo className="w-10 h-10 md:w-12 md:h-12" />,
      link: "#",
    },
    {
      title: "Administration",
      icon: <FaUsers className="w-10 h-10 md:w-12 md:h-12" />,
      link: "#",
    },
    {
      title: "Mission & Vision",
      icon: <TfiTarget className="w-10 h-10 md:w-12 md:h-12" />,
      link: "#",
    },
    {
      title: "APA",
      icon: <FaCircleCheck className="w-10 h-10 md:w-12 md:h-12" />,
      link: "#",
    },
  ];

  return (
    <section className="relative px-4 py-16 bg-gradient-to-br from-[#eaf2f7] to-[#d6e7f1] explore-section">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-center text-white md:text-4xl">
            Explore KAU
            <div className="w-32 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#fff] to-[#498dbd]" />
          </h2>
          <p className="pt-3 text-white">
            Get to know more about KAU. Chek it out{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              className="flex flex-col items-center justify-center p-8 text-center transition-all duration-500 bg-white/100 backdrop-blur-md cursor-pointer group rounded-lg hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#498dbd]/20"
            >
              {/* Icon container with gradient & hover effect */}
              <div className="mb-6 flex items-center justify-center w-20 h-20 text-white rounded-full bg-gradient-to-tr from-[#498dbd] to-[#346f96] text-3xl transition-all duration-500 group-hover:scale-110">
                {card.icon}
              </div>

              <h3 className="text-[#333] font-semibold text-lg md:text-xl group-hover:text-[#498dbd] transition-colors duration-300">
                {card.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
