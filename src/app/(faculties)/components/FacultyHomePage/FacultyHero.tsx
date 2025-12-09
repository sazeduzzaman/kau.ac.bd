import Image from "next/image";
import React from "react";

const FacultyHero = () => {
  return (
    <div className="relative container mx-auto h-[40vh] md:h-[50vh] lg:h-[60vh] mt-5">
      <Image
        src="/images/vabs-img.jpg"
        alt="Faculty Hero"
        fill
        className="rounded-lg"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default FacultyHero;
