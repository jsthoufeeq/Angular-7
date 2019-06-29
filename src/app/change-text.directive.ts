import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective implements OnInit {

  @Input() changeText:string;  

  constructor(private e: ElementRef) {
    //e.nativeElement.innerText = 'Welcome to Angular 6 training';
   }

   ngOnInit() { 
    this.e.nativeElement.innerText = `${this.changeText}`;
   }

}
