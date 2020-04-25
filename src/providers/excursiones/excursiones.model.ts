export class Excursion {
  name: string;
  point: Point;
  extendedData: ExtendedData;
  distanciaUsuario: number;
}

export class Point {
  coordinates: string;
}

export class ExtendedData {
  data: Data[];
}

export class Data {
  name: string;
  value: string;
}
