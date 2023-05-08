import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
  attrTesting = "attr testing"
  cssClass1 = false
  multipleClassName1 = "a b c"
  multipleClassName2 = {
    foo: true, bar: true
  }
  multipleClassName3 = ["a", "b", "c"]
  singleStyleColor: string = "green"
  imgSrc: string = "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  imgAlt: string = "img alt";
  buttonDisabled: boolean = true;
  multipleStyle: Partial<CSSStyleDeclaration> = {
    color: "yellow",
    background: "green"
  };
  ngClass1: string = 'ng-class';
  toggleCssClass1(): void {
    this.cssClass1 = !this.cssClass1;
  }

  clickButton(e: MouseEvent): void {
    console.log(e)
    alert("click!")
  }
}
