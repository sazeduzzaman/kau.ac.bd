import React from "react";
import { Target, Compass, ChevronRight } from "lucide-react";

const MissionVission = () => {
  // Content derived from the uploaded image
  const visionText =
    "KAU aims to gain equality in agricultural sectors parallel to advanced countries; ensure opportunities to serve as a 'Center of Excellence' for specialized agricultural knowledge, research, skills, and intellectual development to take the leadership for the advancement of agricultural development and management of the nation. Besides, it is intent on the invention of new techniques and technologies to ensure food security, a congenial environment, and overcome agricultural challenges nationally and internationally. KAU is committed to fostering innovation, sustainable farming practices, and cutting-edge research that addresses climate change, environmental sustainability, and rural development. It seeks to empower students, researchers, and faculty to become leaders in agricultural sciences while promoting collaboration with local communities, governmental and non-governmental organizations, and global institutions. The university envisions becoming a hub for knowledge exchange, policy development, and technological advancement that contributes to economic growth, food safety, and improved quality of life for society.";

  const missionPoints = [
    "KAU welcomes and cares students and scholars from all over the world and contributes knowledge and expertise locally, nationally and internationally.",
    "Recognizing students as a first priority and providing the environment and support to ensure their academic and personal success.",
    "Supporting the freedom to pursue knowledge that is based on individual and collective intelligence, curiosity, ingenuity and creativity.",
    "Encouraging and promoting excellence through innovation and creativity, rigor and pragmatism.",
    "Practicing good governance and administration that encourage academic freedom and faculty-staff participation.",
    "Acting in a manner that is environmentally, economically and socially sustainable in administration, academic and research programs.",
  ];

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <div className="relative px-4 py-20 overflow-hidden text-white bg-emerald-900 sm:px-6 lg:px-8">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute rounded-full -top-1/2 -right-1/4 w-96 h-96 bg-emerald-800 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 rounded-full opacity-20 blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Vision & Mission
          </h1>
          <p className="text-xl font-light leading-relaxed text-emerald-100">
            The guiding principles defining our path towards excellence in
            agricultural education and research.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container px-4 py-16 mx-auto space-y-20 sm:px-6 lg:px-8">
        {/* --- Vision Section --- */}
        <section className="grid items-center gap-10 md:grid-cols-2">
          {/* Text Content (Left on Desktop) */}
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 shadow-sm bg-emerald-100 rounded-xl">
                <Target className="w-8 h-8 text-emerald-700" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
            </div>
            <div className="relative p-8 overflow-hidden bg-white border shadow-sm rounded-2xl border-slate-100">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
              <p className="relative z-10 text-lg leading-relaxed text-justify text-slate-700">
                {visionText}
              </p>
            </div>
          </div>

          {/* Image Content (Right on Desktop) */}
          {/* Replace src with your actual image path, e.g., "/images/vision-research.jpg" */}
          <div className="order-1 h-full md:order-2">
            <div className="relative h-full overflow-hidden shadow-xl rounded-2xl group">
              <img
                src="/images/work-1.jpg"
                alt="KAU Vision - Advanced Agricultural Research"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-lg font-bold">
                  Towards a Food-Secure Future
                </p>
                <p className="text-sm text-emerald-200">
                  Leading through innovation and technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Mission Section --- */}
        <section className="grid items-center gap-10 md:grid-cols-2">
          {/* Image Content (Left on Desktop - Alternating layout) */}
          {/* Replace src with your actual image path, e.g., "/images/mission-students.jpg" */}
          <div className="order-1 h-full md:order-1">
            <div className="relative h-full overflow-hidden shadow-xl rounded-2xl group">
              <img
                src="/images/work-5.webp"
                alt="KAU Mission - Students and Community"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-lg font-bold">Empowering Future Leaders</p>
                <p className="text-sm text-blue-200">
                  Fostering academic and personal success.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content (Right on Desktop) */}
          <div className="order-2 md:order-2">
            <div className="flex items-center justify-end gap-3 mb-6 md:justify-start">
              <div className="p-3 bg-blue-100 shadow-sm rounded-xl">
                <Compass className="w-8 h-8 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            </div>

            <div className="relative p-8 overflow-hidden bg-white border shadow-sm rounded-2xl border-slate-100">
              <div className="absolute top-0 right-0 w-2 h-full bg-site-primary md:left-auto md:right-0"></div>
              {/* On mobile, move accent border to left for consistency */}
              <div className="absolute top-0 left-0 w-2 h-full bg-site-primary md:hidden"></div>

              <ul className="relative z-10 space-y-4">
                {missionPoints.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <ChevronRight className="w-5 h-5 mt-1 text-site-primary shrink-0" />
                    <span className="leading-relaxed text-md">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MissionVission;
