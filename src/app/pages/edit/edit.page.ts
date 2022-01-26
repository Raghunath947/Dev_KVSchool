import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonfunctionService } from 'src/app/services/commonfunction.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  username: string =localStorage.getItem('name');
  Sname:string =localStorage.getItem('student_name');
  Sclass:string=localStorage.getItem('class');
  Section:string =localStorage.getItem('section');
  roll_num:string =localStorage.getItem('roll_no');
  email: string = localStorage.getItem('email_id');
  mobile: string=localStorage.getItem('mobile_number');
  password: string = '';
  repassword: string = '';
  

    constructor(
      private auth: AuthService, 
      private CFS: CommonfunctionService, 
      private router: Router,
      private platform: Platform,
      private alertCtrl: AlertController
      ) { }
    
    ngOnInit() {
  
    }
  
    editProfile(){
      this.platform.ready().then(() => {
        if((this.username != '') && 
        (this.password != '') && 
        (this.repassword != '') && 
        (this.password == this.repassword) && 
        (this.CFS.validateEmail(this.email))) {
          console.log('Username: ',this.username);
          console.log('Email: ',this.email);
          console.log('Password: ',this.password);
  
          this.auth.editProfile(this.password).subscribe((usrData) => {
            let userData = usrData['data'][0];
            console.log('User Data: ', userData);

            localStorage.setItem('name',this.username);
            //localStorage.setItem('student_name',student_name);
            localStorage.setItem('mobile_number',this.mobile);
            //localStorage.setItem('section',section);
           // localStorage.setItem('class',stuent_class);
            //localStorage.setItem('roll_no',roll_no);
            localStorage.setItem('email_id',this.email);
            localStorage.setItem('password',this.password);
            

            this.showAlert('Profile has been updated successfully!');
            //this.password='';
           // this.repassword='';

            
      });
        } else {
          this.CFS.presentToast('Please fill up the forms correctly', true,'bottom',2000);
        }
      });
  
    }


    private showAlert(message: string) {
      this.alertCtrl
        .create({
          header: 'Success!',
          message: message,
          buttons: [ {
            text: 'OK',
            handler: () => {
              this.router.navigateByUrl('/home');
            }
          }]
        })
        .then(alertEl => {
          alertEl.present();
          
        });
    }
  

}
