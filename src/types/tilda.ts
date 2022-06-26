export interface ITildaPage {
  id: number;
  externalId: string;
  projectId: string;
  active: boolean;
  title: string;
  descr: string;
  img: string;
  featureimg: string;
  alias: string;
  date: Date;
  sort: number;
  filename: string;
  html: string;
  createdAt: Date;
  updatedAt: Date;
  TildaProject: {
    id: number;
    externalId: string;
    title: string;
    descr: string;
    css: string[];
    js: string[];
    createdAt: Date;
    updatedAt: Date;
  };
}
