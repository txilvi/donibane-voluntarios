import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as Ajv from 'ajv'; 

@Injectable()
export class HttpSchemaService {
  private ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

  constructor() { }

  validate(schema: any, data: HttpResponse<any>): string{
    let valid = this.ajv.validate(schema, data);
    if (!valid)
      return this.ajv.errorsText();

    return '';
  }

  addSchema(name: string, schema: any) {
    this.ajv.addSchema(schema, name);
  }
}
