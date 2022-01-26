import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  isLoading=false;
  constructor( private loadingCtrl: LoadingController,private alertCtrl: AlertController,private auth: AuthService) {}

  

  ngOnInit() {
    this.isLoading = true;
        this.loadingCtrl
          .create({ keyboardClose: true, message: 'Logging out...' })
          .then(loadingEl => {
            loadingEl.present();
            loadingEl.dismiss();
           this.logOut();
           
          });
  }
  private logOut(){
    this.auth.customerLogOut();
  }
  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication failed',
        message: message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }

}
