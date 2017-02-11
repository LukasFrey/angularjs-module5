(function(){
    "use strict";
    
    
    angular.module('public')
    .controller("SignupController", SignupController);
    
    
    
    SignupController.$inject = ["$scope", "$http", "ApiPath", "UserService"];
    function SignupController($scope, $http, ApiPath, UserService) {

        $scope.sendForm = function() {
            // we know that the form is valid, let's validate the favourite menu
            checkFavorite($scope.favorite);
        };
        

        function checkFavorite(fav) {
            return $http.get(ApiPath + "/menu_items/" + fav.toUpperCase() + ".json").then(
                function success(response) {
                    $scope.menuOk = true;
                    saveData();
                },
                function error(response) {
                    $scope.menuOk = false;
                    $scope.formSaved = false;
                }
            );
        };      
        
        function saveData() {
            UserService.setUserData($scope.firstname, $scope.lastname, $scope.email, $scope.phone, $scope.favorite);
            $scope.formSaved = true;
        }
    };



})();