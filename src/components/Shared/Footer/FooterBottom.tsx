import Link from "next/link";
import React from "react";

const FooterBottom = ({ FooterData }: any) => {
  const footerDeveloperInfo = FooterData;
  return (
    <footer className="w-full py-5 mx-auto overflow-hidden text-center text-white bg-teal-900">
      <Link href={footerDeveloperInfo.website_url}>
        {footerDeveloperInfo.copyright_text}
      </Link>
      <Link href={footerDeveloperInfo.developer_link}>
        <span>Developed by:{footerDeveloperInfo.developer_text}</span>
      </Link>
    </footer>
  );
};

export default FooterBottom;
