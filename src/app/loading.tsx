import Image from "next/image";

export default function Loading() {
  return (
    <div className="loader-overlay">
      <div className="text-center">
        <Image
          src="/images/preloader.gif"
          alt="Loading..."
          width={80}      // adjust as needed
          height={80}     // adjust as needed
          className="mx-auto mb-4"
          priority         // optional: loads image eagerly
        />
        {/* <p className="text-lg font-semibold text-gray-600">লোড হচ্ছে...</p> */}
      </div>
    </div>
  );
}
