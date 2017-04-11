(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);


  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var itemCtrl = this;
    itemCtrl.items = items['menu_items'];
    itemCtrl.category = items['category'];
  }

})();
