angular.module("app", [])
    .controller("hideCtrl", function($scope){
        $scope.hide = true;
        $scope.setFalse = function(){
            $scope.hide = false;
        }
    });