export interface Environment {
  realCordova: boolean;
  realServer: boolean;
  appType: string;
  api: string;
  vbasepath: string;
  logLevel: number;
  version: string;
  cordova: CordovaEnvSettings;
  firebaseConfig: {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
  };
}

export interface CordovaEnvSettings {
  finalBuild: boolean;
}
