(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);


  ItemsController.$inject = ['$stateParams', 'items'];
  function ItemsController($stateParams, items) {
    var itemCtrl = this;
    itemCtrl.items = items['menu_items'];
    itemCtrl.category = items['category'];
  }

})();
