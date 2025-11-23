import React from "react";

const ChancellorSection = () => {
  return (
    <section className="relative flex items-center justify-center w-full px-4 py-10 overflow-hidden ">
      {/* Soft Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20 bg-[#498dbd] blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20 bg-[#346f96] blur-3xl"></div>

      {/* Main Glass Card */}
      <div className="relative z-10 w-full max-w-6xl p-8 border shadow-xl bg-white/40 backdrop-blur-xl border-white/40 rounded-2xl">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          {/* Left Column — Profile */}
          <div className="flex flex-col items-center md:w-1/3">
            <div className="w-48 h-56 overflow-hidden border-4 shadow-lg rounded-xl border-white/70">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=350&fit=crop"
                alt="Prof. Dr. Md. Nazmul Ahsan"
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="mt-5 text-2xl font-bold text-center text-gray-800">
              Prof. Dr. Md. Nazmul Ahsan
            </h3>

            <p className="mt-1 text-sm font-semibold tracking-wide text-[#498dbd] uppercase text-center">
              Vice Chancellor
            </p>
          </div>

          {/* Right Column — Message */}
          <div className="md:w-2/3">
            <h2 className="inline-block pb-3 mb-6 text-3xl font-bold text-gray-900 border-b-4 border-[#498dbd]">
              Message from the Vice Chancellor
            </h2>

            <div className="space-y-4 text-[17px] leading-relaxed text-gray-700">
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
            </div>

            {/* Read More Button */}
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-white transition-all rounded-full shadow-md bg-[#498dbd] hover:bg-[#3a719a] hover:shadow-lg"
              >
                Read More
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChancellorSection;
