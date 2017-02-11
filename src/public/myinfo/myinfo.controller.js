(function () {
"use strict";

angular.module('public')
.controller("MyInfoController", MyInfoController);


MyInfoController.$inject = ["UserService", "menuItem"];

function MyInfoController(UserService, menuItem) {
  var myInfoCtrl = this;
  
  myInfoCtrl.menuItem = menuItem;
  myInfoCtrl.isRegistered = UserService.isRegistered();
  myInfoCtrl.userInfo = UserService.getUserData();
  
}

})();
