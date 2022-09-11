export interface Talk {
  slug: string;
  title: string;
  subtitle: string;
  conferences: Conference[];
  coverImage: ImageData | null;
  eventPhotos: ImageData[] | null;
  abstract: string;
  promoImage: ImageData | null;
  slidesLink: string;
  codeLink: string;
  codeImage: ImageData | null;
  recording: Recording | null;
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

export interface Recording {
  conference: string;
  thumbnail: ImageData;
  link: string;
}
