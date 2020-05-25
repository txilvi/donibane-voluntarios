import { Environment } from './environment.interface';

export const EnvSettings: Environment = {
  realCordova: false,
  realServer: false,
  appType: 'cordova',
  api: 'http://localhost:4000/api',
  vbasepath: '',
  //0.- Off, 1.- JS errors, 2.- Http errors, 3.- All errors
  logLevel: 0,
  version: '',
  cordova: {
    finalBuild: false
  },
  captcha: '6LecWPsUAAAAAGTCY9QLAPn2f7rpxDPxvCPALT5g'
};
