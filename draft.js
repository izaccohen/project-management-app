var getTasksURL = "http://my-json-server.typicode.com/izaccohen/project-management-app/tasks?status="+ status + "|taskId=" ;





var getTasksURL = "http://my-json-server.typicode.com/izaccohen/project-management-app/tasks?project=speedy&(owner=iris|owner=izac)";



var getTasksURL = "http://my-json-server.typicode.com/izaccohen/project-management-app/tasks?status="+ status
         + "&taskId=" + taskId
        + "&crew=" + crew
         + "&project=" + project 
         + "&owner=" + owner + 
         "&dueDate=" + dueDate 
         + "&description=" + description
        + "&meetingCode=" + meetingCode
        ;