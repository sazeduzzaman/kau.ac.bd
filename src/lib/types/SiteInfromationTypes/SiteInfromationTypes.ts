export interface SettingsResponse {
  success: boolean;
  settings: Settings;
}

export interface Settings {
  website_name: string;
  website_name_bn : string;
  site_title: string;
  site_motto: string;
  footer_description: string;

  branding: Branding;
  contact: Contact;
  seo: SEO;
  social_links: SocialLink[];
  footer_links: FooterLink[];
  business_hours: BusinessDay[];
  developer: Developer;
  custom_settings: string[];
}

export interface Branding {
  site_logo_white: string;
  site_logo_black: string;
  site_favicon: string;
  theme_color: string;
  dark_mode: boolean;
}

export interface Contact {
  emails: ContactEmail[];
  phones: ContactPhone[];
  addresses: ContactAddress[];
  contact_person: ContactPerson[];
}

export interface ContactEmail {
  title: string;
  email: string;
}

export interface ContactPhone {
  title: string;
  phone: string;
}

export interface ContactAddress {
  title: string;
  address: string;
}

export interface ContactPerson {
  name: string;
  designation: string;
  email: string;
  phone: string;
}

export interface SEO {
  site_url: string;
  meta_title: string;
  meta_keyword: string;
  meta_tags: string;
  meta_description: string;
  og_image: string;
  og_title: string;
  og_description: string;
  canonical_url: string;
}

export interface SocialLink {
  icon_class: string;
  url: string;
}

export interface FooterLink {
  title: string;
  url: string;
}

export interface Developer {
  text: string;
  url: string;
}

export interface BusinessDay {
  start: string | null;
  end: string | null;
  closed: "0" | "1"; // string as in your JSON
}
