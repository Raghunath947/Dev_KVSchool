import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public search:any='';
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    //{ title: 'Login', url: '/login', icon: 'log-in' },
    //{ title: 'Sign Up', url: '/register', icon: 'add-circle' },
    { title: 'List of teachers', url: '/teachers', icon: 'list' },
    { title: 'View Discussion', url: '/view', icon: 'eye' },
    { title: 'Post Discussion', url: '/post', icon: 'create' },
    { title: 'Edit Profile', url: '/edit', icon: 'apps' },
    { title: 'Logout', url: '/logout', icon: 'log-out' },
  ];
 
  constructor() {}
}
