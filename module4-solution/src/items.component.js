(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/items.template.html',
    controller: ItemsController
  });


  ItemsController.$inject = []
  function ItemsController() {
    var $ctrl = this;

    $ctrl.$onInit = function () {

    };

    $ctrl.$onDestroy = function () {

    };

  };

})();
