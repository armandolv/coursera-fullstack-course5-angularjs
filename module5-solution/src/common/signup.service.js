(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);


SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;
  service.user = null;

  service.getUser = function () {
    return service.user;
  };

  service.setUser = function (user) {
    service.user = user;
  };

  service.getFavoriteDish = function (short_name) {
    return $http.get(ApiPath + '/menu_items/'+ (!short_name ? short_name : short_name.toUpperCase()) +'.json').then(function (response) {
      return response.data;
    });
  };

}



})();
