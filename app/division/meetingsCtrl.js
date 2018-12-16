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
           




            $scope.doc = new jsPDF()


            $scope.doc.text(20, 30 ,  'Meeting summery code:  '+  meetcode);
            $scope.doc.text(20, 40 ,  'Crew:  '+  newarr[0].crew);

            $scope.doc.addPage();

            for(var i = 0; i < newarr.length; i ++) {
                    $scope.doc.text(20,50, $scope.doc.splitTextToSize(Object.values(newarr[i]),180));
                    $scope.doc.addPage();
                    // $scope.doc.text(20, 50 + (i * 20),  'Task id: \n'+ newarr[i].taskId +' xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n  Project: '+ newarr[i].project +'   Owner: '+ newarr[i].owner +'   Duedate: '+ newarr[i].dueDate);
   
            }
            


            $scope.doc.save(meetcode)

            
        

        }, function(error) {
            
        })

}
 


    
        

})
