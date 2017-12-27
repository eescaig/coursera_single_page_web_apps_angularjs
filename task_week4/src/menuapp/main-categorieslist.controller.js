(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesListController', MainCategoriesListController);


MainCategoriesListController.$inject = ['items'];
function MainCategoriesListController(items) {
  var $ctrl = this;
  $ctrl.items = items.data;
}

})();
