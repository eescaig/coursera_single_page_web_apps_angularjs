(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var listToBuy = this;

  listToBuy.items = ShoppingListCheckOffService.getToBuyItems();

  listToBuy.buyingItem = function(itemIndex) {
    ShoppingListCheckOffService.buyingItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var listAlreadyBought = this;

  listAlreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Cookies",
    quantity: "4"
  },
  {
    name: "Cheese",
    quantity: "2"
  },
  {
    name: "Fruits",
    quantity: "10"
  }
  ];
  var boughtItems = [];

  service.buyingItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  }

}

})();
