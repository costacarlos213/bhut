import { IBhutApiProvider } from '../model/IBhutApiProvider';

class BhutApiProvider implements IBhutApiProvider {
  getCars(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  postCars(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { BhutApiProvider };
