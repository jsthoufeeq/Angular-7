import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDummy]'
})
export class DummyDirective implements OnInit{
  @Input() changeText: string;
  constructor(private e: ElementRef) { }
  ngOnInit() {
    this.e.nativeElement.innerText = `${this.changeText}`
  }
}
