import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 @Input() public fromparent:any;
@Output() public childdata= new EventEmitter();
constructor(){}
ngOnInit(): void {
}
show(){
  this.childdata.emit("from child");
}
}
