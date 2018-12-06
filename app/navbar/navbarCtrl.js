app.controller("navbarCtrl", function($scope, user, tasks,$location) {
    
    $scope.isUserLoggedIn = function() {
        return user.isLoggedIn();
    }

    $scope.logout = function() {
        user.logout();
        $location.path("/");
    }

});