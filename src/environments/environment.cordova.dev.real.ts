import { Environment } from './environment.interface';

export const EnvSettings: Environment = {
  realCordova: false,
  realServer: true,
  appType: 'cordova',
  api: '',
  vbasepath: '',
  //0.- Off, 1.- JS errors, 2.- Http errors, 3.- All errors
  logLevel: 3,
  version: '',
  cordova: {
    finalBuild: false
  },
  captcha: '6LecWPsUAAAAAGTCY9QLAPn2f7rpxDPxvCPALT5g'
};
