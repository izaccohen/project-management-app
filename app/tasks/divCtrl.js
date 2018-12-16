app.controller("divCtrl", function($scope, user, tasks,$location){
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }
        $scope.taskId = "";
        $scope.crew = "";
        $scope.project = "";
        $scope.owner = "";
        $scope.dueDate = "";
        $scope.description = "";
        $scope.status = "";
        $scope.meetingCode = "";
        $scope.filterDeclaration= "";

        $scope.search = function () {
            tasks.getFilteredTasks($scope.taskId, $scope.crew, $scope.project, $scope.owner,$scope.dueDate, $scope.description, 
                $scope.status, $scope.meetingCode  ).then(function (arrtasks) {
                $scope.tasks = arrtasks;
            }, function(error) {
                
            })
            
        }
        $scope.search(); 
        

    


// $scope.test="blabla";
// $scope.tasks =[
//     {
//         "taskId":"why1",
//         "crew": "a",
//         "project": "korea",
//         "owner": "iris",
//         "dueDate":"tbd",
//         "description": "do something1 for the project",
//         "status": "open",
//         "meetingCode": "ch061218"
//     },
//     {
//         "taskId":"why2",
//         "crew": "a",
//         "project": "korea",
//         "owner": "iris",
//         "dueDate":"tbd",
//         "description": "do something2 for the project",
//         "status": "open",
//         "meetingCode": "ch061218"
//     },
//     {
//         "taskId":"why3",
//         "crew": "b",
//         "project": "speedy",
//         "owner": "izac",
//         "dueDate":"tbd",
//         "description": "do something3 for the project",
//         "status": "open",
//         "meetingCode": "su051218"
//     },
//     {
//         "taskId":"why4",
//         "crew": "b",
//         "project": "speedy",
//         "owner": "iris",
//         "dueDate":"tbd",
//         "description": "do something4 for the project",
//         "status": "open",
//         "meetingCode": "su051218"
//     },
//     {
//         "taskId":"why5",
//         "crew": "a",
//         "project": "firma",
//         "owner": "iris",
//         "dueDate":"tbd",
//         "description": "do something5 for the project",
//         "status": "open",
//         "meetingCode": "ch061218"
//     },
//     {
//         "taskId":"why6",
//         "crew": "c",
//         "project": "never",
//         "owner": "iris",
//         "dueDate":"tbd",
//         "description": "do something6 for the project",
//         "status": "open",
//         "meetingCode": "pa061218"
//     }               
// ]
})