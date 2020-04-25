import { HttpClient, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';


// HttpClient is declared in a re-exported module, so we have to extend the original module to make it work properly
// (see https://github.com/Microsoft/TypeScript/issues/13897)
declare module '@angular/common/http/src/client' {

  // Augment HttpClient with the configuration methods from HttpService for convenience,
  // allowing to inject HttpService in place of HttpClient and still use the extension methods
  interface HttpClient {
    config(configuration?: HttpServiceMetadata): HttpClient;
  }
}

export interface HttpServiceMetadata {
  cache?: boolean;
  jsonSchema?: string;
  responseType?: 'arraybuffer' | 'blob' | 'text';
}

export interface HttpServiceHandler {
  handle(req: HttpRequest<any>, metadata: Partial<HttpServiceMetadata>): any;
}

export interface HttpServiceInterceptor {
  intercept(req: HttpRequest<any>, metadata: Partial<HttpServiceMetadata>, next: HttpServiceHandler): any;
}

/**
 * Allow to override default interceptors that can be disabled with the HttpService extension.
 * Except for very specific needs, you should better configure these interceptors directly in the constructor below
 * for better readability.
 */
export const HTTP_DYNAMIC_INTERCEPTORS = new InjectionToken<HttpInterceptor>('HTTP_DYNAMIC_INTERCEPTORS');


/**
 * Provides a base for HTTP client extension.
 * The default extension adds support for API prefixing, request caching and default error handler.
 */
@Injectable()
export class HttpService {

  private handler: HttpServiceHandler;

  constructor(httpHandler: HttpHandler, @Optional() @Inject(HTTP_DYNAMIC_INTERCEPTORS) interceptors: HttpServiceInterceptor[] | null) {
    let handler: HttpServiceHandler = {
      handle: (req, _metadata) => httpHandler.handle(req)
    };
    if (interceptors) {
      handler = interceptors.reduceRight((next, interceptor) => ({
        handle: (req: any, metadata: any) => interceptor.intercept(req, metadata, next)
      }), handler);
    }
    this.handler = handler;
  }

  config(metadata: Partial<HttpServiceMetadata> = { cache: false, jsonSchema: null }): HttpClient {
    return new HttpClient({
      handle: req => this.handler.handle(req, metadata)
    });
  }

}
