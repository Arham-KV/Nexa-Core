export type PageId = 'home' | 'about' | 'services' | 'contact';

export type ViewMode = 'website' | 'blueprint' | 'code' | 'readme';

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  deliverables: string[];
  timeline: string;
  badge?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  metric: string;
}

export interface ValuePillar {
  title: string;
  desc: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  timeframe: string;
}

export interface ElementorSectionSpec {
  page: string;
  sectionName: string;
  containerStructure: string;
  widgets: string[];
  spacing: {
    paddingDesktop: string;
    paddingMobile: string;
    gap: string;
  };
  typography: string;
  colors: string;
  responsiveNotes: string;
  animation: string;
}
