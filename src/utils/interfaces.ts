export interface IChildren {
  children: React.ReactNode;
}

export interface IProduct {
  name: string;
  shortDescription: string;
  id: string;
  images: IImage[]
  category: {
    _id: string;
    name: string;
  }
}

export interface IImage {
  alt: string;
  asset: {
    url: string;
  }
}