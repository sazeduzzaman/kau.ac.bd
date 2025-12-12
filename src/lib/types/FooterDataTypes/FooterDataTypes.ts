// Type for individual footer link
interface FooterLink {
  title: string;
  url: string;
  order: number;
}

// Type for contact person
interface ContactPerson {
  name: string;
  designation: string;
  email: string;
  phone: string;
}

// Type for emails
interface FooterEmail {
  title: string;
  email: string;
}

// Type for phone numbers
interface FooterPhone {
  title: string;
  phone: string;
}

// Type for addresses
interface FooterAddress {
  title: string;
  address: string;
}

// Type for social links
interface SocialLink {
  icon_class: string;
  url: string;
  order: number;
}

// Main Footer type
interface FooterData {
  footer_description: string;
  footer_links: FooterLink[];
  contact_person: ContactPerson[];
  emails: FooterEmail[];
  phone: FooterPhone[];
  addresses: FooterAddress[];
  social_links: SocialLink[];
  copyright_text: string;
  developer_text: string;
  developer_link: string;
  website_url: string;
}
