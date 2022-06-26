export interface IPrice {
  old: number;
  default: number;
  sale: number;
  withSale: number | null;
  Currency: {
    code: string;
    id: number;
  };
}
