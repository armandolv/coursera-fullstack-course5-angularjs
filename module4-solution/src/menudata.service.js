(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$http']
  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function () {
      // console.log('All categories');
      var response = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      }).then(function (result) {
          var items = result.data;
          return items;
      });

      return response;
    }

    service.getItemsForCategory = function(categoryShortName) {
      var response = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
      }).then(function (result) {
          var items = result.data;
          return items;
      });

      return response;
    }
  }

})();
