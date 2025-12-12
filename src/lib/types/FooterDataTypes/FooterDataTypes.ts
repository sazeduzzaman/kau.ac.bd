// Type for individual footer link
export interface FooterLink {
  title: string;
  url: string;
  order: number;
}

// Type for contact person
export interface ContactPerson {
  name: string;
  designation: string;
  email: string;
  phone: string;
}

// Type for emails
export interface FooterEmail {
  title: string;
  email: string;
}

// Type for phone numbers
export interface FooterPhone {
  title: string;
  phone: string;
}

// Type for addresses
export interface FooterAddress {
  title: string;
  address: string;
}

// Type for social links
export interface SocialLink {
  icon_class: string;
  url: string;
  order: number;
}

// Main Footer type
export interface FooterData {
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

// API Response type
export interface FooterAPIResponse {
  footer_description: string;
  footer_links: FooterLink[];
  contact_person: ContactPerson[];
  emails   : FooterEmail[],
  phone    : FooterPhone[], 
  addresses : FooterAddress[], 
  social_links : SocialLink[],
  copyright_text : string 
  developer_text : string
  developer_link : string
  website_url: string;
  success: boolean;
  data: FooterData;
}
