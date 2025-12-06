export interface SettingsResponse {
  success: boolean;
  settings: Settings;
}

export interface Settings {
  website_name: string;
  site_title: string;
  site_motto: string;
  footer_description: string;
  branding: Branding;
  contact: Contact;
  seo: SEO;
  social_links: SocialLinks;
  business_hours: BusinessHours;
  custom_settings: CustomSettings;
}

export interface Branding {
  logo_white: string;
  logo_black: string;
  favicon: string;
  theme_color: string;
  dark_mode: boolean;
}

export interface Contact {
  primary_email: string;
  info_email: string;
  primary_phone: string;
  addresses: Addresses;
}

export interface Addresses {
  temporary_campus: LocalizedAddress;
}

export interface LocalizedAddress {
  en: string;
  bn: string;
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
}

export interface SocialLinks {
  facebook: string | null;
  youtube: string | null;
  linkedin: string | null;
  twitter: string | null;
  instagram: string | null;
  pinterest: string | null;
  reddit: string | null;
  tumblr: string | null;
  tiktok: string | null;
  whatsapp: string | null;
}

export interface BusinessHours {
  saturday: BusinessDay;
  sunday: BusinessDay;
  monday: BusinessDay;
  tuesday: BusinessDay;
  wednesday: BusinessDay;
  thursday: BusinessDay;
  friday: BusinessDay;
}

export interface BusinessDay {
  start?: string;
  end?: string;
  closed: boolean;
}

export interface CustomSettings {
  homepage_slider_enabled: boolean;
  max_upload_file_size_mb: number;
  enable_notice_search: boolean;
}

export interface SiteSettingsResponse {
  success: boolean;
  settings: SiteSettings;
}

export interface SiteSettings {
  website_name: string;
  site_title: string;
  site_motto: string;
  footer_description: string;

  branding: {
    logo_white: string;
    logo_black: string;
    favicon: string;
    theme_color: string;
    dark_mode: boolean;
  };

  contact: {
    primary_email: string;
    info_email: string;
    primary_phone: string;
    addresses: {
      temporary_campus: {
        en: string;
        bn: string;
      };
    };
  };

  seo: {
    site_url: string;
    meta_title: string;
    meta_keyword: string;
    meta_tags: string;
    meta_description: string;
    og_image: string;
    og_title: string;
    og_description: string;
  };

  social_links: {
    facebook: string | null;
    youtube: string | null;
    linkedin: string | null;
    twitter: string | null;
    instagram: string | null;
    pinterest: string | null;
    reddit: string | null;
    tumblr: string | null;
    tiktok: string | null;
    whatsapp: string | null;
  };

  business_hours: any; // simplify for now
  custom_settings: any;
}
