export const AppSettings = {
  appTitle: 'SanJuanXar',
  appShortName: 'sanjuanxar',
  defaultCenter: {
    lat: 42.348393,
    lng: - 1.650687
  },
  comoLlegar: 'https://www.google.com/maps/dir/&quot;Current+Location&quot;/{latitud},{longitud}',
  toastDuration: 4000,
  httpConfig: {
    timeout: 60000, // 60seg
    shortTimeout: 5000
  },
  cacheStorage: {
    ttl: 60 * 60 * 24 * 365 // 1 año de expiración
  },
  status: {
    unauthorized: 401,
    forbidden: 403,
    conflict: 409,  // Para gestionar mensajes personalizados desde el servicio web
    notAllowed: 405 // Para evitar peticiones cuando la aplicación está gestinando el cierre automatico
  },
  roles: {},
  preventMaxRequests: 10,
  timeIdle: 600, // 10 mins (seg)
  timeTimeout: 30, // 30 seg
  keepInterval: 2,
  errorInterval: 30000 // 30 segs (ms),
};

