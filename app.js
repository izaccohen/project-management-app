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
        controller: "divCtrl"
    }).when("/new" , {
        templateUrl: "app/division/newTask.html",
        controller: "newTaskCtrl"
    }).when("/meet" , {
        templateUrl: "app/division/meetingssumeries.html",
        controller: "meetingsCtrl"
    })

    
})


