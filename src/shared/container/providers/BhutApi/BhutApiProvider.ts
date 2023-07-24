import { ICar } from '@modules/Car/entities/Car.interface';
import axios, { AxiosInstance } from 'axios';
import { IBhutApiProvider } from './BhutApiProvider.interface';
import { IPostCarDTO } from './dto/PostCarDTO';

class BhutApiProvider implements IBhutApiProvider {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://api-test.bhut.com.br:3000/api',
    });
  }

  async getCars(): Promise<ICar[]> {
    const { data } = await this.api.get<ICar[]>('/cars');

    return data;
  }

  async postCar(car: IPostCarDTO): Promise<ICar> {
    const { data } = await this.api.post<ICar>('/cars', car);

    return data;
  }
}

export { BhutApiProvider };
