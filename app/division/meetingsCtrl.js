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
        
        

        

$scope.dispActiveMeetingTasks= function (meetcode){

    $scope.meettasks = [];
    tasks.resetWasEverLoaded() ;
        tasks.getFilteredTasks("", "", "", "","", "", 
        "", meetcode ).then(function (newarr) {
            $scope.meettasks = newarr;
        }, function(error) {
            
        })

}


    
        

})
