(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.listDishes = "";
  $scope.messageToShow = "";
  $scope.styleText = "text-danger";
  $scope.styleInput = "";

  $scope.showMessage = function() {
    var numberDishes = countNumberDishes($scope.listDishes);

    if (numberDishes==0) {
      $scope.messageToShow = "Please enter data first";
      $scope.styleText = "text-danger";
      $scope.styleInput = "has-error";
    }
    else if (numberDishes>0 && numberDishes<=3) {
      $scope.messageToShow = "Enjoy!";
      $scope.styleText = "text-success";
      $scope.styleInput = "has-success";
    }
    else {
      $scope.messageToShow = "Too much!";
      $scope.styleText = "text-success";
      $scope.styleInput = "has-success";
    }
  };

  function countNumberDishes(listDishesString) {
    var pattern = ',';
    var arrayOfDishes = listDishesString.split(pattern);
    var totalDishes = 0;

    if (isEmptyString(listDishesString)) {
      return totalDishes;
    }
    else {
      for (var i = 0; i < arrayOfDishes.length; i++) {
        if (!isEmptyString(arrayOfDishes[i])) {
          totalDishes ++;
        }
      }
      return totalDishes;
    }
  }

  function isEmptyString(string) {
    var reExp = /^\s*$/;
    var value = reExp.test(string);
    return value;
  }
}

})();
