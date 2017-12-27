(function () {

angular.module('public')
.controller('RegisteredUserController', RegisteredUserController);

RegisteredUserController.$inject = ['item'];
function RegisteredUserController(item) {
  var regUserCtrl = this;

  regUserCtrl.firstName = item.firstName;
  regUserCtrl.lastName = item.lastName;
  regUserCtrl.eMail = item.eMail;
  regUserCtrl.phone = item.phone;
  regUserCtrl.favoriteDish = item.favoriteDish;

  regUserCtrl.userRegistered = function() {
    if(item.firstName!==undefined){
      return true;
    }
    return false;
  };

}

})();
