app.controller("meetingsCtrl", function($scope, meetapp, user, tasks,$location) {
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }
        $scope.meetingCode = "";
        $scope.participants = "";
        $scope.pcrew = "";
        $scope.meetingDate = "";
        

        $scope.displayAll = function () {
            meetapp.getAllMeetings($scope.meetingCode, $scope.participants, $scope.pcrew, $scope.meetingDate ).then(function (arrmeets) {
                $scope.meetings = arrmeets;
            }, function(error) {
                
            })
            
        }
        $scope.displayAll(); 
        $scope.taskId = "";
        $scope.crew = "";
        $scope.project ="";
        $scope.owner = "";
        $scope.dueDate = "";
        $scope.description = "";
        $scope.status = "";
        $scope.meetingCode ="";
        

$scope.dispActiveMeetingTasks= function (){
    $scope.meetingCode = myMeet;

        tasks.getFilteredTasks($scope.taskId, $scope.crew, $scope.project, $scope.owner,$scope.dueDate, $scope.description, 
            $scope.status, $scope.meetingCode  ).then(function (arrtasks) {
            $scope.meettasks = arrtasks;
        }, function(error) {
            
        })

}


    
        

})
