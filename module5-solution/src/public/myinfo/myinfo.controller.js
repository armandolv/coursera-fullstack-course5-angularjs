(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'ApiPath'];
function MyInfoController(user, ApiPath) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.apiPath = ApiPath;
  console.log('user: ', user);
  console.log('ctrl_user: ', $ctrl.user);
}


})();
