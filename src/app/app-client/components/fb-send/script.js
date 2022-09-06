﻿modules.component("fbSend", {
  templateUrl: "/mix-app/views/app-client/components/fb-send/fb-send.html",
  controller: [
    "$location",
    function ($location) {
      var ctrl = this;
      ctrl.href = ctrl.href || window.top.location.href;
      ctrl.send = function () {
        var link = ctrl.href || window.top.location.href;
        FB.ui(
          {
            method: "send",
            link: link,
          },
          function (response) {}
        );
      };
    },
  ],
  bindings: {
    href: "=",
    appId: "=",
  },
});
