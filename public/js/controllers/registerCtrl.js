angular.module('auth').controller('registerCtrl', function($scope, userService){
  $scope.addUser = function(newUser){
    userService.addUser(newUser).then(function(res){
      console.log('Result from adding user', res);
    })
  }
})