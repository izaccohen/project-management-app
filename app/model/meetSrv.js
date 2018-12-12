app.factory("meet", function($q, $http,tasks) {

    function meet(plainmeet) {
        this.meetingCode = plainmeet.meetingCode;
        this.participants = plainmeet.participants;
        this.pcrew = plainmeet.pcrew;
        this.meetingDate = plainmeet.meetingDate;
    }




    
})
