// Type for each banner
export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  button_text: string;
  button_url: string;
  image_url: string | null;
  position: number;
}

// Type for each VC message
export interface VCMessage {
  vc_name: string;
  vc_designation: string;
  vc_image_url: string | null;
  message_title: string;
  message_text: string;
  button_name: string;
  button_url: string;
}

// Type for each explore item
export interface ExploreItem {
  icon: string;
  title: string;
  url: string;
  position: number;
}

// Explore section
export interface ExploreSection {
  section_title: string;
  items: ExploreItem[];
}

// Glance item
export interface GlanceItem {
  icon: string;
  title: string;
  number: string; // even though numeric, your JSON has it as string
  position: number;
}

// Glance section
export interface GlanceSection {
  section_title: string;
  section_subtitle: string;
  items: GlanceItem[];
}

// Faculty section
export interface FacultySection {
  section_title: string;
  section_subtitle: string;
}

// About section
export interface AboutSection {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  experience_badge: string;
  experience_title: string;
  images: string[];
}

// Section config
export interface SectionConfig {
  section_key: string;
  is_active: boolean;
  position: number;
}

// Main API response type
export interface HomePageAPIResponse {
  sections: SectionConfig[];
  banners: Banner[];
  vc_message: VCMessage;
  explore: ExploreSection;
  glance: GlanceSection;
  faculty: FacultySection;
  about: AboutSection;
}
