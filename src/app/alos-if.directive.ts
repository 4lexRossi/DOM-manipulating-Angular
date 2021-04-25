import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[alosIf]',
})
export class AlosIfDirective {

  private embedded: EmbeddedViewRef<any>;

  constructor (private vcRef: ViewContainerRef,
               private template: TemplateRef<any>) {

  }

  @Input('alosIf') set flag(value: boolean) {
    if (value) {
      this.embedded = this.vcRef.createEmbeddedView(this.template);
    } else if (!!this.embedded) {
      this.embedded.destroy();
    }
  }
}
