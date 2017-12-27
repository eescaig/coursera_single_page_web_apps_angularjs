(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective () {
  var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
          items: '<',
          onRemove: '&',
          myError: '@error'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

  list.emptyList = function () {
    if (list.items.length === 0) {
        return true;
    }
    return false;
  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.searchTerm = "";
  ctrl.found = [];
  ctrl.error = "";

  ctrl.searchMenuItems = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    ctrl.found = [];

    promise.then(function (response) {
      ctrl.found = response;
    })
    .catch(function (error) {
      ctrl.error = error;
    })
  };

  ctrl.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  }

}// controller

MenuSearchService.$inject = ['$http', '$q'];
function MenuSearchService($http, $q) {
  var service = this;
  var matchesItems = [];

  service.getMatchedMenuItems = function (searchTerm) {
    var deferred = $q.defer();

    $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    })
    .then(function (response) {
        var foundItems = [];
        foundItems = response.data.menu_items;
        matchesItems = [];

        angular.forEach(foundItems, function(value, key) {
          if ((searchTerm!==undefined && searchTerm!=="") && value.description.toLowerCase().indexOf(searchTerm) >= 0) {
            matchesItems.push(value);
          }
        });

        if ((searchTerm!==undefined && searchTerm!=="") && matchesItems.length > 0) {
          deferred.resolve(matchesItems);
        }
        else {
          deferred.reject("Nothing found !!");
        }
    })
    .catch(function (errorResponse) {
      console.log(errorResponse.message);
    });

    return deferred.promise;
  };

  service.removeItem = function (itemIndex) {
    matchesItems.splice(itemIndex, 1);
  };
}

})();
