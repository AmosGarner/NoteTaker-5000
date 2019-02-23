import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{
  @Input() label: string = "New Button";
  @Input() classes: string = "p-4 rounded font-bold bg-blue hover:bg-blue-dark hover:text-white";
  
  @Output() action: EventEmitter<any> = new EventEmitter();

  onClick(){
    this.action.emit();
  }
}
