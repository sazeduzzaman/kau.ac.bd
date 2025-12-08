export interface FooterData {
  footer_description: string;
  footer_links: FooterLink[];
  contact_person: ContactPerson[];
  emails: EmailItem[];
  phone: PhoneItem[];
  addresses: AddressItem[];
  social_links: SocialLink[];
  copyright_text: string;
  developer_text: string;
  developer_link: string;
  website_url: string;
}

export interface FooterLink {
  title: string;
  url: string;
}

export interface ContactPerson {
  name: string;
  designation: string;
  email: string;
  phone: string;
}

export interface EmailItem {
  title: string;
  email: string;
}

export interface PhoneItem {
  title: string;
  phone: string;
}

export interface AddressItem {
  title: string;
  address: string;
}

export interface SocialLink {
  icon_class: string;
  url: string;
}

export interface FooterAPIResponse {
  success: boolean;
  data: FooterData;
}