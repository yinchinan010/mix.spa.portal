﻿app.component("themeExportModules", {
  templateUrl:
    "/mix-app/views/app-portal/pages/theme/components/theme-export-modules/view.html",
  controller: [
    "$rootScope",
    "$scope",
    "ngAppSettings",
    function ($rootScope, $scope) {
      var ctrl = this;
      ctrl.updateModuleExport = function () {
        ctrl.selectedExport.modules = angular.copy(
          $rootScope.filterArray(ctrl.exportData.modules, ["isActived"], [true])
        );
        // angular.forEach(ctrl.selectedExport.modules,function(e){
        //     e.data.items = angular.copy($rootScope.filterArray(e.data.items, ['isActived'], [true]));
        // });
      };
      ctrl.selectAll = function (arr) {
        ctrl.selectedList.data = [];
        angular.forEach(arr, function (e) {
          e.isActived = ctrl.selectedList.isSelectAll;
          e.isExportData = ctrl.selectedList.isExportData;
        });
        ctrl.updateModuleExport();
      };
    },
  ],
  bindings: {
    exportData: "=",
    selectedExport: "=",
  },
});
