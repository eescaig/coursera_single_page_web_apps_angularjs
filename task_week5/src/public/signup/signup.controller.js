(function () {

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'SignUpService'];
function SignUpController(MenuService, SignUpService) {
  var signUpCtrl = this;
  signUpCtrl.data = "";
  signUpCtrl.errorMessage = "";
  signUpCtrl.messageSuccessful = "";
  signUpCtrl.loginUser = {};

  signUpCtrl.submit = function () {
    signUpCtrl.errorMessage = "";
    var promise = MenuService.getFavoriteDish(signUpCtrl.favoriteDish);

    promise.then(function (response) {
      signUpCtrl.data = response;
      SignUpService.addItem(signUpCtrl.firstName, signUpCtrl.lastName, signUpCtrl.eMail, signUpCtrl.phone, signUpCtrl.data);
      signUpCtrl.loginUser = SignUpService.getItem();
      if(signUpCtrl.loginUser!==undefined) {
        signUpCtrl.messageSuccessful = "Your information has been saved!";
      }
    })
    .catch(function (error) {
      signUpCtrl.favoriteDish = "";
      signUpCtrl.errorMessage = error;
    })
  };

  signUpCtrl.messageIsEmpty = function(message) {
    if(message!==""){
      return true;
    }
    return false;
  };

}

})();
