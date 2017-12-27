(function () {
'use strict';

angular.module('DataApp')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  // Metodo que devuelve las categorías
  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });

    return response;
  };

  // Metodo que devuelve todos los elementos de una categoría
  service.getItemsForCategory = function (categoryShortName) {

    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });

    return response;
  };
}

})();
