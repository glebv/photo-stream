// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('photoStream', ['ionic'])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('stream', {
        url: "/stream",
        abstract: true,
        templateUrl: "views/common.html"
      })
      .state('stream.home', {
        url: "/home",
        views: {
          'mainContent' :{
            templateUrl: "views/home.html"
          }
        }
      })
      .state('stream.subs', {
        url: "/subs",
        views: {
          'mainContent' :{
            templateUrl: "views/subs.html"
          }
        }
      })
    $urlRouterProvider.otherwise("/stream/home");
  })

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {

    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  })
;
