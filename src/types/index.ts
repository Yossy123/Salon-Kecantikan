export type ServiceCategory = "kulit" | "rambut" | "makeup" | "body";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: string;
  brief: string;
  description: string[];
  benefits: string[];
  price: string;
  duration: string;
  suitableFor: string[];
  image: string;
}

export interface StaffMember {
  name: string;
  position: string;
  photo: string;
  bio: string;
}

export interface Doctor {
  slug: string;
  name: string;
  title: string;
  photo: string;
  category: ServiceCategory;
  specialties: string[];
  bio: string[];
  schedule: string;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
}

export interface Promo {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  image: string;
}

export interface Testimonial {
  name: string;
  service: string;
  quote: string;
}

export interface ClinicLocation {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapsEmbedUrl: string;
}