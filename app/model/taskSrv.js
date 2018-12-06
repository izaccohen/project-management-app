app.factory("tasks", function ($q, $http) {
    var tasks = {};

    function task(plainTask) {
        this.taskId = plainTask.taskId;
        this.crew = plainTask.crew;
        this.project = plainTask.project;
        this.owner = plainTask.owner;
        this.dueDate = plainTask.dueDate;
        this.status = plainTask.status;
        this.meetingCode = plainTask.meetingCode;
    }

    function getFilteredTasks() {
        var async = $q.defer();



        var getTasksURL = "http://my-json-server.typicode.com/izaccohen/project-management-app/users?status=open";

        $http.get(getTasksURL).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var task = new task(response.data[i]);
                tasks.push(task);
            }

            async.resolve(tasks);
        }, function (error) {
            async.reject(error);
        });
    }

    return async.promise;



    


    return {
        getFilteredTasks: getFilteredTasks,

}


})
