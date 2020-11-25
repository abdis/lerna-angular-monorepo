import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

class CardService {
    constructor() { }
}
CardService.ɵprov = ɵɵdefineInjectable({ factory: function CardService_Factory() { return new CardService(); }, token: CardService, providedIn: "root" });
CardService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CardService.ctorParameters = () => [];

class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-card',
                template: `
    <p>
      card works!
    </p>
  `
            },] }
];
CardComponent.ctorParameters = () => [];

class CardModule {
}
CardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CardComponent],
                imports: [],
                exports: [CardComponent]
            },] }
];

/*
 * Public API Surface of card
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardComponent, CardModule, CardService };
//# sourceMappingURL=card.js.map
