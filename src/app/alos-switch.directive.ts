import { Directive, DoCheck, Host, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[alosSwitch]',
})
export class alosSwitchDirective {

  @Input('alosSwitch') switchState: any;

}

@Directive({
  selector: '[alosSwitchCase]',
})
export class alosSwitchCaseDirective implements DoCheck {

  @Input('alosSwitchCase') caseValue: any;

  constructor(@Host() private alosSwitch: alosSwitchDirective,
              private vcRef: ViewContainerRef,
              private template: TemplateRef<any>) {

  }

  ngDoCheck() {
    if (this.alosSwitch.switchState === this.caseValue) {
      this.vcRef.createEmbeddedView(this.template);
    } else {
      this.vcRef.clear();
    }
  }
}
