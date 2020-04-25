import { Injectable } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';


@Injectable()
export class KeyboardProvider {

  constructor(private keyboard: Keyboard) {
 
  }

  ocultar(){
    this.keyboard.close();
  }

}
