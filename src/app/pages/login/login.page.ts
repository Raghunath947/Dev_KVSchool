import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonfunctionService } from 'src/app/services/commonfunction.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userData: any;
  loginid: string = '';
  password: string = '';
  isLoading = false;
  constructor(
    private auth: AuthService, 
    private CFS: CommonfunctionService, 
    private platform: Platform,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
    ) { 
    
    }

  ngOnInit() {

    let isUserLoggedIn = localStorage.getItem('currentUserId');
    if(isUserLoggedIn){
      this.router.navigateByUrl('/home');
    }
  }

  signIn(){
    this.platform.ready().then(() => {
      if((this.password != '') &&  (this.loginid != '')) {
        console.log('LoginID: ',this.loginid);
        console.log('Password: ',this.password);
        this.isLoading = true;
        this.loadingCtrl
          .create({ keyboardClose: true, message: 'Logging in...' })
          .then(loadingEl => {
            loadingEl.present();
        
    this.auth.loginCustomer(this.loginid,this.password).then((response) => {
      let data=response['data'];
     
      if(data['token']){
        console.log('Returned Token: ',data['token']);
      
        this.auth.getUserData(this.loginid).subscribe((usrData) => {
          this.userData = usrData['data'][0];
          console.log('User Data: ', this.userData);
          let currentUserId = this.userData['unique_id'];
          let access_level = this.userData['access_level'];
          let uid = this.userData['login_id'];
          let name = this.userData['name'];
          let email= this.userData['email_id'];
          let mobile = this.userData['mobile_number'];
          let stuent_class = this.userData['class'];
          let student_name = this.userData['student_name'];
          let section= this.userData['section'];
          let roll_no = this.userData['roll_no'];
          let recieved_email= this.userData['recieved_email'];
          let recieved_sms= this.userData['recieved_sms'];
          let is_class= this.userData['is_class_moderator'];
          let is_section= this.userData['is_section_moderator'];
          let home_number= this.userData['home_number'];
          let register_time= this.userData['registered_at_time'];
          localStorage.setItem('uniqe_id',currentUserId);
          localStorage.setItem('uid',uid);
          localStorage.setItem('access_level',access_level);
          localStorage.setItem('name',name);
          localStorage.setItem('student_name',student_name);
          localStorage.setItem('mobile_number',mobile);
          localStorage.setItem('section',section);
          localStorage.setItem('class',stuent_class);
          localStorage.setItem('roll_no',roll_no);
          localStorage.setItem('email_id',email);
          localStorage.setItem('password',this.password);
          localStorage.setItem('recieved_email',recieved_email);
          localStorage.setItem('recieved_sms',recieved_sms);
          localStorage.setItem('is_class_moderator',is_class);
          localStorage.setItem('is_section_moderator',is_section);
          localStorage.setItem('home_number',home_number);
          localStorage.setItem('registered_at_time',register_time);

          console.log(localStorage.getItem('uid'));
        console.log(localStorage.getItem('access_level'));
        console.log(JSON.stringify(localStorage.getItem('email_id')));

        },  
        (error)=>{
          console.log (error);
          loadingEl.dismiss();
          this.showAlert(error);
        });

        loadingEl.dismiss();
        this.router.navigateByUrl('/home');
      } else {
        loadingEl.dismiss();
      
        let message = 'Could not logged in. Either connection error or you are not recognized by the server. Try again!';
      
        this.showAlert(message);
      } 
    });
  });
      } else {
        this.CFS.presentToast('Please fill up the input fields correctly', true,'bottom',2000);
      }
    });

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