import {ImageData} from "../speaking/talk";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  languages: string[];
  platforms: string[];
  image: ImageData;
  availability: {
    buttonLabel: string;
    link: string;
  };
  openSourceLink: string;
  description: string;
  purpose: string;
  challenge: string;
}
