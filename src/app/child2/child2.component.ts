import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {
 @Input() d1:any;
 @Input() d2:any;
 @Input() object:any;
@Output()  get = new EventEmitter();
 adduser(value:any){
  this.get.emit(value);
 }


}

