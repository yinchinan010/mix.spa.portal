﻿sharedComponents.component("youtubeEditor", {
  templateUrl:
    "/mix-app/views/app-shared/components/youtube-editor/youtube-editor.html",
  controller: [
    "$rootScope",
    "$scope",
    "$sce",
    function ($rootScope, $scope, $sce) {
      var ctrl = this;
      ctrl.isPlay = false;
      ctrl.loadVideo = function () {
        ctrl.isPlay = false;
        ctrl.src = "";
        if (ctrl.code) {
          ctrl.img =
            "https://img.youtube.com/vi/" + ctrl.code + "/sddefault.jpg";
        }
      };
      ctrl.playVideo = function () {
        ctrl.isPlay = true;
        ctrl.src = $sce.trustAsResourceUrl(
          "https://www.youtube.com/embed/" +
            ctrl.code +
            "?rel=0&showinfo=0&autoplay=1"
        );
      };
      ctrl.searchVideo = function () {
        // search
        $rootScope.preview(
          "message",
          "ToDo: Integrate youtube search (https://developers.google.com/youtube/v3/docs/search/list) \r\n PATH: portal-app/app/app-shared/components/youtube-editor/youtube-editor.js"
        );
      };
    },
  ],
  bindings: {
    code: "=",
    hideInput: "=?",
  },
});
