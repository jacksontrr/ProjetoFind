import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, Platform, ToastController} from '@ionic/angular'; //Importação feita



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
    ) {

    }


  ngOnInit() {}


//##########################################################################################################
//Tela de espera e mensagem de erro

  showToast(mensagem: string) {
    this.toastCtrl
      .create({
        message: mensagem,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }

  async outrapragina() { //Tela de load
    let aguarde = await this.loadingCtrl.create({
      message: 'Aguarde por favor...',
      duration: 900,
    });

    aguarde.present(); //Iniciar a tela de load.
    this.navCtrl.navigateRoot('cadastrar'); //Rota, a string inserido nas aspas será direcionado.
    aguarde.present(); //Encerrar a tela de load.
  }

}
