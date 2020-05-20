export interface Environment {
  realCordova: boolean;
  realServer: boolean;
  appType: string;
  api: string;
  vbasepath: string;
  logLevel: number;
  version: string;
  cordova: CordovaEnvSettings;
}

export interface CordovaEnvSettings {
  finalBuild: boolean;
}
