import React from 'react';
import { FaGraduationCap, FaLandmark, FaUserSlash } from 'react-icons/fa';
import { RiBuilding2Fill, RiPresentationFill } from 'react-icons/ri';

const KauAtAGlanceSection = () => {
  const stats = [
    { title: "FACULTIES", icon: <FaLandmark className="w-12 h-12" /> },
    { title: "DEPARTMENTS", icon: <RiBuilding2Fill className="w-12 h-12" /> },
    { title: "TEACHERS", icon: <RiPresentationFill className="w-12 h-12" /> },
    { title: "STUDENTS", icon: <FaGraduationCap className="w-12 h-12" /> },
    { title: "OFFICER & STAFF", icon: <FaUserSlash className="w-12 h-12" /> },
  ];

  return (
    <section className="bg-[#004d40] py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-3xl font-bold tracking-wider text-center text-white uppercase md:text-4xl">
          KAU At A Glance
        </h2>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
          {stats.map((item, index) => (
            <div 
              key={index}
              className="relative flex flex-col items-center justify-center h-48 p-6 text-center transition-all duration-300 border rounded-lg cursor-pointer group border-white/30 hover:bg-white hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-4 text-white group-hover:text-[#004d40] transition-colors duration-300">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-white font-semibold text-sm md:text-base tracking-wide group-hover:text-[#004d40] transition-colors duration-300 uppercase">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KauAtAGlanceSection;