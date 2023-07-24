interface IBhutApiProvider {
  getCars(): Promise<void>;
  postCars(): Promise<void>;
}

export { IBhutApiProvider };
