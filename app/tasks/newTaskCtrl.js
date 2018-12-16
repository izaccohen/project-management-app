app.controller("newTaskCtrl", function($scope, user, tasks,$location) {
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.createTask = function () {
        tasks.createTask($scope.nTaskId, $scope.ncrew, $scope.nproject, $scope.nowner, $scope.ndueDate, $scope.nTaskDescription, $scope.nstatus,
             $scope.nmeetingCode).then(function () {
            
            

                $location.path("/division")
            }, function (err) {
                console.log(err);
            })
    }

})