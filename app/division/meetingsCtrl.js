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




    // $scope.meetings =[
            
    //     {
    //         "meetingCode": "ch061218",
    //         "participants": "iris, zahi, haim",
    //         "pcrew": "a",
    //         "meetingDate": "12/12/2018"
    //     },
    //     {
    //         "meetingCode": "su051218",
    //         "participants": "roni, anat, haim",
    //         "pcrew": "b",
    //         "meetingDate": "12/12/2018"
    //     },
    //     {
    //         "meetingCode": "pa061218",
    //         "participants": "yuval, nimrod, michael",
    //         "crew": "c",
    //         "meetingDate": "12/12/2018"
    //     }
    //     ];
        

})
