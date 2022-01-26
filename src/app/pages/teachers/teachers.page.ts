import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonfunctionService } from 'src/app/services/commonfunction.service';
import { IonSearchbar, Platform } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { Router } from '@angular/router';
import {SearchPipe} from '../../search.pipe';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss'],
})
export class TeachersPage implements OnInit {
  @ViewChild('search',{static:false}) search: IonSearchbar;
   teacherData: Array<object>=[];
   uid:string;
   term:string='';
   private searchItem:any;
   access_level:string;
  constructor(private storage: Storage, private auth: AuthService, 
    private CFS: CommonfunctionService, 
    private platform: Platform) {
      this.uid=localStorage.getItem('uid');
    
      this.access_level=localStorage.getItem('access_level');
      
     // if(this.teacherData==null || this.teacherData.length==0|| this.teacherData==undefined){
      
          this.auth.getTeacherLists(this.uid,this.access_level).subscribe((tData) => {
          this.teacherData = tData['data'];
          this.searchItem=this.teacherData['data'];
          console.log('Teacher Data: ', this.teacherData);
        
      
         // localStorage.setItem('teacherData',this.teacherData);
        
  
          });

     }

  ngOnInit() {
  
      
    }
    ionViewDidEnter(){
      setTimeout(() =>{
        this.search.setFocus();
      });
    }
    _ionChange(event){
      const val=event.target.value;
      this.searchItem=this.teacherData['data'];
      
      if(val && val.trim() !=''){
        this.searchItem=this.searchItem.filter((item:any) =>{
          return (item.name.toLowerCase().indexOf(val.toLowerCase()>-1));
        });
        console.log(this.searchItem);
      }
    }

}
