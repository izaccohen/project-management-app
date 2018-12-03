var app = angular.module("projMngApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"

    }).when("/division" , {
        templateUrl: "app/division/divisionhome.html",
        controller: "newRecipeCtrl"
    })

    .when("/crew", {
        templateUrl: "app/crew/crewhome.html",
        controller: "recipeGalleryCtrl"
    })
})


