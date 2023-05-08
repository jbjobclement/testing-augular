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
  multipleStyle: Partial<CSSStyleDeclaration> = {
    color: "yellow",
    background: "green"
  };
  toggleCssClass1(): void {
    this.cssClass1 = !this.cssClass1;
  }
}
