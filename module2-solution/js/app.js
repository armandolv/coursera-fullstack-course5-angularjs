(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
         .controller('ToBuyController', ToBuyController)
         .controller('AlreadyBoughtController', AlreadyBoughtController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var tobuy = this;

    tobuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

    tobuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buy(itemIndex);
    }

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.itemsBought = ShoppingListCheckOffService.getItemsBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [{ name: "cookies", quantity: 10 }, 
                      { name: "Bottles of water", quantity: 12 }, 
                      { name: "Cakes", quantity: 13 }, 
                      { name: "Onions", quantity: 8 }, 
                      { name: "Tables", quantity: 4 }];
    var itemsBought = [];

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

    service.buy = function (index) {
      itemsBought.push(itemsToBuy[index])
      itemsToBuy.splice(index, 1);
    }
  }

})();