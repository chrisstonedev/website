import {ImageData} from "../speaking/talk";

export interface Project {
  slug: string;
  name: string;
  platform: string;
  image: ImageData;
  availability: {
    buttonLabel: string;
    link: string;
  };
  openSourceLink: string;
  description: string;
}
