app.factory("tasks", function ($q, $http) {
    var tasks = [];
    var wasEverLoaded = false;

    function project(plainProject) {
        this.taskId = plainTask.taskId;
        this.crew = plainTask.crew;
        this.project = plainTask.project;
        this.owner = plainTask.owner;
        this.dueDate = plainTask.dueDate;
        this.description = plainTask.description;
        this.status = plainTask.status;
        this.meetingCode = plainTask.meetingCode;
    }

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
        if (wasEverLoaded) {
            async.resolve(tasks);
        } else {
            tasks = [];}

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
            wasEverLoaded = true;


            async.resolve(tasks);
        }, function (error) {
            async.reject(error);
        });
    

    return async.promise;
}
function cleanTasks() {
    tasks = [];

    
}
function createTask(nTaskId, ncrew, nproject, nowner, ndueDate, nTaskDescription, nstatus, nmeetingCode ) {
    var async = $q.defer();


    var newTask = new Task({taskId:nTaskId, crew: ncrew, project: nproject,
        owner: nowner, dueDate: ndueDate, description: nTaskDescription, 
        status: nstatus, meetingCode: nmeetingCode});

    

        tasks.push(newTask);
    async.resolve(newTask);

    return async.promise;
}


    


    return {
        getFilteredTasks: getFilteredTasks,
        cleanTasks: cleanTasks,
        createTask: createTask,
        
}


})
