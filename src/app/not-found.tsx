import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-white relative">
      <Image
        src="/images/404.gif"
        alt="Full screen animation"
        width={1300}
        height={800}
        objectFit="contain"
        priority
      />
    </div>
  );
};

export default page;
