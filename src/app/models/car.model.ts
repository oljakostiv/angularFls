export interface CarModel {
  id: number;
  model: string;
  price: number;
  year: number;
}

export interface CarFullModel {
  links: LinksModel;
  count: number;
  data: CarModel[];
}

export interface LinksModel {
  prev: string;
  next: string;
}
