(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailsController', ItemDetailsController);


ItemDetailsController.$inject = ['item'];
function ItemDetailsController(item) {
  //$scope.menu_items = item.data.menu_items;
  var $ctrlDetail = this;
  $ctrlDetail.menu_items = item.data.menu_items;

}

})();
