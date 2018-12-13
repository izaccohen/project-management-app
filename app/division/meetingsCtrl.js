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

            function createPdf (newarr) {
                var opt = {
                    margin: 1,
                    filename: 'myOrder.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                };
        
                var worker = html2pdf().set(opt).from(newarr).toPdf().save();
                var t = document.getElementById("toPdf");
        workShopSrv.createPdf(t);
            }
        

        }, function(error) {
            
        })

}


    
        

})
