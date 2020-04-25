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
  firebaseConfig: {
    apiKey: 'AIzaSyBE_r5SN5kl-Dvr5DkxGbWWyGG5EC-mm0k',
    authDomain: 'cukisara-795b8.firebaseapp.com',
    databaseURL: 'https://cukisara-795b8.firebaseio.com/ ',
    projectId: 'cukisara-795b8',
    storageBucket: 'gs://cukisara-795b8.appspot.com'
  }
};
