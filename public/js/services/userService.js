angular.module('auth').service('userService', function($http, $q, $state){
  var user;

  this.addUser = function(newUser){
    return $http({
      method: 'POST',
      url: '/api/addUser'
      data: newUser
    })
  };

  this.login = function(credentials){
    var dfd = $q.defer()
    $http({
      method: 'POST',
      url: '/api/login/local'
      data: credentials
    }).then(function(res){
      console.log('Result from user login', res)
      dfd.resolve(res.data);
    })
    return dfd.promise
  }

  this.logout = function(){
    return $http({
      method: 'GET',
      url: '/api/logout'
    }).then(function(){
      return $state.go 'login'
    })
  }

  this.getAuthedUser = function(){
    var dfd = $q.defer()
    if(user){
      dfd.resolve(user);
    } else {
      $http({
        method: 'GET',
        url: '/api/currentUser'
      }).then(function(res){
        console.log('Result getting the logged in user', res);
        dfd.resolve(res.data);
      })
    }
    return dfd.promise
  }
})