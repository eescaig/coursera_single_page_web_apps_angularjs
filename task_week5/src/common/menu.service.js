(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath', '$q'];
function MenuService($http, ApiPath, $q) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  // Service to get the favorite dish
  service.getFavoriteDish = function (short_name) {
    var deferred = $q.defer();

    if(short_name!=="") {

    }
    $http({
      method: "GET",
      url: (ApiPath + '/menu_items/'+ short_name + '.json')
    })
    .then(function (response) {
        var foundItem = {};
        foundItem = response.data;

        if (foundItem!==undefined) {
          deferred.resolve(foundItem);
        }
        else {
          console.log("deferred.reject " + foundItem);
          deferred.reject("No such menu number exists");
        }
    })
    .catch(function (errorResponse) {
      console.log("errorResponse.message " + errorResponse.message);
      deferred.reject("No such menu number exists");
    });
    return deferred.promise;
  };

}

})();
