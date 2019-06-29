import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Observable } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('changeFormSize', [
      state('initial', style({
        color: 'blue'
      })),
      state('final', style({
        color: 'red'
      })),
      transition('initial => final', animate(2000)),
      transition('final => initial', animate(2000)),
    ])
  ]
})
export class UsersComponent implements OnInit {
  users: Object;
  displayTable: boolean = false;
  hideForm: boolean = true;
  constructor(private data: DataService, private fb: FormBuilder) { }
  model: any = {};
  currentState: string = 'initial';
  myForm: FormGroup;
  onSubmit() {
    this.displayTable = true;
    //this.hideForm = false;
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  submit(val) {
    alert( this.myForm.value);
    console.log( val);
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', ]
    })
    this.data.getUsers().subscribe(data => this.users = data);
  }

}
