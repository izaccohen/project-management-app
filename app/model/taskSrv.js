app.factory("tasks", function ($q, $http) {
    var tasks = [];

    function Task(plainTask) {
        this.taskId = plainTask.taskId;
        this.crew = plainTask.crew;
        this.project = plainTask.project;
        this.owner = plainTask.owner;
        this.dueDate = plainTask.dueDate;
        this.description = plainTask.description;
        this.status = plainTask.status;
        this.meetingCode = plainTask.meetingCode;
    }

    function getFilteredTasks(taskId, crew, project, owner, dueDate, description, status, meetingCode ) {
        var async = $q.defer();
        
        var getTasksURL = "http://my-json-server.typicode.com/izaccohen/project-management-app/tasks?"+ status
        + (status? "&status=" + status:'')
        + (taskId? "&taskId=" + taskId:'')
       + (crew? "&crew=" + crew:"")
        + (project?"&project=" + project:"" )
        + (owner?"&owner=" + owner:"")
        + (dueDate?"&dueDate=" + dueDate:"")
        + (description?"&description=" + description:"")
        + (meetingCode?"&meetingCode=" + meetingCode:"");
    





        
        tasks = [];
        $http.get(getTasksURL).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var task = new Task(response.data[i]);
                tasks.push(task);
                
            }

            async.resolve(tasks);
        }, function (error) {
            async.reject(error);
        });
    

    return async.promise;
}
function cleanTasks() {
    tasks = [];

    
}



    


    return {
        getFilteredTasks: getFilteredTasks,
        cleanTasks: cleanTasks,
        
}


})
