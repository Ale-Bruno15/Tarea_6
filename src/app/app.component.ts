import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Toolbox', url: '/toolbox', icon: 'settings' },
    { title: 'Gender', url: '/gender', icon: 'male-female' },
    { title: 'Age', url: '/age', icon: 'accessibility' },
    { title: 'Universities', url: '/universities', icon: 'business' },
    { title: 'Weather', url: '/weather', icon: 'cloud' },
    { title: 'Wordpress', url: '/wordpress', icon: 'document' },
    { title: 'About', url: '/about', icon: 'chatbubbles' }

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
