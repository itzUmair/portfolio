export type Project = {
  _id: string;
  name: string;
  description: string;
  techStack: [string];
  url: string;
  repository: string;
  coverImageURL: string;
  demoURL?: string;
  date: Date;
};
