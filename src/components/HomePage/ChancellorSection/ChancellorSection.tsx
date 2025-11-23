import React from "react";
import { FaLinkedin, FaTwitter, FaResearchgate } from "react-icons/fa";

const ChancellorSection = () => {
  return (
    <section className="relative flex items-center justify-center w-full px-4 py-12 overflow-hidden bg-gray-50">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20 bg-[#498dbd] blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20 bg-[#346f96] blur-3xl animate-pulse-slow"></div>

      {/* Glass Card */}
      <div className="relative z-10 w-full p-8 border max-w-7xl bg-white/50 backdrop-blur-lg border-white/30 rounded-3xl">
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Left Column — Profile */}
          <div className="flex flex-col items-center text-start md:w-1/3 md:text-start">
            <div className="flex items-center w-full h-full overflow-hidden transition-transform duration-300 border-4 shadow-2xl rounded-xl border-white/40 hover:scale-105">
              <img
                src="/images/Prof.-Dr.-Md.-Nazmul-Ahsan.jpg"
                alt="Prof. Dr. Md. Nazmul Ahsan"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Column — Message */}
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold text-site-secondary">
                Chancellor Vice
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 text-[17px] leading-relaxed">
              <p>
                It is with immense pride and gratitude that I welcome you all to
                Khulna Agricultural University (KAU), Khulna. We stand on the
                shoulders of countless martyrs, whose sacrifices paved the way
                for an independent Bangladesh in 1971. The July 2024 student-led
                mass movement, a turning point in our nation's history, ignited
                hope and renewed our commitment to building a just and
                democratic Bangladesh.
              </p>

              <p className="hidden md:block">
                Thousands of courageous young souls, inspired by the spirit of
                unity against discrimination, joined the movement that
                eventually led to historic change — widely remembered as the
                “Second Victory of Bangladesh.” We honor over 1,500 martyrs and
                extend heartfelt condolences to their families...
              </p>
              <div className="w-full text-start ">
                <h3 className="mt-5 text-2xl font-bold text-gray-900 text-start">
                  Prof. Dr. Md. Nazmul Ahsan
                </h3>
                <p className="mt-1 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                  Vice Chancellor
                </p>
              </div>

              {/* Additional Details */}
              <div className="w-full mt-4 space-y-2 text-sm text-gray-700 ">
                <p>
                  Ph.D. in Agricultural Science, XYZ University, <br /> 25+
                  years in research & teaching, National Agricultural Award 2018
                </p>
              </div>
            </div>

            {/* Read More Button */}
            <div className="flex items-center justify-start mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-white rounded-full bg-gradient-to-r from-[#498dbd] to-[#346f96] shadow-lg hover:shadow-xl transition-all"
              >
                Read More <span className="text-lg">→</span>
              </a>
              {/* Social Icons */}
              <div className="flex justify-center gap-4 ps-5">
                <a
                  href="#"
                  className="p-2 text-white bg-[#0077B5] rounded-full hover:scale-110 transition-transform"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 text-white bg-[#1DA1F2] rounded-full hover:scale-110 transition-transform"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 text-white bg-[#006699] rounded-full hover:scale-110 transition-transform"
                >
                  <FaResearchgate size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChancellorSection;
