"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TableRootComponent = (function () {
    function TableRootComponent(elm) {
        this.headerColumn1 = elm.nativeElement.getAttribute('headerColumn1');
        this.headerColumn2 = elm.nativeElement.getAttribute('headerColumn2');
        this.headerColumn3 = elm.nativeElement.getAttribute('headerColumn3');
    }
    TableRootComponent.prototype.ngOnInit = function () {
        this.headerCol1 = this.headerColumn1;
        this.headerCol2 = this.headerColumn2;
        this.headerCol3 = this.headerColumn3;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TableRootComponent.prototype, "headerColumn1", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TableRootComponent.prototype, "headerColumn2", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TableRootComponent.prototype, "headerColumn3", void 0);
    TableRootComponent = __decorate([
        core_1.Component({
            selector: 'table-root',
            templateUrl: 'html-template/table.component.html',
            styleUrls: ['node_modules/bootstrap/dist/css/bootstrap.css'],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TableRootComponent);
    return TableRootComponent;
}());
exports.TableRootComponent = TableRootComponent;
//# sourceMappingURL=table.root.component.js.map