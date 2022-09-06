﻿modules.component("navs", {
  templateUrl:
    "/mix-app/views/app-portal/components/navigations/navigations.html",
  bindings: {
    prefix: "=",
    detailsUrl: "=",
    key: "=",
    data: "=",
    titleField: "=?",
    titleMaxLength: "=?",
    callback: "&",
  },
  controller: [
    "$scope",
    "$location",
    function ($scope, $location) {
      var ctrl = this;
      ctrl.selected = null;
      ctrl.activedIndex = null;
      ctrl.getTitle = (item) => {
        if (ctrl.titleField) {
          let t = item;
          angular.forEach(ctrl.titleField.split("."), (e) => {
            t = t[e];
          });
          return ctrl.limString(t, ctrl.titleMaxLength || 30);
        } else {
          return ctrl.limString(item.description, ctrl.titleMaxLength || 30);
        }
      };
      ctrl.updateOrders = function (index) {
        ctrl.data.splice(index, 1);
        for (var i = 0; i < ctrl.data.length; i++) {
          ctrl.data[i].priority = i + 1;
        }
      };
      ctrl.dropCallback = function (index, item, external, type) {
        ctrl.logListEvent("dropped at", index, external, type);
        for (var i = 0; i < ctrl.data.length; i++) {
          ctrl.data[i].priority = i + 1;
        }
        // Return false here to cancel drop. Return true if you insert the item yourself.
        return item;
      };
      ctrl.logListEvent = function (action, index, external, type) {
        var message = external ? "External " : "";
        message += type + " element was " + action + " position " + index;
      };
      ctrl.goToDetails = async function (nav) {
        $location.url(ctrl.detailsUrl + nav[ctrl.key]);
      };
      ctrl.limString = function (str, max) {
        if (str) {
          return str.length > max ? str.substring(0, max) + " ..." : str;
        }
      };
    },
  ],
});
