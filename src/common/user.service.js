(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = [];
function UserService($http, ApiPath) {
  var service = this;
  
  var registered = false;
  var userData = { };

  service.setUserData = function(first, last, email, phone, menu) {
    userData = {
        firstname: first,
        lastname: last,
        email: email,
        phone: phone,
        favorite: menu
    };
    registered = true;
  }
  
  service.getUserData = function() {
      return userData;
  }
  
  service.isRegistered = function() {
      return registered;
  }
}



})();
