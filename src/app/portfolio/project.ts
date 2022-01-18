import {ImageData} from "../speaking/talk";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  dateCreated: string;
  dateUpdated: string;
  commits: number;
  languages: string[];
  platforms: string[];
  libraries: string[];
  image: ImageData;
  availability: {
    buttonLabel: string;
    link: string;
  };
  openSourceLink: string;
  description: string;
  purpose: string;
  challenge: string;
  netlifyBadge: Badge;
  cypressBadge: Badge;
}

export interface Badge {
  imageUrl: string;
  linkUrl: string;
}
