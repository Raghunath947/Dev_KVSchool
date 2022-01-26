import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonfunctionService } from 'src/app/services/commonfunction.service';
import { IonSearchbar, Platform } from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  viewData: Array<object>=[];
  uid:string;
  type:string;
  Sclass:string='';
  section:string='';
  private searchItem:any;
  access_level:string;
  constructor(private storage: Storage, private auth: AuthService, 
    private CFS: CommonfunctionService, 
    private platform: Platform) { 
     
         

  }

  ngOnInit() {
  }

  getPosts(vtype:string){


    this.uid=localStorage.getItem('uid');
    this.Sclass=localStorage.getItem('class');
    this.section=localStorage.getItem('section');
    this.access_level=localStorage.getItem('access_level');
    
   // if(this.teacherData==null || this.teacherData.length==0|| this.teacherData==undefined){
        let data=null;
        this.viewData=null;
        this.auth.getViewLists(this.uid,this.access_level, this.Sclass, this.section, vtype).subscribe((vData) => {
     
        data= vData['data'];
        this.viewData =data;
        this.searchItem= data['data'];
        console.log('view Data: ', this.viewData);
        console.log('Recieved Data: ', this.searchItem);
        });
     
  }

  getDetails(){
    this.getPosts(this.type);
 
  }

}
