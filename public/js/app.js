angular.module('auth', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/login');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '../templates/home.html',
        controller: 'homeCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: '../templates/login.html',
        controller: 'loginCtrl'
      })
      .state('logout', {
        url: '/logout',
        controller: function(userService){
          userService.logout()
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: '../templates/register.html',
        controller: 'registerCtrl'
      })
      .state('auth', {
        abstract: true,
        template: '<ui-view></ui-view>',
        resolve: {
          user: function(userService){
            return userService.getAuthedUser()
          }
        }
      })
      .state('auth.profile', {
        url: '/profile',
        templateUrl: '../templates/profile.html',
        controller: 'profileCtrl'
      })
      .state('auth.friends', {
        url: '/me/friends',
        templateUrl: '../templates/friends.html',
        controller: 'friendsCtrl'
      })
  })