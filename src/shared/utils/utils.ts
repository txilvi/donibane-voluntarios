export class Utils {

  static roundNumber(numero: number) {
    return Math.round(numero * 100) / 100;
  }

  static htmlDecode(input){
    let e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  }

  static getFechaActual(): number{
    return new Date().getTime();
  }
}
