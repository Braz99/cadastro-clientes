export default class Client {
  #id?: string | number;
  #name: string;
  #age: number;

  constructor(name: string, age: number, id?: string | number) {
    this.#name = name;
    this.#age = age;
    this.#id = id;
  }

  static empty() {
    return new Client("", 0, 0);
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  get id() {
    return this.#id;
  }
}
