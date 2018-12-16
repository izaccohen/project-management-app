app.controller("newMeetingCtrl", function($scope, user, tasks,meetapp, $location) {
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.createMeet = function () {
        meetapp.createMeeting($scope.nMeetingCode, $scope.nParticipants, $scope.nPcrew, $scope.nMeetingDate )
        .then(function () {
            
            

                $location.path("/meet")
            }, function (err) {
                console.log(err);
            })
    }

})