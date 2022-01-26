import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonfunctionService } from 'src/app/services/commonfunction.service';
import { IonSearchbar, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  UIData: Array<object>=[];
  ddCategories:Array<string>=[];
  ddPostVisibility:Array<string>=[];
  category:string;
  subject:string;
  discussion:string;
  visibility:string;
  teachers:string;
  students:string;
  sections:string;
  classes:string;
  division:string;
  smsCheck:boolean=false;
  anonymousCheck:boolean=false;
  uid:string;
  type:string;
  Sclass:string='';
  section:string='';
  private searchItem:any;
  access_level:string;
  isLoading = false;
  constructor(private storage: Storage, private auth: AuthService, 
    private CFS: CommonfunctionService, 
    private platform: Platform,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.getUIData();
  }

  getUIData(){


    this.uid=localStorage.getItem('uid');
    this.Sclass=localStorage.getItem('class');
    this.section=localStorage.getItem('section');
    this.access_level=localStorage.getItem('access_level');
    
 
        let data=null;
        this.UIData=null;
        this.auth.getPostsUI(this.uid,this.access_level).subscribe((vData) => {
     
        data= vData['data'];
        this.UIData =data;
        this.ddCategories= data['categories'];
        this.ddPostVisibility=data['visibility'];
        console.log('UI Data: ', this.UIData);
        console.log('Recieved Data: ', this.ddCategories);
        });
     
  }

  postDiscussion(){


    this.uid=localStorage.getItem('uid');
    this.Sclass=localStorage.getItem('class');
    this.section=localStorage.getItem('section');
    this.access_level=localStorage.getItem('access_level');
    let sms=0, anms=0;
    if(this.smsCheck==true){
      sms=1;
    }
    if(this.anonymousCheck==true){
      anms=1;
    }
    let msgValid=this.checkValidation();
     if(msgValid=="valid"){
 
        let data=null;
        this.UIData=null;
        this.isLoading = true;
        this.loadingCtrl
          .create({ keyboardClose: true, message: 'Sending...' })
          .then(loadingEl => {
            loadingEl.present();
        this.auth.sendPosts(this.uid, this.access_level, this.classes, this.sections,this.division, this.category, this.subject,this.visibility,this.discussion,this.teachers,this.students,sms,anms).subscribe((vData) => {
     
        data= vData['data'];
       // this.UIData =data;
    
        console.log('Recieved Data: ', data);

        loadingEl.dismiss();
        this.subject='';
        this.discussion='';
        this.smsCheck=false;
        this.anonymousCheck=false;
        let message = 'Discussion posted successfully!';
        this.showAlert(message);

        },
        (error)=>{
          console.log (error);
          loadingEl.dismiss();
          this.showAlert(error);
        });
      });
    }
   else{
     this.showAlertValidation(msgValid);
   }
  }
  loadFromDevice(event) {

    const file = event.target.files[0];
  
    const reader = new FileReader();
  
    reader.readAsArrayBuffer(file);
  
    reader.onload = () => {
  
      // get the blob of the image:
      let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
  
      // create blobURL, such that we could use it in an image element:
      let blobURL: string = URL.createObjectURL(blob);
  
    };
  
    reader.onerror = (error) => {
  
      //handle errors
  
    };
  };
  private checkValidation(){
    if(this.category=="" || this.category==null)
    {
      return "Please select the category!";
    }
    if(this.subject=="" || this.subject==null)
    {
      return "Please write down the Subject!";
    }
    if(this.discussion=="" || this.discussion==null)
    {
      return "Please write down the Description!";
    }
    if(this.visibility=="" || this.visibility==null)
    {
      return "Please select the Post Visibility!";
    }
    if(this.access_level=="0"){
      //Parent visibility check
    if(this.visibility=="2")
    {
      if(this.teachers=="" || this.teachers==null)
    {
      return "Please select the teacher(s)/SR!";
    }
    }
    else if(this.visibility=="4")
    {
      if(this.sections=="" || this.sections==null)
    {
      return "Please select the section(s)!";
    }
    }

    }
    else{

      
      if(this.visibility=="2")
      {
        if(this.division=="" || this.division==null)
      {
        return "Please select the division(s)!";
      }
      }
      if(this.visibility=="3")
      {
        if(this.classes=="" || this.classes==null)
      {
        return "Please select the Class(es)!";
      }
      }
      else if(this.visibility=="4" || this.visibility=="7")
      {
        if(this.classes=="" || this.classes==null)
        {
          return "Please select the Class!";
        }
        if(this.sections=="" || this.sections==null)
      {
        return "Please select the section!";
      }
      }
      if(this.visibility=="5")
      {
        if(this.teachers=="" || this.teachers==null)
      {
        return "Please select the teacher(s)!";
      }
      }

      if(this.visibility=="8")
      {
        if(this.classes=="" || this.classes==null)
      {
        return "Please select the Class!";
      }
      }

      if(this.visibility=="9")
      {
        if(this.division=="" || this.division==null)
      {
        return "Please select the division!";
      }
      }

    }

    return "valid";
  }
  private showAlertValidation(message: string) {
    this.alertCtrl
      .create({
        header: 'Validation Error!',
        message: message,
        buttons: [{
          text: 'Ok',
          handler: () => {
            // user has clicked the alert button
            //this.router.navigateByUrl('/post');
            return true;
          }
        }]
      })
      .then(alertEl => alertEl.present());
  };
  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Status',
        message: message,
        buttons: [{
          text: 'Ok',
          handler: () => {
            // user has clicked the alert button
            this.router.navigateByUrl('/home');
            return true;
          }
        }]
      })
      .then(alertEl => alertEl.present());
  }

}
