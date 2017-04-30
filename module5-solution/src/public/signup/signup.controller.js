(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var $ctrl = this;
  $ctrl.user = {};
  $ctrl.itemFound = true;
  
  $ctrl.submit = function () {
    SignupService.getFavoriteDish($ctrl.user.favorite_dish)
      .then(function (result) {
        $ctrl.itemFound = true;
        $ctrl.user.fav = result;
        SignupService.user = $ctrl.user;
        $ctrl.completed = true;
      })
      .catch(function (result) {
        $ctrl.itemFound = false;
      });
  }
}

})();
