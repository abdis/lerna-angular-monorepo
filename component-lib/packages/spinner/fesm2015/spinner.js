import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

class SpinnerService {
    constructor() { }
}
SpinnerService.ɵprov = ɵɵdefineInjectable({ factory: function SpinnerService_Factory() { return new SpinnerService(); }, token: SpinnerService, providedIn: "root" });
SpinnerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SpinnerService.ctorParameters = () => [];

class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-spinner',
                template: `
    <p>
      spinner works!
    </p>
  `
            },] }
];
SpinnerComponent.ctorParameters = () => [];

class SpinnerModule {
}
SpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SpinnerComponent],
                imports: [],
                exports: [SpinnerComponent]
            },] }
];

/*
 * Public API Surface of spinner
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SpinnerComponent, SpinnerModule, SpinnerService };
//# sourceMappingURL=spinner.js.map
