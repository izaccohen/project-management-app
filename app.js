var app = angular.module("projMngApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"

    }).when("/division" , {
        templateUrl: "app/tasks/taskhome.html",
        controller: "divCtrl"
    }).when("/new" , {
        templateUrl: "app/tasks/newTask.html",
        controller: "newTaskCtrl"
    }).when("/meet" , {
        templateUrl: "app/meetings/meetingssumeries.html",
        controller: "meetingsCtrl"
    }).when("/newMeeting" , {
        templateUrl: "app/meetings/newMeeting.html",
        controller: "newMeetingCtrl"
    })

    
})


