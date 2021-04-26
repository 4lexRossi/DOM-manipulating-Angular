import { Directive, EmbeddedViewRef, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[alosFor]',
})
export class alosForDirective implements OnInit {

  @Input('alosForFrom') list: string[];

  constructor (private vcRef: ViewContainerRef,
               private template: TemplateRef<any>) {

  }
  ngOnInit() {
    this.list.forEach((item ,index) => {
      this.vcRef.createEmbeddedView(this.template, {
        $implicit: item,
        index,
      });
    });
  }
}
