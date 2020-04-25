import { Directive, Input } from '@angular/core';

export class PassValidation {
  pwlength: boolean;
  pwnum: boolean;
  pwlower: boolean;
  pwupper: boolean;
  pwmatch: boolean;
  pwsame: boolean;
}

@Directive({
  selector: '[pass-check]',
  host: {
    '(keyup)': '_onKeyup($event)',
  }
})

export class PassCheckDirective {
  @Input('passNueva') passNueva;
  @Input('passAnterior') passAnterior;
  @Input('passCtrl') passCtrl;

  _onKeyup(e) {
    let pass = e.target.value;
    if (pass != '' && pass != undefined) {
      let validation = new PassValidation();
      validation.pwlength = pass.length >= 8;
      validation.pwnum = this.hasNumber(pass);
      validation.pwlower = this.hasLowerCase(pass);
      validation.pwupper = this.hasUpperCase(pass);
      validation.pwmatch = pass === this.passNueva;
      validation.pwsame = pass != this.passAnterior;

      let errors = {};
      for (let key in validation) {
        let value = validation[key];
        if (value == false) errors[key] = true;
      }

      if (!this.isEmpty(errors))
        this.passCtrl.setErrors(errors);
    }
  }

  private hasLowerCase(str) {
    return (/[a-z]/.test(str));
  }

  private hasUpperCase(str) {
    return (/[A-Z]/.test(str));
  }

  private hasNumber(str) {
    return (/\d/.test(str));
  }

  private isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
}


