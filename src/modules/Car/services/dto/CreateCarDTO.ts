interface ICreateCarDTO {
  webhook_url: string;
  title: string;
  brand?: string;
  price?: string;
  age?: number;
}

export { ICreateCarDTO };
