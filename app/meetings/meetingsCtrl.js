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
        

        $scope.displaySearch = function () {
            meetapp.searchMeetings($scope.meetingCode, $scope.participants, $scope.pcrew, $scope.meetingDate ).then(function (arrSearchMeets) {
                $scope.meetings = arrSearchMeets;
            }, function(error) {
                
            })
            
        }



        

        

$scope.dispActiveMeetingTasks= function (meetcode){

    $scope.meettasks = [];
    tasks.resetWasEverLoaded() ;
        tasks.getFilteredTasks("", "", "", "","", "", 
        "", meetcode ).then(function (newarr) {
            $scope.meettasks = newarr;
           
           
            $scope. today = new Date();
            $scope. dd = $scope.today.getDate();
            $scope. mm = $scope.today.getMonth()+1; //January is 0!
            $scope. yyyy =$scope.today.getFullYear();
            
            if($scope.dd<10) {
                $scope.dd = '0'+$scope.dd
            } 
            
            if($scope.mm<10) {
                $scope.mm = '0'+$scope.mm
            } 
            
            $scope.today = $scope.mm + '/' + $scope.dd + '/' + $scope.yyyy;



            $scope.doc = new jsPDF()
            $scope.doc.setFontSize(9);
            $scope.doc.text(15, 20 ,  'Date published: '+   $scope.today );
            $scope.doc.setFontSize(11);
            $scope.doc.text(20, 30 ,  'Meeting summery code:'+  meetcode );
            $scope.doc.text(20, 40 ,  'Crew:  '+  newarr[0].crew);
            $scope.doc.text(20, 50 ,  'Each task is printed on its own page (untill bug is fixed)  ');
            $scope.doc.text(20, 60 ,  'in this meeting code there are:   '+ newarr.length + '   tasks');



            $scope.doc.addPage();

            for(var i = 0; i < newarr.length; i ++) {
                    $scope.doc.text(20,50, $scope.doc.splitTextToSize(Object.values(newarr[i]),180));
                    $scope.doc.addPage();
   
            }
            


            $scope.doc.save(meetcode)

            
        

        }, function(error) {
            
        })

}
 


    
        

})
