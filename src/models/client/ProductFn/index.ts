export type IProductFn = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export class ProductFn implements IProductFn {
  id: string;
  name: string;
  description: string;
  price: number;
}
