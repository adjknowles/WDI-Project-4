angular
  .module('hometown', ['ngResource', 'angular-jwt', 'ui.router', 'satellizer'])
  .constant('API', 'http://localhost:3000/api')
  .config(MainRouter)
  
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor')
  })
  .config(function($authProvider) {
    $authProvider.facebook({ 
      clientId: 'facebookKey',
      url: 'http://localhost:3000/api/auth/facebook'
    })
  });

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function mapPage(){
    event.preventDefault();
    $("section").hide();
    return $("#map").show();
  }

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "home.html"
      })
      .state('login', {
        url: "/login",
        templateUrl: "login.html"
      })
      .state('register', {
        url: "/register",
        templateUrl: "register.html"
      })
      .state('profile', {
        url: "/profile",
        templateUrl: "profile.html"
      })
      .state('users', {
        url: "/users",
        templateUrl: "users.html"
      })
      .state('recommendations', {
        url: "/recommendations",
        templateUrl: "recommendations.html",
        controller: "RecommendationsController as recommendations"
      })
      .state('newRecommendations', {
        url: "/recommendations/new",
        templateUrl: "newRecommendations.html",
        controller: "RecommendationsController as recommendations"
      })

    $urlRouterProvider.otherwise("/");
  }