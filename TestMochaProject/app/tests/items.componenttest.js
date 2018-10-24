"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_config_1 = require("./test-config");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("nativescript-angular/testing");
var items_component_1 = require("../item/items.component");
var item_service_1 = require("../item/item.service");
var item_detail_component_1 = require("../item/item-detail.component");
require("reflect-metadata");
var app_component_1 = require("../app.component");
describe("Itemlist tests", function () {
    var fixture;
    var component;
    var itemService;
    var itemComponent;
    beforeEach(testing_2.nsTestBedBeforeEach([app_component_1.AppComponent, items_component_1.ItemsComponent, item_detail_component_1.ItemDetailComponent], [item_service_1.ItemService]));
    afterEach(testing_2.nsTestBedAfterEach(false));
    it("First test check Items", testing_1.async(function () {
        testing_2.nsTestBedRender(items_component_1.ItemsComponent)
            .then(function (fixture) {
            var component = fixture.componentRef.instance;
            component.ngOnInit();
            test_config_1.assert.equal(component.items.length, 22);
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50dGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1zLmNvbXBvbmVudHRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2Q0FBcUM7QUFFckMsaURBQXlFO0FBQ3pFLHdEQUF3RztBQUN4RywyREFBdUQ7QUFDdkQscURBQWlEO0FBQ2pELHVFQUFrRTtBQUNsRSw0QkFBMEI7QUFDMUIsa0RBQWdEO0FBRWhELFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUV2QixJQUFJLE9BQXlDLENBQUM7SUFDOUMsSUFBSSxTQUF5QixDQUFDO0lBQzlCLElBQUksV0FBd0IsQ0FBQztJQUM3QixJQUFJLGFBQWEsQ0FBQztJQUVsQixVQUFVLENBQUMsNkJBQW1CLENBQUMsQ0FBQyw0QkFBWSxFQUFDLGdDQUFjLEVBQUMsMkNBQW1CLENBQUMsRUFBQyxDQUFDLDBCQUFXLENBQUMsQ0FBQyxDQUM5RixDQUFDO0lBQ0YsU0FBUyxDQUFDLDRCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFJakMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLGVBQUssQ0FBQztRQUNuQyx5QkFBZSxDQUFDLGdDQUFjLENBQUM7YUFDOUIsSUFBSSxDQUFDLFVBQUMsT0FBeUM7WUFDNUMsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDaEQsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JCLG9CQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNSLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7YXNzZXJ0fSBmcm9tIFwiLi90ZXN0LWNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgYXN5bmMsIFRlc3RCZWQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS90ZXN0aW5nXCI7XHJcbmltcG9ydCB7IG5zVGVzdEJlZEFmdGVyRWFjaCwgbnNUZXN0QmVkQmVmb3JlRWFjaCwgbnNUZXN0QmVkUmVuZGVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3Rlc3RpbmdcIjtcclxuaW1wb3J0IHtJdGVtc0NvbXBvbmVudH0gZnJvbSBcIi4uL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SXRlbVNlcnZpY2V9IGZyb20gXCIuLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQge0l0ZW1EZXRhaWxDb21wb25lbnR9IGZyb20gXCIuLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuLi9hcHAuY29tcG9uZW50XCI7XHJcblxyXG5kZXNjcmliZShcIkl0ZW1saXN0IHRlc3RzXCIsICgpID0+IHtcclxuICAgIFxyXG4gICAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8SXRlbXNDb21wb25lbnQ+O1xyXG4gICAgbGV0IGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQ7XHJcbiAgICBsZXQgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlO1xyXG4gICAgdmFyIGl0ZW1Db21wb25lbnQ7XHJcbiAgICBcclxuICAgIGJlZm9yZUVhY2gobnNUZXN0QmVkQmVmb3JlRWFjaChbQXBwQ29tcG9uZW50LEl0ZW1zQ29tcG9uZW50LEl0ZW1EZXRhaWxDb21wb25lbnRdLFtJdGVtU2VydmljZV0pICAgIFxyXG4gICAgKTtcclxuICAgIGFmdGVyRWFjaChuc1Rlc3RCZWRBZnRlckVhY2goZmFsc2UpKTtcclxuXHJcbiAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIGl0KFwiRmlyc3QgdGVzdCBjaGVjayBJdGVtc1wiLCBhc3luYygoKSA9PiB7XHJcbiAgICAgICAgbnNUZXN0QmVkUmVuZGVyKEl0ZW1zQ29tcG9uZW50KVxyXG4gICAgICAgIC50aGVuKChmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPEl0ZW1zQ29tcG9uZW50PikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBmaXh0dXJlLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuICAgICAgICAgICAgY29tcG9uZW50Lm5nT25Jbml0KCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChjb21wb25lbnQuaXRlbXMubGVuZ3RoLCAyMik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSk7XHJcbn0pOyJdfQ==