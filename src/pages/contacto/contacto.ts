import { Component } from '@angular/core';
import { IonicPage, Loading, NavParams, NavController, LoadingController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { finalize } from 'rxjs/operators';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ICorreosProvider } from '@providers/correos/correos.provider.interface';
import { Correo } from '@providers/correos/correos.model';


@IonicPage()
@Component({
  selector: 'contacto-page',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  formContacto: FormGroup;
  errorMessage: boolean;
  sent: boolean;
  tokenCaptcha: string = '';
 
  private subscriptions: Subscription = new Subscription();
  private loader: Loading = null;
  private esFormularioAyuda: boolean;

  constructor( 
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private navParams: NavParams,
    private correosProvider: ICorreosProvider
  ) {}

  ngOnInit() {
    if (this.navParams.data) {
      this.esFormularioAyuda = this.navParams.get('esFormularioAyuda');
    }
    this.formContacto = this.formBuilder.group({
      nombre: [null, Validators.compose([Validators.required])],
      telefono: [null, Validators.compose([Validators.maxLength(9), Validators.required])],
      email: [null, Validators.compose([])],
      direccion: [null, Validators.compose([Validators.required])],
      quenecesitas: [null, Validators.compose([])],
      recaptchaReactive: [null, Validators.compose([Validators.required])]
    });
  }

  enviar() {
    this.showLoading();
    let correo = new Correo(this.formContacto.value.nombre, this.formContacto.value.telefono, this.formContacto.value.email, this.formContacto.value.direccion, this.formContacto.value.recaptchaReactive, this.formContacto.value.quenecesitas);
    if (this.esFormularioAyuda) {
      correo.tipoSolicitud = 'SOLICITUD DE AYUDA';
    }
    else {
      correo.tipoSolicitud = 'SOLICITUD DE NUEVO VOLUNTARIO';
    }
    this.correosProvider.mandarCorreo(correo)
    .pipe(finalize(() => {
      if (this.loader) this.loader.dismiss();
    }))
    .subscribe((res: any) => {
      if (res.success == true) {
        console.log('Ok');
        this.sent = true;
        this.errorMessage = false;
      }
      else {
        this.errorMessage = true;
        this.sent = false;
      }
    });
  }

  llamar() {
    window.location.href = 'tel:+34607343254';
  }

  escribir() {
    window.location.href = 'mailto:donibane.voluntarios.sanjuan@gmail.com';
  }

  salir() {
    this.navCtrl.goToRoot({});
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onCaptchaSubmit(captchaResponse: string) {
    this.tokenCaptcha = captchaResponse;
  }

  private showLoading(tiempo: number = null) {
    this.loader = this.loadingCtrl.create({ duration: tiempo });
    this.loader.present();
  }
}

