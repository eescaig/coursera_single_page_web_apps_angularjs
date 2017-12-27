(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = [];
function SignUpService() {
    var service = this;
    // Object login user
    var item = {};

    service.addItem = function (firstName, lastName, eMail, phone, favoriteDish) {
      item = {
        firstName: firstName,
        lastName: lastName,
        eMail: eMail,
        phone: phone,
        favoriteDish: favoriteDish
      };
    };

    service.getItem = function () {
      return item;
    };
}

})();
