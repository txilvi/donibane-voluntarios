import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';


@Injectable()
export class SocialProvider {

  constructor(private socialSharing: SocialSharing) {
 
  }

  regularShare(msg) {
    this.socialSharing.share('Compartido desde San Juan Xar - ' + msg, null, null, null);
  }

}
