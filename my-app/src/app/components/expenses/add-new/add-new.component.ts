import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(myForm : NgForm){
    console.log(myForm);
  }

}
