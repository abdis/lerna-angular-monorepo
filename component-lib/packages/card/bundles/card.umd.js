(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('card', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.card = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var CardService = /** @class */ (function () {
        function CardService() {
        }
        return CardService;
    }());
    CardService.ɵfac = function CardService_Factory(t) { return new (t || CardService)(); };
    CardService.ɵprov = i0.ɵɵdefineInjectable({ token: CardService, factory: CardService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CardService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var CardComponent = /** @class */ (function () {
        function CardComponent() {
        }
        CardComponent.prototype.ngOnInit = function () {
        };
        return CardComponent;
    }());
    CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
    CardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CardComponent, selectors: [["lib-card"]], decls: 2, vars: 0, template: function CardComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " card works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CardComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-card',
                        template: "\n    <p>\n      card works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        return CardModule;
    }());
    CardModule.ɵmod = i0.ɵɵdefineNgModule({ type: CardModule });
    CardModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CardModule, { declarations: [CardComponent], exports: [CardComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CardModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [CardComponent],
                        imports: [],
                        exports: [CardComponent]
                    }]
            }], null, null);
    })();

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
//# sourceMappingURL=card.umd.js.map
