import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;
  userData:any;
  teacherData:any;
  apiURL: string = '';
  siteURL: string = 'http://www.cfdvs.iitb.ac.in/tempuser/kvschool/kvschool_dev_shadow/Android/api_all.php?';
  woocomPart: string = '/wp-json/wc/v3/';
  jwtPart: string = '/wp-json/jwt-auth/v1/token';
  consumerKey: string = 'ck_56a47e58bf9045f99e0df42dd321c09049752781';
  consumerSecret: string = 'cs_b8a4fe3ab410912dd93b34aafa5197a19aa7372a';

  constructor(private http: HttpClient, private router: Router ) { }

  registerCustomer(email, username, password){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let credentials = `uid=${username}&email=${email}&password=${password}`;
    this.apiURL = `${this.siteURL}${this.woocomPart}customers?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
    console.log('API URL for register a customer: ', this.apiURL);

    return new Promise ((resolve) => {
      this.http.post(this.apiURL, credentials, {headers}).subscribe((successResp) => {
          resolve(successResp);
      },
      (errorResp) => {
        resolve(errorResp);
      }
      )
    });
  }


  loginCustomer(uid, password){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let credentials = `uid=${uid}&password=${password}`;
    this.apiURL = `${this.siteURL}${credentials}`;
    console.log('API URL for login a customer: ', this.apiURL);

    return new Promise ((resolve) => {
      this.http.get(this.apiURL).subscribe((successResp) => {
          resolve(successResp);
          console.log(successResp);
          this.isUserLoggedIn = true;
      },
      (errorResp) => {
        resolve(errorResp);
        console.log(errorResp);
      }
      )
    });
  }

  getUserData(uid){
    let getapiURL = 'http://www.cfdvs.iitb.ac.in/tempuser/kvschool/kvschool_dev_shadow/Android/api_user.php?';
    let credentials = `uid=${uid}`;
    this.apiURL = `${getapiURL}${credentials}`;
    console.log('API url for retrive customer: ', this.apiURL);
    this.userData = this.http.get(this.apiURL); 
    return this.userData;
  }


  getTeacherLists(uid, access_level){
    let teacherapiURL = 'http://www.cfdvs.iitb.ac.in/tempuser/kvschool/kvschool_dev_shadow/Android/android_teachers.php?';
    let credentials = `uid=${uid}&access_level=${access_level}`;
    this.apiURL = `${teacherapiURL}${credentials}`;
    console.log('API url for retrive customer: ', this.apiURL);
    this.teacherData = this.http.get(this.apiURL); 
    return this.teacherData;
  }

  editProfileToken(npassword){

   /* localStorage.getItem('uniqe_id');
          localStorage.getItem('uid');
          localStorage.getItem('access_level');
          localStorage.getItem('name');
          localStorage.getItem('student_name');
          localStorage.getItem('mobile_number');
          localStorage.getItem('section');
          localStorage.getItem('class');
          localStorage.getItem('roll_no');
          localStorage.getItem('email_id');
         // localStorage.getItem('password',this.password);
          localStorage.getItem('recieved_email');
          localStorage.getItem('recieved_sms');
         // localStorage.getItem('is_class_moderator',is_class);
         // localStorage.getItem('is_section_moderator',is_section);
          localStorage.getItem('home_number');
         // localStorage.getItem('registered_at_time',register_time);

         // console.log(localStorage.getItem('uid'));*/
     
   let parentName = localStorage.getItem('name');
  let  studentName : string=localStorage.getItem('student_name');
   let sclass : string=localStorage.getItem('class');
   let section : string=localStorage.getItem('section');
    let studentRollNo : string=  localStorage.getItem('roll_no');
    let uniqueId : string=localStorage.getItem('uniqe_id');
    let emailAddress : string= localStorage.getItem('email_id');
    let emailAddress2 : string='';
    let homePhone : string=localStorage.getItem('home_number');
    let mobileNumber : string=localStorage.getItem('mobile_number');
    let mobileNumber2 : string='';
    let loginId : string=localStorage.getItem('uid');
   let password : string= npassword;
    //password : string=
    //$recvEmail = localStorage.getItem('recieved_email');
   // $recvSms =  localStorage.getItem('recieved_sms');

   let editpapiURL = 'http://www.cfdvs.iitb.ac.in/tempuser/kvschool/kvschool_dev_shadow/Android/editProfile.php?';
   let xcredentials1 = 'parentName=${parentName}$studentName=${studentName}$class=${sclass}$section=${section}$studentRollNo=${studentRollNo}';
   let xcredentials2 ='uniqueId=&{uniqueId}$emailAddress=${emailAddress}$emailAddress2=&{emailAddress2}$homePhone=${homePhone}';
   let xcredentials3='mobileNumber=${ mobileNumber}$mobileNumber2=${ mobileNumber2}$loginId=${loginId}$password=${password}';
 
    
    
    let eapiURL = `{editpapiURL}${xcredentials1}${xcredentials2}${xcredentials3}`;
    console.log('API url for retrive user: ', eapiURL);
    let editData = this.http.get(eapiURL); 
    console.log('Data for retrive user: ', editData);
    return editData;
  }


  customerLogOut(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  get isUserAuthenticated (){
    let currentUserId = localStorage.getItem('currentUserId');
    if(currentUserId){
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
    return this.isUserLoggedIn;   
  }
}
