(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page -- categoriesList
  .state('categoriesList', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categorieslist.template.html',
    controller: 'MainCategoriesListController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
//categoriesList.
  .state('itemDetail', {
    url: '/item-detail/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/itemdetails.template.html',
    controller: "ItemDetailsController as itemDetail",
    resolve: {
      item: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });
}

})();
