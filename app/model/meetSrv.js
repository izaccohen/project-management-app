app.factory("meetapp", function($q, $http, tasks,user) {
    var meets = [];
    var wasEverLoaded = false;
    function Meet(plainmeet) {
        this.meetingCode = plainmeet.meetingCode;
        this.participants = plainmeet.participants;
        this.pcrew = plainmeet.pcrew;
        this.meetingDate = plainmeet.meetingDate;
    }

    function getAllMeetings(meetingCode, participants, pcrew, meetingDate ) {
        var async = $q.defer();
        if (wasEverLoaded) {
            async.resolve(meets);
        } else {
            meets = [];

        var getMeetingURL = "http://my-json-server.typicode.com/izaccohen/project-management-app/meetings";
        meets = [];
        $http.get(getMeetingURL).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var meet = new Meet(response.data[i]);
                meets.push(meet);
                
            }
            wasEverLoaded = true;


            async.resolve(meets);
        }, function (error) {
            async.reject(error);
        });}
    

    return async.promise;
}

function createMeeting(nMeetingCode, nParticipants, nPcrew, nMeetingDate ) {
    var async = $q.defer();


    var newMeet = new Meet({meetingCode:nMeetingCode, participants: nParticipants, pcrew: nPcrew,
        meetingDate: nMeetingDate});

    

        meets.push(newMeet);
    async.resolve(newMeet);

    return async.promise;
}
return {
    getAllMeetings: getAllMeetings,
    createMeeting:createMeeting,
    
    
}


})
