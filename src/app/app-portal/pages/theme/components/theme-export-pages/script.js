﻿app.component("themeExportPages", {
  templateUrl:
    "/mix-app/views/app-portal/pages/theme/components/theme-export-pages/view.html",
  controller: [
    "$rootScope",
    "$scope",
    "ngAppSettings",
    function ($rootScope, $scope) {
      var ctrl = this;
      ctrl.updatePageExport = function (value, isSelected) {
        // Filter actived page
        var idx = (ctrl.selectedExport.pages = angular.copy(
          $rootScope.filterArray(ctrl.exportData.pages, ["isActived"], [true])
        ));

        // // Loop actived page
        // angular.forEach(ctrl.selectedExport.pages, function (e) {
        //     // filter list actived modules
        //     e.moduleNavs = angular.copy($rootScope.filterArray(e.moduleNavs, ['isActived'], [true]));

        //     // Loop actived modules
        //     angular.forEach(e.moduleNavs, function (n) {
        //         // filter list actived data
        //         n.module.data.items = angular.copy($rootScope.filterArray(n.module.data.items, ['isActived'], [true]));
        //         $rootScope.removeObjectByKey(ctrl.exportData.modules, 'id', n.moduleId);
        //         $rootScope.removeObjectByKey(ctrl.selectedExport.modules, 'id', n.moduleId);
        //     });
        // });
      };
      ctrl.isSelected = function (value) {
        return ctrl.selectedValues.indexOf(value) >= 0;
      };
      ctrl.selectAll = function (arr) {
        ctrl.selectedList.data = [];
        angular.forEach(arr, function (e) {
          e.isActived = ctrl.selectedList.isSelectAll;
          e.isExportData = ctrl.selectedList.isExportData;
        });
        ctrl.updatePageExport();
      };
    },
  ],
  bindings: {
    exportData: "=",
    selectedExport: "=",
  },
});
