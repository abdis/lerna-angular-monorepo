(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('component-lib-card', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['component-lib-card'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var CardService = /** @class */ (function () {
        function CardService() {
        }
        return CardService;
    }());
    CardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CardService_Factory() { return new CardService(); }, token: CardService, providedIn: "root" });
    CardService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    CardService.ctorParameters = function () { return []; };

    var CardComponent = /** @class */ (function () {
        function CardComponent() {
        }
        CardComponent.prototype.ngOnInit = function () {
        };
        return CardComponent;
    }());
    CardComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-card',
                    template: "\n    <p>\n      card works!\n    </p>\n  "
                },] }
    ];
    CardComponent.ctorParameters = function () { return []; };

    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        return CardModule;
    }());
    CardModule.decorators = [
        { type: i0.NgModule, args: [{
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

    exports.CardComponent = CardComponent;
    exports.CardModule = CardModule;
    exports.CardService = CardService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=component-lib-card.umd.js.map
