export class Geographics {
    countries!: Country[];
    states!: State[];
    cities!: City[];
  }
  
  export class Country {
    id!: number;
    name!: string;
    iso2!: string;
  }
  
  export class State {
    id!: number;
    name!: string;
    iso2!: string;
  }
  
  export class City {
    id!: number;
    name!: string;
  }