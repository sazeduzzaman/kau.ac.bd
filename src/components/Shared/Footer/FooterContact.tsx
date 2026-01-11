import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const FooterContact = (siteData: any) => {
  const footerDescription = siteData.SiteData.footer_description;
  const footerContactData = siteData.SiteData.contact.emails[0]?.email;
  const footerContactData2 = siteData.SiteData.contact.emails[1]?.email;
  const footerContactDataPhone = siteData.SiteData.contact.phones[0]?.phone;
  return (
    <div className="space-y-4 text-sm opacity-90">
      <p className="text-justify">{footerDescription}</p>
      <div className="flex gap-3">
        <FaEnvelope className="mt-1 text-white" />
        <p>
          <strong className="text-md">Mail:</strong> <br />
          {footerContactData} <br />
          {footerContactData2}
        </p>
      </div>
      <div className="flex gap-3">
        <FaPhoneAlt className="mt-1 text-white" />
        <p>
          <strong className="text-md">Phone:</strong> <br />
          {footerContactDataPhone}
        </p>
      </div>
    </div>
  );
};

export default FooterContact;
