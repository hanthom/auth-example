angular.module('auth').controller('loginCtrl', function($scope, userService){
  $scope.login = function(credentials){
    userService.login(credentials).then(function(){
      $scope.credentials = {}
    })
  }
})