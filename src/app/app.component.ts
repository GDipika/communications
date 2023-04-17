import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'communications';
  public message="please read the message"

  data="this shows the required data"
  data1=[1,2,3,4];

  users=['ada','asd']

  adduser(user:any){
    this.users.push(user)
  }
  user={
    name1:'deepu',
    age:23,
    country:"India"
  }
}
