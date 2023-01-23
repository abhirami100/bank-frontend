import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {

  @Input()  item:undefined
  @Output() onCancel = new EventEmitter()

  @Output() onDelete =new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.onDelete.emit(this.item)
  }
  cancel(){
    this.onCancel.emit()

  }
  

}
