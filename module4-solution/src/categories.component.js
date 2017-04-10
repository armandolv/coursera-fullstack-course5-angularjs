(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/templates/categories.template.html',
    controller: CategoriesController
  });


  CategoriesController.$inject = []
  function CategoriesController() {
    var $ctrl = this;

    $ctrl.$onInit = function () {

    };

    $ctrl.$onDestroy = function () {

    };

  };

})();
