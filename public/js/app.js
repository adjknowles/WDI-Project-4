angular
  .module('hometown', ['ngResource', 'angular-jwt', 'ui.router', 'satellizer'])
  .constant('API', '/api')
  .config(MainRouter)
  
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor')
  })
  .config(function($authProvider) {
    $authProvider.facebook({ 
      clientId: 'facebookKey',
      url: '/api/auth/facebook'
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
      .state('showUser', {
        url: "/users/:id",
        templateUrl: "showUser.html",
        controller: "UsersController as users"
      })
      .state('newRecommendations', {
        url: "/recommendations/new",
        templateUrl: "newRecommendations.html",
        controller: "RecommendationsController as recommendations"
      })
      .state('showRecommendation', {
        url: "/recommendations/:id",
        templateUrl: "showRecommendation.html",
        controller: "RecommendationsController as recommendations"
      })
      .state('recommendations', {
        url: "/recommendations",
        templateUrl: "recommendations.html",
        controller: "RecommendationsController as recommendations"
      })
      

    $urlRouterProvider.otherwise("/");

  }