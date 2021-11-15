export interface Talk {
  slug: string;
  title: string;
  subtitle: string;
  conferences: Conference[];
  coverImage: ImageData;
  eventPhotos: ImageData[];
  abstract: string;
  promoImage: ImageData;
  slidesLink: string;
  codeLink: string;
  codeImage: ImageData;
}

export interface ImageData {
  path: string;
  alt: string;
}

export interface Conference {
  name: string;
  type: string;
  date: string;
  link: string;
}
